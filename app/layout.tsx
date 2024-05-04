import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";
const AnekTelugu = Anek_Telugu({ subsets: ["latin"],
  variable:  "--font-caption",
 });

export const metadata: Metadata = {
  title: "LAWAN Mouctar Ali . Software Engineer",
  description: 
  "data Science, python, devops docker, nodejs, oracle, react, Tailwind, javaScript, TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable,AnekTelugu, "font-sans h-full bg-background text-foreground ")}>{children}</body>
    </html>
  );
}
