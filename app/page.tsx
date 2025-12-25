import Image from "next/image";
import Link from "next/link";
import { 
  Github, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  User, 
  MapPin, 
  School, 
  Cpu, 
  Sparkles,
  ArrowRight
} from "lucide-react";

// --- 数据区 ---
const SKILLS = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Solidity', 'Web3.js', 'Git'];

const PROJECTS = [
  {
    title: "Web3 DApp Dashboard",
    desc: "一个基于 Next.js 和 Wagmi 的去中心化应用 NFT 交易市场。",
    tags: ["Next.js", "React", "Wagmi"],
    link: "https://github.com",
    isExternal: true
  },
  {
    title: "IoT 数据可视化平台",
    desc: "结合电子信息专业知识，将硬件传感器数据实时传输至 Web 端展示。",
    tags: ["MQTT", "React", "ECharts"],
    link: "/projects/iot-platform",
    isExternal: false
  }
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- 1. Hero Section (头像 + 名字 + 特征) --- */}
        <section id="hero" className="mb-32 flex flex-col-reverse md:flex-row items-center justify-between gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700 scroll-mt-32">
          
          {/* 左侧：文字信息 */}
          <div className="flex-1 text-center md:text-left">
            {/* 状态徽标 */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for work
            </div>

            {/* 名字 */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Mark xu
            </h1>

            {/* --- 新增：基本特征 (Icons + Text) --- */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-sm text-neutral-400 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800">
                <MapPin size={14} className="text-blue-500" /> 
                <span>Chengdu, CN</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800">
                <School size={14} className="text-purple-500" /> 
                <span>Student @ SPTC</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800">
                <Cpu size={14} className="text-green-500" /> 
                <span>Electronic Info</span>
              </div>
            </div>

            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8">
              Web3 探索者 / 全栈开发者。<br />
              致力于构建连接现实硬件与去中心化网络的数字桥梁。
            </p>

            {/* 按钮组 */}
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="#projects" className="px-6 py-3 rounded-lg bg-neutral-100 text-neutral-950 font-semibold hover:bg-white transition-colors">
                查看项目
              </Link>
              <a href="https://github.com" target="_blank" className="px-6 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-800 hover:bg-neutral-800 transition-colors">
                Github
              </a>
            </div>
          </div>
          
          {/* --- 右侧：头像区域 --- */}
          {/* 使用 relative 和 group 实现 hover 发光效果 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-neutral-950 bg-neutral-900">
              {/* 如果你有图片，请取消下面 Image 的注释，并将 User 图标删掉 */}
              {/* 记得把图片放在 public/avatar.png */}
              
              <Image 
                src="/avatar.png" 
                alt="Mark Xu" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* --- 2. 新增：关于我 (Bio Section) --- */}
        <section id="about" className="mb-32 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            <Sparkles className="text-yellow-500" /> 关于我
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 leading-relaxed text-neutral-300 space-y-4">
            <p>
              你好！我是 Mark xu，目前是一名SPTC大二在读生。虽然主修<span className="text-blue-400 font-medium">电子信息工程</span>，但我对计算机科学有着极大的热情。
            </p>
            <p>
              我的编程之旅始于对互联网的好奇，目前正在自学 UESTC 的计算机科学学士学位。在中职时期，我接触了计算机基础，现在则专注于 <span className="text-purple-400 font-medium">Web3前端开发</span> 和 <span className="text-purple-400 font-medium">区块链技术</span> 的探索。
            </p>
            <p>
              我擅长使用 React 和 Next.js 构建高性能的前端应用，同时也对底层硬件逻辑（如单片机、内燃机原理）保持着学术上的兴趣。这种“软硬结合”的思维方式帮助我更好地理解系统的全貌。
            </p>
            <p className="pt-4 text-neutral-500 text-sm italic border-t border-neutral-800 mt-6">
              除此之外，我也是一名各类游戏的玩家和 动漫 爱好者。我相信代码如诗，生活亦然。
            </p>
          </div>
        </section>

        {/* 3. 技能栈 (保持不变) */}
        <section id="skills" className="mb-32 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
            <Terminal className="text-blue-500" /> 技术栈
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SKILLS.map((skill) => (
              <div key={skill} className="group p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default text-center">
                <span className="group-hover:text-blue-400 transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 项目展示 (保持不变) */}
        <section id="projects" className="mb-32 scroll-mt-24">
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

                {project.isExternal ? (
                   /* 外部链接：保持使用 ExternalLink (↗) */
                   <a href={project.link} target="_blank" className="inline-flex items-center text-sm font-medium text-white hover:underline mt-auto">
                     View Source <ExternalLink size={14} className="ml-1" />
                   </a>
                ) : (
                   /* 内部链接：改用 ArrowRight (→)，并且加了移动动画而不是旋转 */
                   <Link href={project.link} className="inline-flex items-center text-sm font-medium text-white hover:underline mt-auto">
                     View Details <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                   </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 页脚 */}
        <footer className="pt-10 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© 2025 Mark xu. Built with Next.js & Tailwind.</p>
          <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} />
            Email Me
          </a>
        </footer>

      </main>
    </div>
  );
}