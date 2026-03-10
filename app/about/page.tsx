import { MapPin, School, Sparkles, User } from "lucide-react";
import { FadeIn, FadeInView } from "@/components/motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <FadeIn delay={0.1}>
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              关于我
            </h1>
            <p className="text-lg text-neutral-400 font-light">
              热爱技术、热爱创作，对新鲜事物永远保持积极学习态度。
            </p>
          </div>

          <div className="w-full h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent mb-12"></div>
        </FadeIn>

        <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">
            {/* 左侧主内容 */}
          <FadeInView>
            <article className="prose prose-invert prose-neutral max-w-none prose-p:leading-loose prose-p:text-neutral-400 prose-a:text-blue-400 hover:prose-a:text-blue-300">
              <p>
                你好！我是 Mark xu，目前是一名 SPTC 的大二在读生。虽然主修<strong>电子信息工程</strong>，但我对计算机科学与软件架构有着极大的热情。
              </p>
              <p>
                我的编程之旅始于对互联网的好奇，目前正在系统自学 UESTC 的计算机科学学位相关课程。在中职时期，我沉淀了扎实的计算机基础，现在我的核心重心聚焦于 <strong>Web3 前端开发</strong>、<strong>分布式系统</strong> 与去中心化基础设施的探索。
              </p>
              <p>
                我深耕 Next.js 生态与 AI Agent 的垂直落地应用，擅长将业务逻辑抽象并转化为高性能、高可用且极致流畅的现代化前端交互体验。近期正在重点探索基于 <code>Blockchain</code> 的去中心化身份（DID）与前端无缝结合的解决方案。
              </p>
              <blockquote className="border-l-2 border-neutral-800 pl-4 py-1 italic font-light text-neutral-500 mt-8 mb-0">
                “Learning Path: 拥抱新兴技术栈，践行 Vibe Coding 哲学，保持极致的自驱动力。”
              </blockquote>
            </article>
          </FadeInView>

          {/* 右侧边栏 */}
          <FadeInView className="flex flex-col gap-4">
            {/* 头像小卡片 */}
            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-neutral-800 bg-neutral-950 mb-3">
                <Image
                  src="/avatar.png"
                  alt="Mark Xu"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-white font-medium">Mark Xu</h3>
              <p className="text-sm text-neutral-500 mb-4">Web3 探索者</p>
              <Link href="mailto:contact@sijiruchuen.xyz" className="w-full py-2 px-4 rounded-xl bg-blue-600/10 text-blue-500 hover:bg-blue-600/20 text-sm font-medium transition-colors border border-blue-500/20">
                联系我
              </Link>
            </div>

            {/* 信息卡片 1 */}
            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 flex items-start gap-3">
              <div className="p-2.5 bg-neutral-950 rounded-xl shrink-0">
                <School className="text-neutral-400" size={18} />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">教育经历</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  SPTC 大二在读，主修电子信息工程。
                </p>
              </div>
            </div>

            {/* 信息卡片 2 */}
            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 flex items-start gap-3">
              <div className="p-2.5 bg-neutral-950 rounded-xl shrink-0">
                <MapPin className="text-neutral-400" size={18} />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium mb-1">所在城市</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  中国，成都 (Chengdu)
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </main>
    </div>
  );
}
