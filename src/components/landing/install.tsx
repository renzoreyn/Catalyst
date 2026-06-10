"use client";

import { Download, FolderOpen, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionItem, MotionSection } from "@/components/landing/motion";
import { SITE } from "@/lib/site";

const steps = [
  {
    icon: Download,
    title: "Download",
    body: "Grab the latest release zip from GitHub. The archive must contain catalyst/catalyst.php at the root.",
  },
  {
    icon: FolderOpen,
    title: "Upload",
    body: "Install via WordPress → Plugins → Add New → Upload, or copy the catalyst folder to wp-content/plugins/.",
  },
  {
    icon: Settings,
    title: "Activate & configure",
    body: "Activate the plugin, open Catalyst in wp-admin, pick a theme, and configure SEO, content, and analytics.",
  },
];

export function Install() {
  return (
    <MotionSection id="install" className="border-y bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionItem className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Install in minutes</h2>
          <p className="mt-3 text-muted-foreground">
            Requires WordPress 6.0+ and PHP 7.4+. No Composer or build step for the plugin itself.
          </p>
        </MotionItem>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <MotionItem key={step.title}>
              <Card className="relative h-full">
                <span className="absolute -top-3 left-6 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <CardHeader>
                  <step.icon className="mb-2 h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{step.body}</CardContent>
              </Card>
            </MotionItem>
          ))}
        </div>
        <MotionItem className="mt-8 text-center">
          <a
            href={SITE.releases}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Download v{SITE.version} from GitHub Releases →
          </a>
        </MotionItem>
      </div>
    </MotionSection>
  );
}
