import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Xu | Web3 Developer",
  description: "Portfolio of Mark Xu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`scroll-smooth ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-neutral-950 text-neutral-200 font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}