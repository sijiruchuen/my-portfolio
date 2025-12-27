// components/Navbar.tsx
import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import XIcon from "@/components/Icons";

// 导航数据配置
const NAV_ITEMS = [     
{ name: '技术栈', href: '/#skills' },// 注意：加了 / 防止在其他页面点击时跳不回来
{ name: '我的项目', href: '/#projects' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tighter hover:text-white transition-colors">
        The Blog of Mark Xu
        </Link>

        {/* 中间链接 */}
        <div className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-neutral-400 hover:text-blue-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* 社交图标 */}
        <div className="flex gap-4">
          <a href="https://github.com/sijiruchuen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://x.com/mark_xu17172" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <XIcon size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}