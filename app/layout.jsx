import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "PowerSupply – Premium Technical, Electrical & Facility Services",
  description: "Specialized AC repair, refrigerator servicing, elevator maintenance, and certified on-site security services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="bg-slate-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
