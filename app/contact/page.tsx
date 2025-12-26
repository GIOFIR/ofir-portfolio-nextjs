import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ofir Giat",
  description:
    "Get in touch with Ofir Giat – backend developer specializing in APIs and backend systems.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 flex justify-center">
      <section className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-zinc-900">
          Contact
        </h1>

        <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
          If you’d like to discuss a backend role, collaboration, or have a
          question about my work, feel free to reach out.
        </p>

        <div className="mt-10 space-y-4 text-zinc-700">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:ogiat103@gmail.com"
              className="text-blue-600 hover:underline"
            >
              ogiat103@gmail.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/GIOFIR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/GIOFIR
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/ofirgiat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/ofirgiat
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
