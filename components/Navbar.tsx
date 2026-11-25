"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActive(pathname.startsWith("/projects") ? "projects" : "");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome, pathname]);

  useEffect(() => setOpen(false), [pathname]);

  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-line/70 bg-bg/75 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-2" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 font-display text-sm font-bold text-white shadow-lg shadow-accent/30 transition group-hover:rotate-6">
            {site.initials}
          </span>
          <span className="hidden font-display font-semibold sm:block">{site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                href={href(l.id)}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm text-muted transition hover:text-fg",
                  active === l.id && "text-fg"
                )}
              >
                {active === l.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-lg bg-accent/10" />
                )}
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={site.resume} download="Zaman-Arshad-Resume.pdf" className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
            <Download className="h-4 w-4" /> Resume
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface/60 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-line bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container flex flex-col py-4">
              {links.map((l) => (
                <li key={l.id}>
                  <Link
                    href={href(l.id)}
                    onClick={() => setOpen(false)}
                    className={cn("block rounded-lg px-3 py-3 text-muted hover:bg-surface hover:text-fg", active === l.id && "text-accent")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a href={site.resume} download="Zaman-Arshad-Resume.pdf" className="btn-primary w-full">
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
