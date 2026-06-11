"use client";

import { Github, MessageCircle, Package, ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/landing/reveal";
import { SITE } from "@/lib/site";

const channels = [
  {
    icon: Github,
    title: "GitHub Issues",
    description: "Bugs, feature requests, anything broken. Straight to the repo.",
    href: SITE.issues,
    label: "Open an Issue",
  },
  {
    icon: MessageCircle,
    title: "Discussions",
    description: "Questions, ideas, show-and-tell. Lower stakes than an issue.",
    href: SITE.discussions,
    label: "Start a Thread",
  },
  {
    icon: Package,
    title: "Releases",
    description: "Download builds, read changelogs, watch for new versions.",
    href: SITE.releases,
    label: "View Releases",
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Need Something? We're on GitHub.
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            No ticket portal, no sales form. Catalyst is open source. Talk to us where the code
            lives.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal-item
              className="group flex flex-col rounded-3xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {c.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 rounded-3xl border bg-secondary/50 p-6 text-center sm:p-8">
          <p className="text-sm text-muted-foreground">Built by</p>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-lg font-semibold text-foreground hover:text-primary"
          >
            @{SITE.author}
          </a>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            If you're evaluating Catalyst for a client project or a product site, issues and
            discussions are the fastest way to get a straight answer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
