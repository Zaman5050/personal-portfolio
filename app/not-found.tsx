import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container grid min-h-[70vh] place-items-center pt-24 text-center">
      <div>
        <p className="font-display text-8xl font-bold text-gradient">404</p>
        <p className="mt-4 text-lg text-muted">This page doesn&apos;t exist.</p>
        <Link href="/" className="btn-primary mt-8">Back home</Link>
      </div>
    </section>
  );
}
