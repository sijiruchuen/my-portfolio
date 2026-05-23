"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Provides a ref and auto-cleanup GSAP context.
 * callback receives the gsap.Context so you can use add() for cleanup.
 */
export function useGsap(
  callback: (ctx: gsap.Context) => void,
  deps: React.DependencyList = []
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => callback(ctx), containerRef.current);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
