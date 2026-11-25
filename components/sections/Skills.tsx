import { CheckCircle2, Code2, Database, Layers, Palette, Wrench } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { skillGroups } from "@/data/skills";

const icons = { code: Code2, layers: Layers, database: Database, check: CheckCircle2, palette: Palette, wrench: Wrench };

export function Skills() {
  return (
    <section id="skills" className="container py-24">
      <SectionHeading eyebrow="skills" title="My toolkit" subtitle="The technologies I use every day to ship reliable, maintainable front-ends." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="card group h-full p-6 transition hover:-translate-y-1 hover:border-accent/50">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 text-accent transition group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-lg border border-line bg-bg/60 px-3 py-1.5 text-sm transition hover:border-accent/60 hover:text-accent">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
