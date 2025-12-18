import { Project } from "@/types/project";

type ProjectCardProps = Project;

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 text-gray-700">
        {description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2 text-sm">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="px-2 py-1 bg-gray-100 rounded"
          >
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
}
