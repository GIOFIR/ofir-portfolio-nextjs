import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-6">
      <section className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/profile.jpg"
            alt="Ofir Giat – Backend Developer"
            width={180}
            height={180}
            className="rounded-full border border-zinc-300 shadow-sm"
            priority
          />
        </div>
          {/* Text Content */}
          <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Ofir Giat
          </h1>

          <p className="mt-4 text-xl text-zinc-700">
            Backend Developer specializing in building reliable APIs,
            data-driven systems, and production-ready backend services.
          </p>

          <p className="mt-6 text-zinc-600 leading-relaxed">
            I work primarily with Python, FastAPI, PostgreSQL, and Docker.
            I focus on clean architecture, performance, and maintainable code.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="rounded-md bg-zinc-900 px-6 py-3 text-white font-medium hover:bg-zinc-800 transition"
            >
              View Projects
            </Link>

            <a
              href="https://github.com/GIOFIR"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-zinc-300 px-6 py-3 font-medium text-zinc-900 hover:bg-zinc-100 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
