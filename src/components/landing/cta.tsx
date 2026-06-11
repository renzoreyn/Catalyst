"use client";

import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";
import { SITE } from "@/lib/site";

export function Cta() {
  return (
    <section className="border-t bg-secondary/50 px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-content text-center">
        <p className="text-sm font-medium text-primary">Start Now</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          How Sellable Is a Site That Loads Fast and Doesn't Feel Like WordPress?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Download Catalyst, pick a theme, ship something that looks intentional. WordPress still
          runs the show behind the curtain.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="rounded-pill" asChild>
            <a href={SITE.releases} target="_blank" rel="noopener noreferrer">
              Get Catalyst
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-pill" asChild>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Star on GitHub
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
