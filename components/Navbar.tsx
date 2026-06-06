"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import XIcon from "@/components/Icons";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const NAV_ITEMS = [
  { name: "首页", href: "/" },
  { name: "关于我", href: "/about" },
];

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top+=10 top",
      end: "bottom bottom",
      onUpdate: ({ progress }) => {
        gsap.to(nav, {
          backgroundColor: `rgba(10, 10, 8, ${0.2 + progress * 0.65})`,
          borderBottomColor: `rgba(58, 58, 54, ${Math.min(progress * 2, 1) * 0.3})`,
          boxShadow: `0 1px 3px rgba(0,0,0,${Math.min(progress, 1) * 0.2})`,
          duration: 0.2,
        });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-transparent"
      style={{ backgroundColor: "rgba(10, 10, 8, 0.2)" }}
    >
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-lg tracking-tight hover:text-white transition-colors"
        >
          Mark Xu
        </Link>

        <div className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-surface-400 hover:text-accent-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 text-surface-500">
          <a
            href="https://github.com/sijiruchuen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://x.com/mark_xu17172"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <XIcon size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
