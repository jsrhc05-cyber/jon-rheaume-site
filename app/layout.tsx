import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jon Rheaume | Revenue Architecture & Pipeline Systems",
  description:
    "Pipeline systems, revenue architecture, and GTM operating models for B2B SaaS companies.",
  openGraph: {
    title: "Jon Rheaume | Revenue Architecture & Pipeline Systems",
    description:
      "Pipeline systems, revenue architecture, and GTM operating models for B2B SaaS companies.",
    url: "https://www.jonrheaume.com",
    siteName: "Jon Rheaume",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
