"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Terminal,
  Code2,
  ExternalLink,
  Briefcase,
} from "lucide-react";

import { SpringHover } from "@/components/motion";
import {
  GsapReveal,
  GsapStagger,
  GsapTextSplit,
} from "@/components/GsapReveal";
import { gsap } from "@/lib/gsap";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Radix UI",
  "Prisma",
  "PostgreSQL",
  "Solidity",
  "Hardhat",
  "wagmi",
  "Git",
];

const PROJECTS = [
  {
    title: "PixelForge AIGC 图像生成平台",
    desc: "基于 Next.js 开发的 AI 图像生成平台，支持文生图、图生图、注册登录、公开作品广场、个人作品管理与积分扣费。",
    tags: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "Gemini API"],
    link: "https://my-aigc-app-8xgd.vercel.app/explore",
    isExternal: true,
  },
  {
    title: "CyberPunk NFT Mint 与交易 DApp",
    desc: "基于 Next.js 与 Solidity 开发的 NFT Mint 与交易市场，支持钱包连接、链上 mint、上架与购买流程。",
    tags: ["Solidity", "Hardhat", "wagmi", "OpenZeppelin", "Sepolia"],
    link: "/projects/cyberpunk-nft",
    isExternal: false,
  },
];

export default function Home() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (avatarRef.current) {
      gsap.fromTo(
        avatarRef.current,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: 0.4,
          ease: "back.out(1.4)",
        }
      );
    }
    if (glowRef.current) {
      gsap.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          delay: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <main className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        {/* --- Hero Section --- */}
        <div className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 space-y-5">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                <GsapTextSplit
                  text="Hello, I'm"
                  as="span"
                  className="block text-surface-400 font-light text-2xl md:text-3xl tracking-normal mb-1"
                  delay={0.1}
                />
                <GsapTextSplit
                  text="Mark Xu"
                  as="span"
                  className="text-accent-400 font-display"
                  delay={0.6}
                />
              </h1>
            </div>

            <GsapReveal delay={0.9} direction="up">
              <p className="text-lg text-surface-400 font-light flex items-center gap-3 flex-wrap">
                前端开发
                <span className="text-surface-800">|</span>
                Web3 探索者
                <span className="text-surface-800">|</span>
                全栈学习者
              </p>
            </GsapReveal>

            <GsapReveal delay={1.0} direction="up">
              <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-400/8 border border-accent-400/15 text-accent-300 text-sm font-medium">
                <Briefcase size={14} />
                求职意向：前端开发
              </p>
            </GsapReveal>

            <GsapReveal delay={1.1} direction="up">
              <p className="text-surface-500 max-w-lg leading-relaxed text-[15px]">
                就读于 SPTC 电子信息工程专业，同时自考 UESTC
                计算机科学与技术本科。热爱开源、Web3 与 AI
                技术，致力于构建去中心化应用与高性能前端体验。
              </p>
            </GsapReveal>

            <GsapReveal delay={1.3} direction="up">
              <div className="flex items-center gap-3 pt-3">
                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-white font-medium transition-colors text-sm flex items-center gap-2 shadow-lg shadow-accent-600/20"
                >
                  关于我 <ArrowRight size={15} />
                </Link>
                <a
                  href="https://github.com/sijiruchuen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-surface-800/40 hover:bg-surface-800/60 text-surface-300 font-medium transition-colors text-sm border border-surface-800/30"
                >
                  Github
                </a>
              </div>
            </GsapReveal>
          </div>

          {/* Avatar */}
          <div ref={avatarRef} className="relative shrink-0 flex justify-center">
            <SpringHover className="w-36 h-36 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-surface-800/50 bg-surface-900 relative z-10 block shadow-2xl shadow-accent-600/5">
              <Image
                src="/avatar.png"
                alt="Mark Xu"
                fill
                className="object-cover"
                priority
              />
            </SpringHover>
            <div
              ref={glowRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-64 md:h-64 bg-accent-500/8 rounded-full blur-3xl z-0 pointer-events-none"
            />
          </div>
        </div>

        {/* --- Divider --- */}
        <GsapReveal>
          <div className="w-full h-px bg-linear-to-r from-transparent via-surface-800/50 to-transparent my-4 md:my-12" />
        </GsapReveal>

        {/* --- Featured Projects --- */}
        <GsapReveal className="py-14 scroll-mt-24" id="projects">
          <div className="mb-8">
            <p className="text-accent-400 font-mono text-xs tracking-widest uppercase mb-3">
              Featured Work
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5 font-display">
              <Code2 className="text-accent-400" size={26} />
              精选项目
            </h2>
          </div>

          <GsapStagger className="grid md:grid-cols-2 gap-4" stagger={0.12}>
            {PROJECTS.map((project, index) => (
              <SpringHover key={index} className="h-full">
                <div className="group flex flex-col h-full p-5 bg-surface-900/60 border border-surface-800/30 rounded-2xl hover:border-surface-700/50 transition-all duration-300 relative overflow-hidden">
                  {/* Subtle gradient hover reveal */}
                  <div className="absolute inset-0 bg-linear-to-br from-accent-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                  <div className="mb-auto relative z-10">
                    <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-accent-300 transition-colors font-display tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-surface-500 text-sm leading-relaxed mb-5 font-light">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex gap-1.5 flex-wrap mb-5 relative z-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-800/30 text-surface-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto relative z-10">
                    {project.isExternal ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-surface-400 hover:text-accent-300 transition-colors"
                      >
                        在线演示{" "}
                        <ExternalLink size={13} className="ml-1.5" />
                      </a>
                    ) : (
                      <Link
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium text-surface-400 hover:text-accent-300 transition-colors"
                      >
                        查看详情{" "}
                        <ArrowRight
                          size={13}
                          className="ml-1.5 group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </SpringHover>
            ))}
          </GsapStagger>
        </GsapReveal>

        {/* --- Skills Section --- */}
        <GsapReveal className="py-14 scroll-mt-24" id="skills">
          <div className="mb-8">
            <p className="text-amber-400/80 font-mono text-xs tracking-widest uppercase mb-3">
              Tech Stack
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5 font-display">
              <Terminal className="text-amber-400/80" size={26} />
              技术栈
            </h2>
          </div>

          <GsapStagger className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SKILLS.map((skill, index) => (
              <SpringHover key={index}>
                <div className="flex items-center justify-center px-4 py-3.5 bg-surface-900/60 border border-surface-800/30 rounded-xl hover:border-amber-400/20 hover:bg-amber-400/3 transition-all duration-300 cursor-default text-surface-400 hover:text-amber-300 text-sm font-medium">
                  {skill}
                </div>
              </SpringHover>
            ))}
          </GsapStagger>
        </GsapReveal>

        {/* --- Footer --- */}
        <GsapReveal>
          <footer className="mt-16 pt-8 border-t border-surface-800/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface-600">
            <p>
              &copy; {new Date().getFullYear()} Mark Xu. 保持热爱，奔赴山海。
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/about"
                className="hover:text-surface-300 transition-colors"
              >
                关于我
              </Link>
              <a
                href="https://github.com/sijiruchuen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-surface-300 transition-colors"
              >
                Github
              </a>
              <a
                href="mailto:chuenqiuwanzai@gmail.com"
                className="hover:text-surface-300 transition-colors"
              >
                联系我
              </a>
            </div>
          </footer>
        </GsapReveal>
      </main>
    </div>
  );
}
