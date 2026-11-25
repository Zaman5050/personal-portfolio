"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { categories, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.categories.includes(c)).length;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                filter === c ? "border-accent bg-accent text-white dark:text-bg" : "border-line bg-surface/60 text-muted hover:text-fg"
              )}
            >
              {c} <span className="ml-1 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
