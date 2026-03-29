import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dental Solutions | Dr. Fatima Anees - Premium Dental Care",
    template: "%s | Dental Solutions"
  },
  description: "Experience world-class dental solutions with Dr. Fatima Anees in Rahim Yar Khan. Specialized in Laser Dentistry, Oral Surgery, Scaling & Polishing, and Smile Makeovers.",
  keywords: [
    "Dental Solutions",
    "Dr. Fatima Anees",
    "Best Dentist in Rahim Yar Khan",
    "Laser Dentistry RYK",
    "Oral Surgery",
    "Dental Implant",
    "Teeth Whitening",
    "Smile Makeover",
    "Scaling and Polishing",
    "Dental Clinic Rahim Yar Khan",
    "Dental Solutions RYK"
  ],
  authors: [{ name: "Dr. Fatima Anees" }],
  creator: "Dr. Fatima Anees",
  publisher: "Dental Solutions",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://dentalsolutionsryk.com"), // Replace with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dental Solutions | Dr. Fatima Anees",
    description: "Premium Dental Care in Rahim Yar Khan. Specialized in advanced dentistry and patient care.",
    url: "https://dentalsolutionsryk.com",
    siteName: "Dental Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Solutions | Dr. Fatima Anees",
    description: "Premium Dental Care in Rahim Yar Khan. Specialized in advanced dentistry and patient care.",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
