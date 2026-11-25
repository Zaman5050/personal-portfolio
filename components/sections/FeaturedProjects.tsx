import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { ProjectCover } from "../ProjectCover";
import { ProjectLinks } from "../ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="border-y border-line bg-surface/30 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="featured work"
          title="Products I've built"
          subtitle="A selection of real, production products: marketplaces, SaaS dashboards and a full ERP."
        />

        <div className="space-y-20">
          {featured.map((p, i) => (
            <Reveal key={p.slug}>
              <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <Link
                  href={`/projects/${p.slug}`}
                  className={cn("group block overflow-hidden rounded-2xl border border-line shadow-xl", i % 2 === 1 && "lg:order-2")}
                >
                  <ProjectCover project={p} className="transition duration-500 group-hover:scale-[1.02]" />
                </Link>
                <div>
                  <p className="font-mono text-sm text-accent">
                    0{i + 1} · {p.company}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-muted">{p.tagline}</p>
                  <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <ProjectLinks project={p} size="lg" />
                    <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                      Read case study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <Link href="/projects" className="btn-ghost">
            View all {projects.length} projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
