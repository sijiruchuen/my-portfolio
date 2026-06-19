"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  School,
  Briefcase,
  Mail,
  ExternalLink,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import { TextScramble } from "@/components/ui/text-scramble"
import { GsapReveal, GsapStagger, GsapTextSplit } from "@/components/GsapReveal"
import { gsap } from "@/lib/gsap"

const FRONTEND_SKILLS = [
  "JavaScript / TypeScript",
  "React 组件化开发",
  "Hooks / 状态管理",
  "Tailwind CSS",
  "Radix UI",
  "响应式页面与通用组件封装",
]

const FULLSTACK_SKILLS = [
  "Next.js 全栈开发",
  "App Router",
  "Route Handlers",
  "Server Actions",
  "SSR / CSR",
  "前后端一体化架构",
]

const AUTH_DB_SKILLS = [
  "NextAuth / JWT / Session",
  "Prisma + PostgreSQL",
  "数据建模与 CRUD",
  "事务处理与迁移管理",
  "Neon 数据库接入",
]

const TOOLING_SKILLS = [
  "Claude Code",
  "Cursor",
  "Git / GitHub",
  "AI 辅助开发调试",
]

export default function AboutPage() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollIndicatorRef.current) return

    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      opacity: 0.4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.2,
    })
  }, [])

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      {/* │││ HERO — Full viewport opening │││ */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-400/[0.03] blur-3xl" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center gap-8 -mt-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-surface-500 font-mono">
            Hover to decode
          </p>

          <TextScramble
            text="MARK XU"
            className="text-7xl sm:text-8xl md:text-9xl"
            autoPlay
          />

          <p className="text-sm text-surface-500 font-light tracking-wide">
            前端开发 · Web3 探索者
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] text-surface-600 font-mono tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div
            ref={scrollIndicatorRef}
            onClick={handleScrollDown}
            className="cursor-pointer p-2 rounded-full hover:bg-surface-800/30 transition-colors"
          >
            <ChevronDown size={20} className="text-surface-500" />
          </div>
        </div>
      </section>

      {/* │││ CONTENT — About details │││ */}
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <GsapReveal direction="up">
          <div className="w-full h-px bg-linear-to-r from-transparent via-surface-800/50 to-transparent mb-10" />
        </GsapReveal>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 text-white font-display">
            <GsapTextSplit text="关于我" as="span" delay={0.1} />
          </h1>
          <GsapReveal delay={0.5}>
            <p className="text-lg text-surface-400 font-light">
              热爱技术、热爱创作，对新鲜事物永远保持积极学习态度。
            </p>
          </GsapReveal>
        </div>

        <GsapReveal delay={0.3}>
          <div className="w-full h-px bg-linear-to-r from-transparent via-surface-800/50 to-transparent mb-10" />
        </GsapReveal>

        {/* --- 基本信息 --- */}
        <GsapReveal direction="up">
          <section className="mb-14">
            <div className="flex flex-col sm:flex-row items-start gap-7">
              <div className="relative w-[72px] h-[72px] rounded-2xl overflow-hidden border border-surface-800/50 bg-surface-900 shrink-0">
                <Image
                  src="/avatar.png"
                  alt="Mark Xu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <h2 className="text-xl font-bold text-white font-display">Mark Xu</h2>
                  <p className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-0.5 rounded-full bg-accent-400/8 border border-accent-400/15 text-accent-300 text-xs font-medium">
                    <Briefcase size={12} />
                    求职意向：前端开发
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-surface-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-surface-600" />
                    中国，成都 (Chengdu)
                  </span>
                  <a
                    href="mailto:chuenqiuwanzai@gmail.com"
                    className="flex items-center gap-1.5 hover:text-accent-300 transition-colors"
                  >
                    <Mail size={14} className="text-surface-600" />
                    chuenqiuwanzai@gmail.com
                  </a>
                  <a
                    href="https://github.com/sijiruchuen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-accent-300 transition-colors"
                  >
                    <ExternalLink size={14} className="text-surface-600" />
                    github.com/sijiruchuen
                  </a>
                </div>
                <p className="text-surface-500 text-sm leading-relaxed max-w-xl">
                  就读于 SPTC 电子信息工程专业，同时自考 UESTC
                  计算机科学与技术本科。深耕 Next.js 生态与 Web3
                  前端开发，擅长将业务逻辑转化为高性能、高可用的现代化前端体验。
                </p>
              </div>
            </div>
          </section>
        </GsapReveal>

        {/* --- 教育经历 --- */}
        <GsapReveal direction="up">
          <section className="mb-14">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 bg-surface-900 rounded-lg border border-surface-800/30">
                <School size={18} className="text-accent-400" />
              </div>
              <h2 className="text-lg font-bold text-white font-display">教育经历</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                  <h3 className="text-white font-semibold text-sm">
                    四川邮电职业技术学院
                  </h3>
                  <span className="text-xs text-surface-500 font-mono">
                    2024 - 2027
                  </span>
                </div>
                <p className="text-surface-400 text-sm">
                  电子信息工程技术 · 全日制专科
                </p>
              </div>
              <div className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                  <h3 className="text-white font-semibold text-sm">
                    电子科技大学
                  </h3>
                  <span className="text-xs text-surface-500 font-mono">
                    在考
                  </span>
                </div>
                <p className="text-surface-400 text-sm">
                  计算机科学与技术 · 高等教育自学考试本科段
                </p>
                <p className="text-surface-600 text-xs mt-1.5">
                  已通过 11 门课程 / 预计 2027 年申请毕业
                </p>
              </div>
            </div>
          </section>
        </GsapReveal>

        {/* --- 项目经历 --- */}
        <GsapReveal direction="up">
          <section className="mb-14">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 bg-surface-900 rounded-lg border border-surface-800/30">
                <Briefcase size={18} className="text-purple-400" />
              </div>
              <h2 className="text-lg font-bold text-white font-display">项目经历</h2>
            </div>
            <div className="space-y-2.5">
              <Link
                href="/projects/iot-platform"
                className="block p-4 rounded-xl bg-surface-900/40 border border-surface-800/20 hover:border-surface-700/40 transition-all duration-300 group"
              >
                <h3 className="text-white font-semibold text-sm group-hover:text-accent-300 transition-colors mb-1 font-display">
                  PixelForge AIGC 图像生成平台
                </h3>
                <p className="text-surface-500 text-xs leading-relaxed mb-2">
                  Next.js 16 · React 19 · Prisma · PostgreSQL · Gemini API
                </p>
                <span className="inline-flex items-center text-xs text-accent-400 group-hover:translate-x-1 transition-transform">
                  查看详情 <ArrowRight size={12} className="ml-1" />
                </span>
              </Link>
              <Link
                href="/projects/cyberpunk-nft"
                className="block p-4 rounded-xl bg-surface-900/40 border border-surface-800/20 hover:border-surface-700/40 transition-all duration-300 group"
              >
                <h3 className="text-white font-semibold text-sm group-hover:text-accent-300 transition-colors mb-1 font-display">
                  CyberPunk NFT Mint 与固定价格交易 DApp
                </h3>
                <p className="text-surface-500 text-xs leading-relaxed mb-2">
                  Solidity · Hardhat · wagmi · OpenZeppelin · Sepolia
                </p>
                <span className="inline-flex items-center text-xs text-accent-400 group-hover:translate-x-1 transition-transform">
                  查看详情 <ArrowRight size={12} className="ml-1" />
                </span>
              </Link>
            </div>
          </section>
        </GsapReveal>

        {/* --- 工作经历 --- */}
        <GsapReveal direction="up">
          <section className="mb-14">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 bg-surface-900 rounded-lg border border-surface-800/30">
                <Briefcase size={18} className="text-emerald-400" />
              </div>
              <h2 className="text-lg font-bold text-white font-display">
                工作 / 竞赛经历
              </h2>
            </div>
            <div>
              <div className="p-4 rounded-xl bg-surface-900/40 border border-surface-800/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <h3 className="text-white font-semibold text-sm">
                    四川健为职业高级中学 · 助教（竞赛指导）
                  </h3>
                  <span className="text-xs text-surface-500 font-mono">
                    2024.03 - 2024.05
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-surface-400 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-emerald-500/60" />
                    独立承担职业院校技能大赛"数字产品检测与维修"赛项的教学与训练指导，负责 2
                    名学生从基础训练到赛前冲刺的全流程备赛。
                  </li>
                  <li className="flex items-start gap-2 text-surface-400 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-emerald-500/60" />
                    围绕数字产品检测、硬件故障定位、系统维护、数据恢复等内容设计分阶段训练方案，并持续跟踪训练效果与问题复盘。
                  </li>
                  <li className="flex items-start gap-2 text-surface-400 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-emerald-500/60" />
                    使用 ChatGPT 辅助备课、整理技术知识框架、生成模拟题与答疑材料，提高教学效率。
                  </li>
                </ul>
                <div className="mt-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                  <p className="text-emerald-400 text-xs font-medium">
                    工作业绩：最终带领 2 名学生均获得市级一等奖，省赛分别获得二等奖、三等奖。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </GsapReveal>

        {/* --- 专业技能 --- */}
        <GsapReveal direction="up">
          <section>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="p-2 bg-surface-900 rounded-lg border border-surface-800/30">
                <span className="text-purple-400 text-lg font-mono">&lt;/&gt;</span>
              </div>
              <h2 className="text-lg font-bold text-white font-display">专业技能</h2>
            </div>
            <GsapStagger className="grid md:grid-cols-2 gap-3" stagger={0.08}>
              <SkillCard
                title="前端开发"
                items={FRONTEND_SKILLS}
                color="blue"
              />
              <SkillCard
                title="全栈开发"
                items={FULLSTACK_SKILLS}
                color="purple"
              />
              <SkillCard
                title="认证与数据库"
                items={AUTH_DB_SKILLS}
                color="emerald"
              />
              <SkillCard
                title="工程化与 AI 工具"
                items={TOOLING_SKILLS}
                color="amber"
              />
            </GsapStagger>
          </section>
        </GsapReveal>
      </main>
    </div>
  )
}

function SkillCard({
  title,
  items,
  color,
}: {
  title: string
  items: string[]
  color: "blue" | "purple" | "emerald" | "amber"
}) {
  const colorMap = {
    blue: {
      border: "border-accent-400/15",
      bg: "bg-accent-400/3",
      dot: "bg-accent-400/60",
      text: "text-accent-300",
    },
    purple: {
      border: "border-purple-500/15",
      bg: "bg-purple-500/3",
      dot: "bg-purple-500/60",
      text: "text-purple-300",
    },
    emerald: {
      border: "border-emerald-500/15",
      bg: "bg-emerald-500/3",
      dot: "bg-emerald-500/60",
      text: "text-emerald-300",
    },
    amber: {
      border: "border-amber-400/15",
      bg: "bg-amber-400/3",
      dot: "bg-amber-400/60",
      text: "text-amber-300",
    },
  }

  const c = colorMap[color]

  return (
    <div className={`p-4 rounded-xl ${c.bg} border ${c.border}`}>
      <h3 className={`text-white font-semibold text-sm mb-2.5 font-display ${c.text}`}>{title}</h3>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-surface-400 text-xs"
          >
            <span
              className={`mt-1.5 w-1 h-1 shrink-0 rounded-full ${c.dot}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
