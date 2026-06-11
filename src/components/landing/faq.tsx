"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is Catalyst?",
    a: "A WordPress plugin that renders your public site through folder-based PHP themes while WordPress stays the CMS behind the scenes.",
  },
  {
    q: "Does it replace WordPress admin?",
    a: "No. WordPress is still your backend. Catalyst replaces frontend rendering and gives you an optional content panel. Your database, users, media, and plugins all stay.",
  },
  {
    q: "How do custom themes work?",
    a: "Drop a folder in catalyst/themes/ with layout.php, landing.php, single.php, page.php, and optionally theme.json. Catalyst scans on admin load. No activation code required.",
  },
  {
    q: "Is Catalyst free?",
    a: "The plugin and base themes (Mono, Null, Grain) are free and open source on GitHub. Premium themes ship separately; a marketplace for third-party themes is coming.",
  },
  {
    q: "How do updates work?",
    a: "Publish a GitHub release with a matching tag (e.g. v1.0.0) and attach catalyst-{version}.zip. Installed sites see Update Now on the Plugins screen.",
  },
  {
    q: "Does Catalyst handle SEO?",
    a: "Yes. Meta tags, Open Graph, sitemap.xml, robots.txt, and llms.txt are built in. You might still want a dedicated SEO plugin for edge cases, but most sites won't need one for the basics.",
  },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border/80 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium leading-snug">{q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-out",
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y bg-secondary/40 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="text-sm font-medium text-primary">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Questions People Actually Ask
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Before you install something that touches your whole frontend, you probably want
              answers. Fair.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border bg-card px-5 sm:px-6">
              {faqs.map((item, i) => (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
