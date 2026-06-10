"use client";

import { FolderPlus, FileCode } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionItem, MotionSection } from "@/components/landing/motion";

const builtIn = [
  { name: "Mono", accent: "#2563eb", desc: "Balanced default — modern SaaS layout, card grid." },
  { name: "Null", accent: "#94a3b8", desc: "Ultra minimal — whitespace-first, stripped UI." },
  { name: "Grain", accent: "#a78bfa", desc: "Soft texture — warm tones, subtle noise layer." },
];

const themeJson = `{
  "name": "My Theme",
  "description": "Short description for the picker.",
  "version": "1.0.0",
  "author": "Your name",
  "accent": "#2563eb"
}`;

const structure = `themes/my-theme/
├── layout.php      (required)
├── landing.php     (required)
├── single.php      (required)
├── page.php        (required)
├── theme.json      (recommended)
└── assets/
    ├── style.css
    └── script.js`;

export function Themes() {
  return (
    <MotionSection id="themes" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <MotionItem className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Build custom themes</h2>
        <p className="mt-3 text-muted-foreground">
          Drop a folder into catalyst/themes/. Catalyst scans on every admin load — no registration code needed.
        </p>
      </MotionItem>

      <MotionItem className="mt-10">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Built-in themes
        </h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {builtIn.map((t) => (
            <div
              key={t.name}
              className="flex items-start gap-3 rounded-lg border p-4"
              style={{ borderLeftColor: t.accent, borderLeftWidth: 3 }}
            >
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </MotionItem>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <MotionItem>
          <Card className="h-full">
            <CardHeader>
              <FolderPlus className="mb-2 h-5 w-5 text-primary" />
              <CardTitle>Folder structure</CardTitle>
              <CardDescription>Four PHP templates are required before a theme can be activated.</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-relaxed">{structure}</pre>
            </CardContent>
          </Card>
        </MotionItem>
        <MotionItem>
          <Card className="h-full">
            <CardHeader>
              <FileCode className="mb-2 h-5 w-5 text-primary" />
              <CardTitle>theme.json</CardTitle>
              <CardDescription>Metadata for the admin theme picker — name, accent, preview image.</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-relaxed">{themeJson}</pre>
            </CardContent>
          </Card>
        </MotionItem>
      </div>

      <MotionItem className="mt-8 rounded-lg border bg-muted/40 p-6 text-sm text-muted-foreground">
        <p>
          Templates receive a <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">$catalyst</code> runtime
          object with site info, SEO, posts, navigation, and route data. Use helpers like{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">catalyst_nav()</code>,{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">catalyst_meta_tags()</code>, and{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">catalyst_assets()</code>. See{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">theme_guide.md</code> in the repo for the
          full contract.
        </p>
      </MotionItem>
    </MotionSection>
  );
}
