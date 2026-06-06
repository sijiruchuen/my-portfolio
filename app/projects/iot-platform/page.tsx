"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GsapReveal, GsapTextSplit } from "@/components/GsapReveal";

const HIGHLIGHTS = [
  "基于 Next.js 16 App Router 搭建前后端一体化应用，完成注册登录、作品生成、公开广场、个人作品管理与积分扣费流程",
  "使用 NextAuth v5 + Prisma + PostgreSQL 实现用户认证、会话管理、作品持久化与公开/私有权限控制",
  "封装 Google Gemini 图像生成接口，支持文生图、图生图、参数校验、异常处理与 Mock 降级",
  "使用 Tailwind CSS + Radix UI 实现响应式页面、弹窗交互、瀑布流展示和通用组件复用",
  "基于 Prisma + Neon 实现积分扣费与模拟充值，完成从前端到数据库的完整业务闭环",
];

const TAGS = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "Radix UI",
  "NextAuth v5",
  "Prisma",
  "PostgreSQL",
  "Neon",
  "Google Gemini API",
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-2xl mx-auto px-6 pt-28 pb-24">
        <GsapReveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-8"
          >
            <ArrowLeft size={16} /> 返回项目列表
          </Link>
        </GsapReveal>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-white font-display">
            <GsapTextSplit
              text="PixelForge AIGC"
              as="span"
              delay={0.1}
            />
          </h1>
          <GsapReveal delay={0.4}>
            <p className="text-lg text-surface-400 font-light">
              AI 图像生成平台
            </p>
          </GsapReveal>
        </div>

        <GsapReveal delay={0.3}>
          <div className="w-full h-px bg-linear-to-r from-transparent via-surface-800/50 to-transparent mb-8" />
        </GsapReveal>

        <GsapReveal delay={0.4}>
          <div className="flex flex-wrap gap-1.5 mb-8">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-surface-900/60 text-surface-400 border border-surface-800/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </GsapReveal>

        <GsapReveal delay={0.5} direction="up">
          <div className="prose prose-invert prose-neutral max-w-none prose-p:text-surface-400 prose-p:leading-relaxed mb-8">
            <p className="text-[15px]">
              基于 Next.js 开发的 AI 图像生成平台，支持文生图、图生图、用户注册登录、公开作品广场、
              个人作品管理、积分扣费与模拟充值等功能，完成了从前端页面、服务端接口到数据库持久化的
              完整业务流程搭建。
            </p>
          </div>
        </GsapReveal>

        <GsapReveal delay={0.6} direction="up">
          <h2 className="text-lg font-bold text-white mb-4 font-display">核心职责与技术实践</h2>
        </GsapReveal>

        <GsapReveal delay={0.7} direction="up">
          <ul className="space-y-2.5 mb-8">
            {HIGHLIGHTS.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-surface-400 text-sm leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-accent-400/60" />
                {item}
              </li>
            ))}
          </ul>
        </GsapReveal>

        <GsapReveal delay={0.8}>
          <a
            href="https://my-aigc-app-8xgd.vercel.app/explore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-white font-medium transition-colors text-sm shadow-lg shadow-accent-600/20"
          >
            访问在线地址 <ExternalLink size={15} />
          </a>
        </GsapReveal>
      </main>
    </div>
  );
}
