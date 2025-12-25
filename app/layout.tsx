import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="zh-CN" className="scroll-smooth">
      <body className="bg-neutral-950 text-neutral-200 font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}