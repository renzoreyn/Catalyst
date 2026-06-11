"use client";

import { Reveal } from "@/components/landing/reveal";

const builtIn = [
  { name: "Mono", desc: "Balanced default for most sites." },
  { name: "Null", desc: "Ultra minimal. Lots of breathing room." },
  { name: "Grain", desc: "Warm editorial feel." },
];

const structure = `themes/my-theme/
├── layout.php
├── landing.php
├── single.php
├── page.php
├── theme.json
└── assets/`;

const themeJson = `{
  "name": "My Theme",
  "description": "Short blurb",
  "version": "1.0.0",
  "accent": "#0071e3"
}`;

export function Themes() {
  return (
    <section id="themes" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Extensible</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Custom Themes Without Registration Theater
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Drop a folder in catalyst/themes/. Catalyst scans on admin load. That's the whole
            workflow.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="grid gap-3 sm:grid-cols-3">
            {builtIn.map((t) => (
              <div key={t.name} className="rounded-2xl border bg-card px-4 py-4">
                <p className="font-semibold">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border bg-card p-5">
              <h3 className="text-sm font-semibold">Folder Structure</h3>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-secondary/80 p-4 text-xs leading-relaxed text-muted-foreground">
                {structure}
              </pre>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border bg-card p-5">
              <h3 className="text-sm font-semibold">theme.json</h3>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-secondary/80 p-4 text-xs leading-relaxed text-muted-foreground">
                {themeJson}
              </pre>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 rounded-2xl border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground">
          Templates get a <code className="rounded bg-background px-1.5 py-0.5 text-foreground">$catalyst</code>{" "}
          runtime object (site, SEO, posts, nav, route). Helpers like{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-foreground">catalyst_nav()</code> and{" "}
          <code className="rounded bg-background px-1.5 py-0.5 text-foreground">catalyst_assets()</code>{" "}
          keep themes boring in a good way. See theme_guide.md in the repo.
        </Reveal>
      </div>
    </section>
  );
}
