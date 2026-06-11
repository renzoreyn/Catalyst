"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { SITE } from "@/lib/site";

const stack = [
  { label: "Backend", value: "WordPress" },
  { label: "Frontend", value: "Your Theme" },
  { label: "Admin", value: "One Panel" },
];

export function Hero() {
  return (
    <section className="border-b bg-background px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-content text-center">
        <Reveal immediate delay={0}>
          <p className="text-sm font-medium text-muted-foreground">
            Catalyst v{SITE.version} for WordPress
          </p>
        </Reveal>

        <Reveal immediate delay={0.06}>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {SITE.motto}
          </h1>
        </Reveal>

        <Reveal immediate delay={0.12}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            WordPress stays your backend. You pick how the site actually looks. No theme builder
            soup, no random plugin stack just to ship a landing page.
          </p>
        </Reveal>

        <Reveal immediate delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-pill" asChild>
              <a href={SITE.releases} target="_blank" rel="noopener noreferrer">
                Get Catalyst
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-pill" asChild>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal immediate delay={0.24}>
          <div className="mx-auto mt-14 grid max-w-2xl gap-3 rounded-2xl border bg-card p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
            {stack.map((item) => (
              <div key={item.label} className="rounded-xl bg-secondary/60 px-4 py-3 text-center">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
