"use client";

import {
  BarChart3,
  FileText,
  Gauge,
  Layout,
  Palette,
  PenTool,
  Search,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionItem, MotionSection } from "@/components/landing/motion";

const features = [
  {
    icon: Layout,
    title: "Theme engine",
    description: "Folder-based themes with layout, landing, single, and page routes. Drop in custom themes — auto-discovered via theme.json.",
  },
  {
    icon: PenTool,
    title: "Integrated content admin",
    description: "Manage posts and pages inside Catalyst — visual editor, drag-and-drop sections, Gutenberg blocks, per-page SEO, and auto-save.",
  },
  {
    icon: Search,
    title: "SEO & discovery",
    description: "Meta tags, Open Graph, canonical URLs, sitemap.xml, robots.txt, and llms.txt — built in, no extra plugins.",
  },
  {
    icon: BarChart3,
    title: "GA4 & Search Console",
    description: "Paste your Measurement ID and verification code. Catalyst handles tracking tags and sitemap submission URLs.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Optional CSS/JS minify, WebP generation, post query caching, DNS prefetch, and font preconnect hints.",
  },
  {
    icon: Shield,
    title: "Security headers",
    description: "Configurable referrer policy, X-Frame-Options, nosniff, and optional generator tag hiding.",
  },
  {
    icon: Palette,
    title: "Built-in themes",
    description: "Mono, Null, and Grain ship out of the box — distinct personalities, not color swaps.",
  },
  {
    icon: Sparkles,
    title: "Theme marketplace",
    description: "Premium theme browsing and one-click install — coming soon.",
  },
  {
    icon: Zap,
    title: "GitHub updates",
    description: "Auto-update from GitHub releases when you tag versions that match CATALYST_VERSION.",
  },
  {
    icon: FileText,
    title: "Universal 404",
    description: "Light, readable 404 page handled at the plugin level — consistent across all themes.",
  },
];

export function Features() {
  return (
    <MotionSection id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <MotionItem className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need</h2>
        <p className="mt-3 text-muted-foreground">
          Catalyst replaces WordPress frontend rendering while keeping the CMS you already know.
        </p>
      </MotionItem>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <MotionItem key={f.title}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-base">{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          </MotionItem>
        ))}
      </div>
    </MotionSection>
  );
}
