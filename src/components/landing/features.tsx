"use client";

import {
  BarChart3,
  Gauge,
  LayoutGrid,
  Palette,
  PenTool,
  Search,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { Reveal, RevealGroup } from "@/components/landing/reveal";

const features = [
  {
    icon: LayoutGrid,
    title: "Theme Engine",
    description:
      "Folder-based themes with layout, landing, single, and page routes. Drop a folder in, Catalyst finds it.",
  },
  {
    icon: PenTool,
    title: "Content Admin",
    description:
      "Edit posts and pages inside Catalyst. Visual editor, sections, blocks, per-page SEO, auto-save.",
  },
  {
    icon: Search,
    title: "SEO and Discovery",
    description: "Meta tags, Open Graph, sitemap.xml, robots.txt, and llms.txt. Built in.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Paste your GA4 and Search Console codes. We inject the tags.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Optional minify, WebP images, query caching, and sensible resource hints.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security headers, referrer policy, and optional generator tag hiding.",
  },
  {
    icon: Palette,
    title: "Base Themes",
    description: "Mono, Null, and Grain ship free. Real layouts, not palette swaps.",
  },
  {
    icon: Sparkles,
    title: "Marketplace",
    description: "Premium themes from WP admin. Coming soon, but the tab is already there.",
  },
  {
    icon: Zap,
    title: "GitHub Updates",
    description: "Tag a release, update in one click from the Plugins screen.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">What You Get</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Lean Frontend, Full WordPress Underneath
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Let's be real for a sec: most WordPress sites don't need another page builder. They need
            less junk between the content and the visitor.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              data-reveal-item
              className="rounded-2xl border bg-card p-5 transition-shadow hover:shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-4 w-4" />
              </span>
              <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
