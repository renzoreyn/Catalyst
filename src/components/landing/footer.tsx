import { Github } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-foreground">{SITE.motto}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name} · @{SITE.author}
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:justify-end">
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
