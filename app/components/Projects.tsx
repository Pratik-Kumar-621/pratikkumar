import React from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    image: "/projects/taskmanager.jpg",
    github: "https://github.com/yourusername/taskmanager",
    live: "https://taskmanager-demo.com",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media platforms with data visualization and reporting.",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    image: "/projects/dashboard.jpg",
    github: "https://github.com/yourusername/dashboard",
    live: "https://dashboard-demo.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
