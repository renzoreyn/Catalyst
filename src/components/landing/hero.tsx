"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge variant="secondary" className="mb-4 gap-1">
            <Sparkles className="h-3 w-3" />
            v{SITE.version} · WordPress plugin
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">{SITE.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <a href={SITE.releases} target="_blank" rel="noopener noreferrer">
                Get Catalyst
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-4xl rounded-xl border bg-card p-1 shadow-lg"
        >
          <div className="rounded-lg bg-muted/40 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Backend", value: "WordPress" },
                { label: "Frontend", value: "Catalyst themes" },
                { label: "Admin", value: "Integrated UI" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border bg-background p-4 text-center">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
