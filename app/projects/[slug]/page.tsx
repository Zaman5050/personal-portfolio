import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, Calendar, Check, User } from "lucide-react";
import { ProjectCover } from "@/components/ProjectCover";
import { ProjectLinks } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return { title: p.title, description: `${p.tagline}. ${p.description}` };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    { Icon: Briefcase, label: "Company", value: project.company },
    { Icon: User, label: "My role", value: project.role },
    { Icon: Calendar, label: "Timeline", value: project.period },
  ];

  return (
    <article className="relative overflow-hidden pb-24 pt-28">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]" style={{ background: `${project.colors[0]}33` }} />
      <div className="container relative">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <header className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <div className="flex flex-wrap gap-2">
              {project.categories.map((c) => (
                <span key={c} className="chip !text-accent">{c}</span>
              ))}
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-3 text-xl text-muted">{project.tagline}</p>
          </div>
          <div className="lg:justify-self-end">
            <ProjectLinks project={project} size="lg" />
          </div>
        </header>

        <Reveal className="mt-10 overflow-hidden rounded-2xl border border-line shadow-2xl">
          <ProjectCover project={project} priority />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold">What I built</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="card flex gap-3 p-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            {project.challenges && project.challenges.length > 0 && (
              <Reveal>
                <h2 className="font-display text-2xl font-semibold">Challenges & solutions</h2>
                <div className="mt-5 space-y-4">
                  {project.challenges.map((c) => (
                    <div key={c.problem} className="card p-5">
                      <p className="font-medium">{c.problem}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{c.solution}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <ul className="space-y-4">
                {meta.map(({ Icon, label, value }) => (
                  <li key={label} className="flex gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-wider text-muted">Tech stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <nav className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2" aria-label="More projects">
          <Link href={`/projects/${prev.slug}`} className="card group p-5 transition hover:border-accent/50">
            <span className="flex items-center gap-1 text-xs text-muted"><ArrowLeft className="h-3.5 w-3.5" /> Previous</span>
            <span className="mt-1 block font-display text-lg font-semibold group-hover:text-accent">{prev.title}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="card group p-5 text-right transition hover:border-accent/50">
            <span className="flex items-center justify-end gap-1 text-xs text-muted">Next <ArrowRight className="h-3.5 w-3.5" /></span>
            <span className="mt-1 block font-display text-lg font-semibold group-hover:text-accent">{next.title}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
