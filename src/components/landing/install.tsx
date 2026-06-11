"use client";

import { Download, FolderOpen, Settings } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/landing/reveal";
type InstallProps = {
  version: string;
  releaseUrl: string;
};

const steps = [
  {
    icon: Download,
    title: "Download",
    body: "Grab the latest zip from GitHub. Root folder must be catalyst/catalyst.php.",
  },
  {
    icon: FolderOpen,
    title: "Upload",
    body: "Plugins → Add New → Upload. Or copy the folder to wp-content/plugins/.",
  },
  {
    icon: Settings,
    title: "Configure",
    body: "Activate, pick a theme, set SEO and analytics. You're live.",
  },
];

export function Install({ version, releaseUrl }: InstallProps) {
  return (
    <section id="install" className="border-y bg-secondary/50 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Setup</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Install in a Few Minutes
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            WordPress 6.0+, PHP 7.4+. No Composer, no build step, no ceremony.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <article
              key={step.title}
              data-reveal-item
              className="relative rounded-2xl border bg-card p-6 pt-8"
            >
              <span className="absolute -top-3 left-6 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <step.icon className="mb-3 h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </RevealGroup>

        <Reveal className="mt-8 text-center">
          <a
            href={releaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Download v{version} from GitHub Releases →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
