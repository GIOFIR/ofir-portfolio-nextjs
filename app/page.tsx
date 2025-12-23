export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight">
        Hi, I'm Ofir Giat
      </h1>

      <p className="mt-4 text-xl text-gray-700">
        Backend developer with a strong foundation in Python and system design.
      </p>

      <p className="mt-6 text-gray-600 leading-relaxed">
        I build scalable APIs, backend services, and data-driven systems.
        My experience includes FastAPI, PostgreSQL, Docker, and modern
        frontend tools like Next.js and TypeScript.
      </p>

      <div className="mt-10">
        <a
          href="/projects"
          className="inline-block rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
        >
          View Projects
        </a>
      </div>
    </main>
  );
}
