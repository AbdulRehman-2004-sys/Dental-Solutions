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
    default: "LALA MEDICAL COMPLEX | Rahim Yar Khan - Advanced Healthcare",
    template: "%s | LALA MEDICAL COMPLEX"
  },
  description: "Experience advanced healthcare at LALA MEDICAL COMPLEX in Rahim Yar Khan. Specialized in 24/7 Emergency, ICU, General/Orthopedic Surgery, and Specialized Polyclinic services.",
  keywords: [
    "Lala Medical Complex",
    "Lala Hospital Rahim Yar Khan",
    "Best Hospital in Rahim Yar Khan",
    "24/7 Emergency RYK",
    "General Surgery Rahim Yar Khan",
    "Orthopedic Hospital RYK",
    "Sehat Insaf Card Hospital",
    "Specialized Poly Clinic",
    "Lala Medical Complex RYK"
  ],
  authors: [{ name: "LALA MEDICAL COMPLEX" }],
  creator: "LALA MEDICAL COMPLEX",
  publisher: "LALA MEDICAL COMPLEX",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://lalamedicalcomplex.com"), // Replace with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LALA MEDICAL COMPLEX | Rahim Yar Khan",
    description: "Advanced Healthcare and Surgical Excellence in Rahim Yar Khan. 24/7 Emergency and specialized care.",
    url: "https://lalamedicalcomplex.com",
    siteName: "LALA MEDICAL COMPLEX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LALA MEDICAL COMPLEX | Rahim Yar Khan",
    description: "Advanced Healthcare and Surgical Excellence in Rahim Yar Khan. 24/7 Emergency and specialized care.",
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
