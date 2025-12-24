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
        1. 删除了 Google Fonts (Geist, Geist_Mono) 的引用
        2. 这里的 antialiased 是 Tailwind 的平滑抗锯齿类
      */}
      <body className="antialiased bg-neutral-950 text-neutral-200">
        {children}
      </body>
    </html>
  );
}