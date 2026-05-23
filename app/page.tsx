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
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
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
          duration: 1.2,
          delay: 0.7,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        {/* --- Hero Section --- */}
        <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
              <GsapTextSplit
                text="Hello, I'm"
                as="span"
                className="block"
                delay={0.1}
              />
              <br className="hidden md:block" />
              <GsapTextSplit
                text="Mark Xu"
                as="span"
                className="text-blue-500"
                delay={0.7}
              />
            </h1>

            <GsapReveal delay={1} direction="up">
              <p className="text-xl md:text-2xl text-neutral-400 font-light flex items-center gap-3 flex-wrap">
                前端开发
                <span className="text-neutral-700">|</span> Web3 探索者
                <span className="text-neutral-700">|</span> 全栈学习者
              </p>
            </GsapReveal>

            <GsapReveal delay={1.1} direction="up">
              <p className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <Briefcase size={14} />
                求职意向：前端开发
              </p>
            </GsapReveal>

            <GsapReveal delay={1.2} direction="up">
              <p className="text-neutral-500 max-w-lg leading-relaxed">
                就读于 SPTC 电子信息工程专业，同时自考 UESTC
                计算机科学与技术本科。热爱开源、Web3 与 AI
                技术，致力于构建去中心化应用与高性能前端体验。
              </p>
            </GsapReveal>

            <GsapReveal delay={1.4} direction="up">
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center gap-2"
                >
                  关于我 <ArrowRight size={16} />
                </Link>
                <a
                  href="https://github.com/sijiruchuen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 font-medium transition-colors"
                >
                  Github
                </a>
              </div>
            </GsapReveal>
          </div>

          {/* Avatar */}
          <div ref={avatarRef} className="relative shrink-0 flex justify-center">
            <SpringHover className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 relative z-10 block">
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl z-0 pointer-events-none"
            />
          </div>
        </div>

        {/* --- Divider --- */}
        <GsapReveal>
          <div className="w-full h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent my-4 md:my-10" />
        </GsapReveal>

        {/* --- Featured Projects --- */}
        <GsapReveal className="py-16 scroll-mt-24" id="projects">
          <div className="mb-10">
            <p className="text-blue-500 font-mono text-sm mb-2">
              项目经历
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              <Code2 className="text-blue-500" /> 精选项目
            </h2>
          </div>

          <GsapStagger className="grid md:grid-cols-2 gap-5" stagger={0.15}>
            {PROJECTS.map((project, index) => (
              <SpringHover key={index} className="h-full">
                <div className="group flex flex-col h-full p-6 bg-neutral-900/40 border border-neutral-800/60 rounded-2xl hover:border-neutral-700 transition-colors backdrop-blur-sm relative overflow-hidden">
                  <div className="mb-auto relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex gap-2 flex-wrap mb-6 relative z-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded-md bg-neutral-950/50 text-neutral-400 border border-neutral-800/50"
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
                        className="inline-flex items-center text-sm font-medium text-neutral-300 hover:text-blue-400 transition-colors"
                      >
                        在线演示{" "}
                        <ExternalLink size={14} className="ml-1.5" />
                      </a>
                    ) : (
                      <Link
                        href={project.link}
                        className="inline-flex items-center text-sm font-medium text-neutral-300 hover:text-blue-400 transition-colors"
                      >
                        查看详情{" "}
                        <ArrowRight
                          size={14}
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
        <GsapReveal className="py-16 scroll-mt-24" id="skills">
          <div className="mb-10">
            <p className="text-purple-500 font-mono text-sm mb-2">专业技能</p>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              <Terminal className="text-purple-500" /> 技术栈
            </h2>
          </div>

          <GsapStagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => (
              <SpringHover key={index}>
                <div className="flex items-center justify-center p-4 bg-neutral-900/40 border border-neutral-800/60 rounded-xl hover:border-purple-500/50 hover:bg-purple-500/5 transition-colors cursor-default shadow-sm backdrop-blur-sm text-neutral-400 hover:text-purple-400 font-medium">
                  {skill}
                </div>
              </SpringHover>
            ))}
          </GsapStagger>
        </GsapReveal>

        {/* --- Footer --- */}
        <GsapReveal>
          <footer className="mt-20 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>
              © {new Date().getFullYear()} Mark Xu. 保持热爱，奔赴山海。
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                关于我
              </Link>
              <a
                href="https://github.com/sijiruchuen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Github
              </a>
              <a
                href="mailto:chuenqiuwanzai@gmail.com"
                className="hover:text-white transition-colors"
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
