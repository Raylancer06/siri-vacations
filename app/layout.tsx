import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Siri Vacations | Curated South India Holidays & International Tours",
  description: "Bengaluru's premier travel agency for curated Western Ghats getaways, Coorg coffee plantation stays, Kerala backwaters, and bespoke international holidays. 24/7 concierge support.",
  keywords: "Siri Vacations, Coorg tour package, Karnataka tourism, Kerala houseboats, Western Ghats resorts, Bangalore travel agency, Dubai tour packages, Bali packages from Bangalore",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased min-h-screen flex flex-col font-body selection:bg-primary-container selection:text-white">
        <ModalProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <InquiryModal />
          <ScrollToTop />
        </ModalProvider>
      </body>
    </html>
  );
}
