import type { Metadata } from "next";
import "./globals.css";

// 这里的 title 和 description 会显示在浏览器标签页和 SEO 搜索结果里
export const metadata: Metadata = {
  title: "Mark Xu | Web3 Developer",
  description: "Portfolio of Mark Xu, a Web3 & Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      {/* 关键修改：
         1. 删除了顶部 import { Geist ... } from "next/font/google"
         2. 删除了 body 里的 ${geistSans.variable} 等变量
         3. 只保留了 antialiased (平滑抗锯齿)
      */}
      <body className="antialiased bg-neutral-950 text-neutral-200">
        {children}
      </body>
    </html>
  );
}