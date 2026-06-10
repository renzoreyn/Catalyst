"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { LogoIcon } from "@/components/brand/logo-icon";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#install", label: "Install" },
  { href: "#themes", label: "Themes" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <LogoIcon />
          </span>
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={SITE.releases} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
