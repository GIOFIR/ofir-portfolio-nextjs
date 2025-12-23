import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ofir Giat",
  description:
    "Backend and full-stack projects including APIs, CLI tools, and system design using Python, FastAPI, PostgreSQL, and Docker.",

  openGraph: {
    title: "Projects | Ofir Giat",
    description:
      "A selection of backend and full-stack projects demonstrating real-world system design and development.",
    url: "https://ofir-portfolio-nextjs.vercel.app/",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Projects</h1>

      <p className="mt-4 text-gray-700">
        A selection of projects demonstrating my experience in backend
        development and system design.
      </p>

      <div className="mt-8 grid gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
