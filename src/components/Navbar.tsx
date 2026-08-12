"use client";

import { Home, FileText, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DATA } from "@/data";
import { GithubIcon, LinkedinIcon } from "@/app/page";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-6 py-3 bg-background/80 backdrop-blur-md border border-border shadow-2xl rounded-full transition-all">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full transition-colors" aria-label="Home">
          <Home className="size-5" />
        </button>
        <a href="/resume.pdf" download className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full transition-colors" aria-label="Resume">
          <FileText className="size-5" />
        </a>
        <div className="w-px h-6 bg-border mx-1"></div>
        <Link href={DATA.contact.social.GitHub.url} target="_blank" className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full transition-colors" aria-label="GitHub">
          <GithubIcon className="size-5" />
        </Link>
        <Link href={DATA.contact.social.LinkedIn.url} target="_blank" className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full transition-colors" aria-label="LinkedIn">
          <LinkedinIcon className="size-5" />
        </Link>
        <Link href={`mailto:${DATA.contact.email}`} className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full transition-colors" aria-label="Email">
          <Mail className="size-5" />
        </Link>
        <div className="w-px h-6 bg-border mx-1"></div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full transition-colors flex items-center justify-center"
          aria-label="Toggle Theme"
        >
          {mounted ? (
            theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />
          ) : (
            <div className="size-5" />
          )}
        </button>
      </div>
    </div>
  );
}
