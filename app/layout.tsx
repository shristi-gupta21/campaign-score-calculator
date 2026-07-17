import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Campaign Calculator",
  description: "Campaign Calculator for Redial & Guardrails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full font-inter antialiased", inter.variable, geist.variable)}
    >
      <body className="min-h-full flex flex-col max-w-7xl mx-auto px-10 max-2xl:px-4">
        <Header />
        {children}
      </body>
    </html>
  );
}
