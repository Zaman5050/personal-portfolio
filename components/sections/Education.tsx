import { Award, BadgeCheck, Calendar, GraduationCap } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { achievements, certificates, education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="border-y border-line bg-surface/30 py-24">
      <div className="container">
        <SectionHeading eyebrow="education" title="Education & achievements" />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="card relative h-full overflow-hidden p-8">
              <GraduationCap className="absolute -right-6 -top-6 h-40 w-40 text-accent/5" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">{education.degree}</h3>
              <p className="mt-1 text-accent">{education.school}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" /> {education.start} – {education.end}
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-bg/60 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted">CGPA</p>
                  <p className="mt-1 font-display text-2xl font-bold text-gradient">{education.cgpa}</p>
                </div>
                <div className="rounded-xl border border-line bg-bg/60 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted">Sponsorship</p>
                  <p className="mt-1 font-display text-2xl font-bold text-gradient">HEC Scholar</p>
                </div>
              </div>
              {education.highlights.length > 0 && (
                <ul className="mt-6 space-y-2 text-sm">
                  {education.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {achievements.map((a) => (
              <Reveal key={a.title} delay={0.1}>
                <div className="card relative overflow-hidden p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent" />
                  <div className="relative flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-400/15 text-amber-500">
                      <Award className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold">{a.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{a.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.15}>
              <div className="card p-6">
                <h3 className="font-display font-semibold">Certifications</h3>
                <ul className="mt-4 space-y-3">
                  {certificates.map((c) => (
                    <li key={c.title} className="flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="text-sm font-medium">{c.title}</p>
                        <p className="text-xs text-muted">{c.issuer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
