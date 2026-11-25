import Image from "next/image";
import { domainOf, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Shows the project screenshot if `cover` is set; otherwise renders a
 * branded, generated "browser mockup" so the site looks complete before
 * real screenshots are added.
 */
export function ProjectCover({ project, className, priority }: { project: Project; className?: string; priority?: boolean }) {
  const [c1, c2] = project.colors;
  const domain = domainOf(project.liveUrl) ?? project.linkNote ?? "private app";

  return (
    <div
      className={cn("relative aspect-[16/10] overflow-hidden", className)}
      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-x-[7%] bottom-0 top-[12%] overflow-hidden rounded-t-xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="flex items-center gap-1.5 border-b border-white/20 bg-black/20 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/60" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="ml-2 truncate rounded bg-white/15 px-2 py-0.5 font-mono text-[10px] text-white/90">{domain}</span>
        </div>

        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} screenshot`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="!top-7 object-cover object-top"
          />
        ) : (
          <div className="flex h-full">
            <div className="hidden w-1/5 flex-col gap-2 border-r border-white/15 bg-black/10 p-3 sm:flex">
              <span className="h-2 w-3/4 rounded bg-white/50" />
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="h-1.5 rounded bg-white/25" style={{ width: `${85 - i * 9}%` }} />
              ))}
            </div>
            <div className="flex-1 p-4">
              <p className="font-display text-xl font-bold text-white drop-shadow sm:text-2xl">{project.title}</p>
              <p className="mt-1 text-[11px] text-white/80 sm:text-xs">{project.tagline}</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-10 rounded-md bg-white/20 sm:h-12" />
                ))}
              </div>
              <div className="mt-2 h-16 rounded-md bg-white/15 sm:h-20" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
