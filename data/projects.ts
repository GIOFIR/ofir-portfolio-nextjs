import { Project } from "@/types/project";


export const projects: Project[] = [
  {
    title: "Queue Manager CLI",
    description:
      "Command-line application for managing task queues, including priority handling and persistence.",
    technologies: ["Python", "CLI", "Testing"],
    link: "https://github.com/GIOFIR/Queue-Manager-CLI",
    category: "cli",
  },
  {
    title: "User Management API",
    description:
      "RESTful API for user management with authentication, migrations, and PostgreSQL integration.",
    technologies: ["FastAPI", "PostgreSQL", "Docker"],
    link: "https://github.com/GIOFIR/Notes-API",
    category: "backend",
  },
];