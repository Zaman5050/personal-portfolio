"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { LinkedinIcon, WhatsappIcon } from "../icons";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const channels = [
  { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { Icon: WhatsappIcon, label: "WhatsApp", value: site.whatsapp, href: site.whatsappLink },
  { Icon: LinkedinIcon, label: "LinkedIn", value: "Connect with me", href: site.linkedin },
  { Icon: MapPin, label: "Location", value: site.location },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => null);

    if (res?.ok) {
      setStatus("sent");
      reset();
      return;
    }
    // Fallback: open the visitor's email client with the message pre-filled.
    const body = encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(data.subject)}&body=${body}`;
    setStatus("error");
  };

  const field = (hasError: boolean) =>
    cn(
      "w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20",
      hasError ? "border-red-500" : "border-line"
    );

  return (
    <section id="contact" className="container py-24">
      <SectionHeading
        eyebrow="contact"
        title="Let's build something great"
        subtitle="Have a role, a project or just want to say hi? My inbox is always open, and I usually reply within 24 hours."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <ul className="space-y-4">
            {channels.map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                    <p className="truncate font-medium">{value}</p>
                  </div>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="card flex items-center gap-4 p-4 transition hover:-translate-y-0.5 hover:border-accent/50"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="card flex items-center gap-4 p-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                <input id="name" placeholder="John Doe" className={field(!!errors.name)} {...register("name")} />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                <input id="email" type="email" placeholder="john@company.com" className={field(!!errors.email)} {...register("email")} />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label>
              <input id="subject" placeholder="Front-end role at ..." className={field(!!errors.subject)} {...register("subject")} />
              {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea id="message" rows={5} placeholder="Tell me about your project or role..." className={field(!!errors.message)} {...register("message")} />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p role="status" className="flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-500">
                <CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p role="status" className="rounded-xl bg-accent/10 p-3 text-sm text-muted">
                Your email app should open with your message ready to send. If it didn&apos;t, email me at{" "}
                <a href={`mailto:${site.email}`} className="text-accent underline">{site.email}</a>.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
