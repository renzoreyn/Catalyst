"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
  /** Animate on mount (hero) instead of scroll */
  immediate?: boolean;
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.set(el, { opacity: 0, y: 20 });

      if (immediate) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay,
          ease: "power2.out",
        });
        return;
      }

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [immediate, delay] }
  );

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  selector?: string;
};

/** Batch fade-up for grids (feature cards, steps, etc.) */
export function RevealGroup({
  children,
  className,
  selector = "[data-reveal-item]",
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const items = root.querySelectorAll(selector);
      if (!items.length) return;

      gsap.set(items, { opacity: 0, y: 16 });

      ScrollTrigger.batch(items, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: "power2.out",
            overwrite: true,
          });
        },
        start: "top 92%",
        once: true,
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
