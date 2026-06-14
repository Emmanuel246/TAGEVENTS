import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/StarBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "TAG Events | Curating Refined experience for life's finest celebration.",
  description: "The Assistant Guru (TAG) Events - Luxury Event Planning & Management Company. Curating Refined experience for life's finest celebration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased selection:bg-white/20 ${cormorant.variable}`}
      >
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
