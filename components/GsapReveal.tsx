"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Direction = "up" | "down" | "left" | "right";

interface GsapRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
}

interface GsapStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
}

interface GsapTextSplitProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const directionMap: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

/** Scroll-triggered reveal — element animates in when it enters the viewport */
export function GsapReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  ...props
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { x, y } = directionMap[direction];

    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0 });

      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            el,
            { opacity: 0, x, y },
            { opacity: 1, x: 0, y: 0, duration: 0.7, delay, ease: "power2.out" }
          );
        },
      });
    });

    return () => ctx.revert();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}

/** Scroll-triggered staggered reveal — each direct child animates in sequence */
export function GsapStagger({
  children,
  className,
  delay = 0,
  stagger = 0.1,
  ...props
}: GsapStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const children = Array.from(el.children);
      gsap.set(children, { opacity: 0 });

      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger,
              delay,
              ease: "power2.out",
            }
          );
        },
      });
    });

    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}

/** Character-by-character text reveal animation — runs on mount */
export function GsapTextSplit({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
}: GsapTextSplitProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.03,
        delay,
        ease: "power3.out",
      }
    );
  }, [delay]);

  const characters = text.split("").map((char, i) => (
    <span
      key={i}
      className="char inline-block"
      style={{ whiteSpace: char === " " ? "pre" : undefined }}
    >
      {char === " " ? " " : char}
    </span>
  ));

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={className}>
      {characters}
    </Tag>
  );
}
