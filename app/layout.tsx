import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // ✅ keep this
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata = {
  title: "Soul Of Lanka",
  description: "Discover Sri Lanka with Soul Of Lanka",
  icons: {
    icon: '/icon-v2.ico', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer /> {/* ✅ keep only here */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
