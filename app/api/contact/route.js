import { NextResponse } from "next/server.js";
import { isSupabaseConfigured, insertServiceBooking, getSupabaseClient } from "../../../lib/supabase.js";

// Email regex pattern
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Phone regex: at least 10 digits
const PHONE_REGEX = /^[\d\s\(\)\+\-\.]{10,20}$/;

export async function GET() {
  const configured = isSupabaseConfigured();
  if (!configured) {
    return NextResponse.json({
      status: "unconfigured",
      message: "Supabase credentials are not configured in environment variables.",
      instructions: "Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local to enable database storage."
    });
  }

  const supabase = getSupabaseClient();
  try {
    const { data, error } = await supabase
      .from("service_requests")
      .select("count", { count: "exact", head: true });

    if (error) {
      return NextResponse.json({
        status: "error",
        message: "Failed to query database table.",
        error: error.message
      }, { status: 500 });
    }

    return NextResponse.json({
      status: "connected",
      message: "Supabase connection verified successfully.",
      table: "service_requests"
    });
  } catch (err) {
    return NextResponse.json({
      status: "error",
      message: err.message
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, urgency, address, message } = body;

    const validationErrors = {};

    if (!name || name.trim().length < 2) {
      validationErrors.name = "Full name must be at least 2 characters.";
    }

    if (!email || !EMAIL_REGEX.test(email.trim())) {
      validationErrors.email = "Please provide a valid email address (e.g., name@domain.com).";
    }

    const digitsOnly = (phone || "").replace(/\D/g, "");
    if (!phone || !PHONE_REGEX.test(phone.trim()) || digitsOnly.length < 10) {
      validationErrors.phone = "Please enter a valid phone number with at least 10 digits.";
    }

    if (!service) {
      validationErrors.service = "Please select a service category.";
    }

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { success: false, errors: validationErrors, message: "Validation failed." },
        { status: 400 }
      );
    }

    // Attempt to insert into database
    const dbResult = await insertServiceBooking({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      service,
      urgency: urgency || "Standard (Today)",
      address: (address || "").trim(),
      message: (message || "").trim(),
    });

    if (!dbResult.success) {
      if (dbResult.code === "CONFIG_MISSING") {
        return NextResponse.json(
          {
            success: false,
            configured: false,
            code: "CONFIG_MISSING",
            message: "Database credentials (NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY) are not configured. The request could not be stored in Supabase.",
          },
          { status: 503 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          code: dbResult.code,
          message: dbResult.error || "Database insert operation failed.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Service request successfully recorded in database.",
        booking: dbResult.data,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing the request." },
      { status: 500 }
    );
  }
}

