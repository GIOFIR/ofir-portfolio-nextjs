import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rimma Hodos",
  description:
    "About Rimma Hodos – backend developer focused on APIs, system design, and maintainable backend systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 flex justify-center">
      <article className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-zinc-900">
          About Me
        </h1>

        <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
          I am a backend developer with a strong focus on building reliable,
          maintainable, and scalable backend systems. I enjoy working close to
          the core of the system — APIs, data models, and business logic.
        </p>

        <p className="mt-4 text-zinc-700 leading-relaxed">
          My primary stack includes Python, FastAPI, PostgreSQL, and Docker.
          I care deeply about clean architecture, clear interfaces, and writing
          code that is easy to reason about and extend.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          How I Work
        </h2>

        <ul className="mt-4 list-disc list-inside text-zinc-700 space-y-2">
          <li>Design APIs with clear contracts and predictable behavior</li>
          <li>Prefer simplicity over premature complexity</li>
          <li>Write tests where they add real value</li>
          <li>Think about performance and edge cases early</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">
          What I’m Looking For
        </h2>

        <p className="mt-4 text-zinc-700 leading-relaxed">
          I’m interested in backend-focused roles where I can contribute to
          system design, work on real production problems, and continue to grow
          as an engineer.
        </p>
      </article>
    </main>
  );
}
