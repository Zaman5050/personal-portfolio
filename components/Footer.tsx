import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import { site } from "@/data/site";

export const socials = [
  { label: "GitHub", href: site.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon },
  { label: "WhatsApp", href: site.whatsappLink, Icon: WhatsappIcon },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <Link href="/" className="font-display text-lg font-semibold">
            {site.name}
          </Link>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} · Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#main"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent transition hover:-translate-y-0.5"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
