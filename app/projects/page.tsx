import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Production web and mobile products built by Zaman Arshad with React, Next.js, React Native and TypeScript.",
};

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="container relative">
        <p className="font-mono text-sm text-accent">{"// projects"}</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          All <span className="text-gradient">projects</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          {projects.length} production products I&apos;ve built across food delivery, SaaS dashboards, B2B EDI, event management,
          agriculture and ERP, for product companies and international clients.
        </p>
        <div className="mt-12">
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}
