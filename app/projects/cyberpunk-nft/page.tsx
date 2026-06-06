"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GsapReveal, GsapTextSplit } from "@/components/GsapReveal";

const HIGHLIGHTS = [
  "基于 OpenZeppelin ERC721 实现 NFT 合约，支持固定价格 mint、最大供应量控制、艺术变体选择、tokenURI 与 owner 提现",
  "使用 Hardhat 完成合约编译、Sepolia 部署、IPFS metadata 配置，并将合约地址与 ABI 接入前端",
  "基于 wagmi / viem 实现钱包连接、网络切换、链上读取、mint、授权、上架、取消上架与购买流程",
  "集成 MetaMask SDK 实现多端钱包适配，支持桌面浏览器扩展与移动端钱包连接",
  "构建最小化 NFT 交易市场，包含授权上架、取消上架与购买等核心交易闭环",
];

const TAGS = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "wagmi",
  "viem",
  "MetaMask SDK",
  "Solidity",
  "Hardhat",
  "OpenZeppelin",
  "Sepolia",
  "IPFS",
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
              text="CyberPunk NFT"
              as="span"
              delay={0.1}
            />
          </h1>
          <GsapReveal delay={0.4}>
            <p className="text-lg text-surface-400 font-light">
              NFT Mint 与固定价格交易 DApp
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
              基于 Next.js 与 Solidity 开发的 NFT Mint 与最小化交易市场，支持钱包连接、
              Sepolia 网络切换、链上 mint、NFT 元数据展示、授权上架、取消上架与购买流程。
              完整实现了从智能合约开发部署到前端交互的 Web3 DApp 开发链路。
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
                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-purple-500/60" />
                {item}
              </li>
            ))}
          </ul>
        </GsapReveal>

        <GsapReveal delay={0.8}>
          <a
            href="https://github.com/sijiruchuen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-white font-medium transition-colors text-sm shadow-lg shadow-accent-600/20"
          >
            View Source on GitHub <ExternalLink size={15} />
          </a>
        </GsapReveal>
      </main>
    </div>
  );
}
