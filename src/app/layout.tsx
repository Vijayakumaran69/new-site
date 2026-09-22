import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { getAssetPath } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const logoUrl = getAssetPath("/xenclavis-logo.png");
const faviconUrl = getAssetPath("/favicon.png");

export const metadata: Metadata = {
  metadataBase: new URL("https://xenclavis.com"),
  title: "Xenclavis | Enterprise Cybersecurity & Threat Intelligence",
  description:
    "Xenclavis helps organizations identify, assess, understand, and remediate security risks before those risks become business problems. Core services include VAPT, Web, Mobile, API, Network Security, Source Code Review, and Digital Forensics. We Secure What You Create.",
  icons: {
    icon: [
      { url: logoUrl, type: "image/png" },
      { url: faviconUrl, type: "image/png" },
    ],
    shortcut: logoUrl,
    apple: logoUrl,
  },
  keywords: [
    "Cybersecurity",
    "VAPT",
    "Penetration Testing",
    "Web Application Security",
    "API Security",
    "Mobile Security",
    "Network Security",
    "Source Code Review",
    "Digital Forensics",
    "Security Assessments",
    "GRC",
    "Xenclavis",
  ],
  authors: [{ name: "Xenclavis Security Engineering Team" }],
  openGraph: {
    title: "Xenclavis | We Secure What You Create",
    description:
      "Enterprise cybersecurity built to identify, understand, and reduce risk before it becomes a business problem.",
    url: "https://xenclavis.com",
    siteName: "Xenclavis",
    locale: "en_US",
    type: "website",
    images: [{ url: logoUrl, width: 1024, height: 1021, alt: "Xenclavis Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xenclavis | Enterprise Cybersecurity",
    description:
      "Cybersecurity built to identify, understand and reduce risk before it becomes a business problem.",
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full bg-[#06080C] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
        {children}
      </body>
    </html>
  );
}
