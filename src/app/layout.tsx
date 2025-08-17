import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Full Stack Developer and Product Specialist with expertise in React, Next.js, Python, and AWS. Building technology that creates measurable impact.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Python", "AWS", "Portfolio"],
  authors: [{ name: "Portfolio Developer" }],
  openGraph: {
    title: "Portfolio - Full Stack Developer",
    description: "Full Stack Developer and Product Specialist with expertise in React, Next.js, Python, and AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
