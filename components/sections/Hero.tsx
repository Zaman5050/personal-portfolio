"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { socials } from "../Footer";

function TypedRoles({ words }: { words: readonly string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1600 : deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (empty) {
        setDeleting(false);
        return setI((n) => n + 1);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block w-[3px] animate-blink bg-accent align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}

const code = [
  { k: "name", v: `"${site.name}"` },
  { k: "role", v: `"Senior Front-End Dev"` },
  { k: "location", v: `"Lahore, PK"` },
  { k: "stack", v: `["React", "Next.js", "TS"]` },
  { k: "experience", v: `"4+ years"` },
  { k: "openToWork", v: "true" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d },
  });

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          {site.available && (
            <motion.div {...fade(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </motion.div>
          )}

          <motion.p {...fade(0.05)} className="font-mono text-sm text-accent">
            Hi there, I&apos;m
          </motion.p>
          <motion.h1 {...fade(0.1)} className="mt-2 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {site.name}
          </motion.h1>
          <motion.p {...fade(0.15)} className="mt-4 min-h-[2.5rem] font-display text-2xl font-semibold sm:text-3xl">
            <TypedRoles words={site.roles} />
          </motion.p>
          <motion.p {...fade(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline}
          </motion.p>

          <motion.div {...fade(0.25)} className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" /> {site.location}
          </motion.div>

          <motion.div {...fade(0.3)} className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="btn-primary">
              View My Work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#contact" className="btn-ghost">
              <Sparkles className="h-4 w-4 text-accent" /> Let&apos;s Talk
            </Link>
          </motion.div>

          <motion.div {...fade(0.35)} className="mt-8 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition hover:-translate-y-1 hover:border-accent/60 hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 to-accent2/30 blur-2xl" />
          <div className="card relative animate-float overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-muted">developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
              <code>
                <span className="text-fuchsia-500">const</span> <span className="text-accent2">developer</span>{" "}
                <span className="text-muted">=</span> {"{"}
                {"\n"}
                {code.map((c) => (
                  <span key={c.k}>
                    {"  "}
                    <span className="text-accent">{c.k}</span>
                    <span className="text-muted">: </span>
                    <span className={c.v === "true" ? "text-orange-400" : "text-emerald-500"}>{c.v}</span>
                    <span className="text-muted">,</span>
                    {"\n"}
                  </span>
                ))}
                {"};"}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
