import { Briefcase, GraduationCap, MapPin, Users } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { about, site } from "@/data/site";

const facts = [
  { Icon: MapPin, label: "Based in", value: "Lahore, Pakistan" },
  { Icon: Briefcase, label: "Currently", value: "Senior React Developer @ EvolversTech" },
  { Icon: GraduationCap, label: "Education", value: "BS Software Engineering (HEC Scholar)" },
  { Icon: Users, label: "Work style", value: "Remote, hybrid or on-site" },
];

export function About() {
  return (
    <section id="about" className="container py-24">
      <SectionHeading eyebrow="about me" title="Crafting interfaces people enjoy using" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="card p-6">
            <div className="mb-6 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 font-display text-2xl font-bold text-white">
                {site.initials}
              </div>
              <div>
                <p className="font-display text-lg font-semibold">{site.name}</p>
                <p className="text-sm text-muted">{site.role}</p>
              </div>
            </div>
            <ul className="space-y-4">
              {facts.map(({ Icon, label, value }) => (
                <li key={label} className="flex gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
