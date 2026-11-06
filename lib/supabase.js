import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = () => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith("http") &&
    !supabaseUrl.includes("your-project")
  );
};

export const getSupabaseClient = () => {
  if (!isSupabaseConfigured()) {
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

export async function insertServiceBooking(bookingData) {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error: "Supabase credentials not configured in environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY).",
      code: "CONFIG_MISSING"
    };
  }

  const supabase = getSupabaseClient();
  try {
    const { data, error } = await supabase
      .from("service_requests")
      .insert([
        {
          name: bookingData.name,
          phone: bookingData.phone,
          email: bookingData.email,
          service: bookingData.service,
          urgency: bookingData.urgency || "Standard",
          address: bookingData.address || "",
          message: bookingData.message || "",
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      return { success: false, error: error.message, code: error.code };
    }

    return { success: true, data: data[0] };
  } catch (err) {
    return { success: false, error: err.message, code: "UNEXPECTED_ERROR" };
  }
}

