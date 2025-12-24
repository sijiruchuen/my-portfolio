import Image from "next/image";
import Link from "next/link"; // 核心：导入 Link 组件
import { Github, Twitter, Mail, ExternalLink, Code2, Terminal, User } from "lucide-react";

// 模拟数据 (在真实 Next.js 项目中，这些通常来自 API 或 CMS)
const SKILLS = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Solidity', 'Web3.js', 'Git'];

const PROJECTS = [
  {
    title: "Web3 DApp Dashboard",
    desc: "一个基于 Next.js 和 Wagmi 的去中心化应用 NFT 交易市场。",
    tags: ["Next.js", "React", "Wagmi"],
    link: "https://github.com", // 外部链接
    isExternal: true
  },
  {
    title: "IoT 数据可视化平台",
    desc: "结合电子信息专业知识，将硬件传感器数据实时传输至 Web 端展示。",
    tags: ["MQTT", "React", "ECharts"],
    link: "/projects/iot-platform", // 内部链接示例
    isExternal: false
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-blue-500/30">
      
      {/* 顶部导航 */}
      <nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* 使用 Link 组件：点击 Logo 回首页不会刷新整个页面 */}
          <Link href="/" className="font-bold text-xl tracking-tighter hover:text-white transition-colors">
            MyPortfolio<span className="text-blue-500">.</span>
          </Link>
          
          <div className="flex gap-4">
            {/* 外部链接仍然建议使用 a 标签，或者 Link + target="_blank" */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="mb-24 flex flex-col md:flex-row items-center gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for work
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Mark xu
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
              SPTC 大二在读 / Web3 探索者 / AI 爱好者。<br />
              主攻从链上合约到前端交互的全栈开发。
            </p>
          </div>
          
          {/* Next.js Image 组件示例：自动优化图片 */}
          {/* 这里暂时用一个 div 占位，你可以把你的头像放在 public/avatar.png 然后取消注释下面的 Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-2 border-neutral-800 bg-neutral-900 flex items-center justify-center group">
             {/* <Image 
                src="/avatar.png" 
                alt="Mark xu" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
             /> */}
             <User size={48} className="text-neutral-700" />
          </div>
        </section>

        {/* 技能栈 (数据驱动渲染) */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            <Terminal className="text-blue-500" /> 技术栈
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill) => (
              <div key={skill} className="group p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default">
                <span className="group-hover:text-blue-400 transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 项目展示 (组件化思维) */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            <Code2 className="text-purple-500" /> 精选项目
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <div key={index} className="group relative p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-neutral-800/80 transition-all flex flex-col h-full">
                <div className="mb-auto">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 关键点：
                   1. 如果是内部链接 (project.isExternal = false)，使用 Link，Next.js 会预加载页面。
                   2. 如果是外部链接，使用 a 标签。
                */}
                {project.isExternal ? (
                   <a href={project.link} target="_blank" className="inline-flex items-center text-sm font-medium text-white hover:underline mt-auto">
                     View Source <ExternalLink size={14} className="ml-1" />
                   </a>
                ) : (
                   <Link href={project.link} className="inline-flex items-center text-sm font-medium text-white hover:underline mt-auto">
                     View Details <ExternalLink size={14} className="ml-1 rotate-45 group-hover:rotate-0 transition-transform" />
                   </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 页脚 */}
        <footer className="pt-10 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© 2025 Mark xu. Built with Next.js 15 & Tailwind.</p>
          <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} />
            Email Me
          </a>
        </footer>

      </main>
    </div>
  );
}