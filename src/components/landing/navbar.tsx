"use client";

import Link from "next/link";
import { LogoIcon } from "@/components/brand/logo-icon";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE } from "@/lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#install", label: "Install" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[52px] max-w-content items-center justify-between gap-2 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LogoIcon className="h-3.5 w-3.5" />
          </span>
          {SITE.name}
        </Link>
        <nav className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button size="sm" className="rounded-pill" asChild>
            <a href={SITE.releases} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
