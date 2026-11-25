import Link from "next/link";
import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import { ProjectCover } from "./ProjectCover";
import type { Project } from "@/data/projects";

export function ProjectLinks({ project, size = "sm" }: { project: Project; size?: "sm" | "lg" }) {
  const pad = size === "lg" ? "" : "!px-3.5 !py-2 !text-xs";
  return (
    <div className="flex flex-wrap gap-2">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className={`btn-primary ${pad}`}>
          Live Site <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span className={`btn-ghost cursor-default hover:!translate-y-0 ${pad}`}>
          <Lock className="h-3.5 w-3.5" /> {project.linkNote ?? "Private"}
        </span>
      )}
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className={`btn-ghost ${pad}`}>
          Source
        </a>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
      <Link href={`/projects/${project.slug}`} aria-label={`${project.title} case study`}>
        <ProjectCover project={project} />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2 text-xs text-muted">
          <span className="font-mono">{project.company}</span>
          <span>{project.period}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <ProjectLinks project={project} />
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-accent">
            Case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
