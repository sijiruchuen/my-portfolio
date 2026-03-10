import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  School,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Code2,
  ExternalLink,
  Mail
} from "lucide-react";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FadeInView,
  SpringHover
} from "@/components/motion";

const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Solidity",
  "Web3.js",
  "Git",
];

const PROJECTS = [
  {
    title: "Web3 DApp Dashboard",
    desc: "一个基于 Next.js 和 Wagmi 的去中心化应用 NFT 交易市场。",
    tags: ["Next.js", "React", "Wagmi"],
    link: "https://github.com",
    isExternal: true,
  },
  {
    title: "Mark 的 AI 工坊",
    desc: "基于 AI 图像生成技术的商业化服务流程。利用 Stable Diffusion 和 Photoshop 为客户提供定制化修图服务，优化了 Prompt 工程流",
    tags: ["Nanobanana", "React", "Tailwind css"],
    link: "/projects/iot-platform",
    isExternal: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        
        {/* --- Hero Section --- */}
        <FadeIn delay={0.1} className="py-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
              Hello, I'm <br className="hidden md:block"/>
              <span className="text-blue-500">Mark Xu</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-light flex items-center gap-3">
              Web3 探索者 <span className="text-neutral-700">|</span> 全栈开发者
            </p>
            
            <p className="text-neutral-500 max-w-lg leading-relaxed">
              就读于 SPTC 电子信息工程专业。致力于构建连接现实硬件与去中心化网络的数字桥梁。热爱开源、Web3 与 AI 技术。
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <Link href="/about" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors flex items-center gap-2">
                关于我 <ArrowRight size={16} />
              </Link>
              <a href="https://github.com/sijiruchuen" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 font-medium transition-colors">
                Github
              </a>
            </div>
          </div>
          
          {/* Right Avatar */}
          <div className="relative shrink-0 flex justify-center">
            <SpringHover className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 relative z-10 block">
              <Image src="/avatar.png" alt="Mark Xu" fill className="object-cover" priority />
            </SpringHover>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
          </div>
        </FadeIn>

        {/* --- Divider --- */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent my-4 md:my-10"></div>

        {/* --- Featured Projects --- */}
        <FadeInView className="py-16 scroll-mt-24" id="projects">
          <div className="mb-10">
            <p className="text-blue-500 font-mono text-sm mb-2">开源与实践探索</p>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              <Code2 className="text-blue-500" /> 精选项目
            </h2>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-5">
            {PROJECTS.map((project, index) => (
              <StaggerItem key={index}>
                <SpringHover className="h-full">
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
                          View Source <ExternalLink size={14} className="ml-1.5" />
                        </a>
                      ) : (
                        <Link
                          href={project.link}
                          className="inline-flex items-center text-sm font-medium text-neutral-300 hover:text-blue-400 transition-colors"
                        >
                          View Details{" "}
                          <ArrowRight
                            size={14}
                            className="ml-1.5 group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </SpringHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInView>

        {/* --- Skills Section --- */}
        <FadeInView className="py-16 scroll-mt-24" id="skills">
          <div className="mb-10">
            <p className="text-purple-500 font-mono text-sm mb-2">技术武器库</p>
            <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              <Terminal className="text-purple-500" /> 技术栈
            </h2>
          </div>
          
          {/* 这里依然还原了您所需的网格卡片结构 (4列) */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => (
              <StaggerItem key={index}>
                <SpringHover className="flex items-center justify-center p-4 bg-neutral-900/40 border border-neutral-800/60 rounded-xl hover:border-purple-500/50 hover:bg-purple-500/5 transition-colors cursor-default shadow-sm backdrop-blur-sm text-neutral-400 hover:text-purple-400 font-medium">
                  {skill}
                </SpringHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeInView>

        {/* --- Footer --- */}
        <FadeInView>
          <footer className="mt-20 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Mark xu. 保持热爱，奔赴山海。</p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-white transition-colors">关于我</Link>
              <a href="https://github.com/sijiruchuen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
              <a href="mailto:contact@sijiruchuen.xyz" className="hover:text-white transition-colors">联系我</a>
            </div>
          </footer>
        </FadeInView>

      </main>
    </div>
  );
}