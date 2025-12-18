import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ofir",
  description:
    "A selection of backend and software engineering projects including APIs, CLI tools, and system design work.",
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
