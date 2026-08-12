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

export const metadata: Metadata = {
  title: "Harshath Mukundan",
  description: "AI Engineer specializing in LLMs and Generative AI.",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground max-w-2xl mx-auto py-12 sm:py-24 px-6 relative pb-32`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
