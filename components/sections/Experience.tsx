import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { experience } from "@/data/experience";
import { getProject } from "@/data/projects";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="container">
        <SectionHeading
          eyebrow="experience"
          title="Where I've worked"
          subtitle="4+ years building production front-ends for product companies and agencies."
        />

        <ol className="relative ml-3 border-l border-line sm:ml-4">
          {experience.map((job, i) => (
            <li key={job.company} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
              <span className="absolute -left-[9px] top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-accent bg-bg">
                {job.end === "Present" && <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />}
              </span>

              <Reveal delay={i * 0.05}>
                <div className="card p-6 transition hover:border-accent/40 sm:p-8">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                      <p className="text-accent">{job.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted sm:items-end">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {job.start} – {job.end}
                        {job.end === "Present" && (
                          <span className="ml-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-500">
                            Current
                          </span>
                        )}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-muted">{job.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>

                  {job.projects.length > 0 && (
                    <div className="mt-5 border-t border-line pt-4">
                      <p className="mb-2 text-xs uppercase tracking-wider text-muted">Projects</p>
                      <div className="flex flex-wrap gap-2">
                        {job.projects.map((slug) => {
                          const p = getProject(slug);
                          if (!p) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/projects/${slug}`}
                              className="inline-flex items-center gap-1 rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/20"
                            >
                              {p.title} <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
