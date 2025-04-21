import React from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Autotrend AI",
    description:
      "Generate trending posts in few clicks and post directly to your social handles.",
    technologies: [
      "Next.js",
      "Scss",
      "Typescript",
      "Firebase",
      "Material UI",
      "PostgreSQL",
      "Prisma",
    ],
    image: "/projects/autotrendai.png",
    github: "https://github.com/Pratik-Kumar-621/autotrend.ai",
    live: "https://autotrendai.vercel.app/",
  },
  {
    title: "Google UI clone",
    description: "A pixel-perfect UI Clone for google homepage (mobile based).",
    technologies: ["React.js", "Scss", "Typescript", "Material UI", "Firebase"],
    image: "/projects/google.png",
    github: "https://github.com/Pratik-Kumar-621/google-clone-assignment",
    live: "https://google-clone-assignment-6.vercel.app/",
  },
  {
    title: "Multi-step form",
    description:
      "A dynamic multi-step form with smooth transitions between steps and data visualization.",
    technologies: ["React.js", "Scss", "Typescript", "Material UI"],
    image: "/projects/multistep.png",
    github: "https://github.com/Pratik-Kumar-621/multistep-form",
    live: "https://multistep-form21.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-[1350px]">
        <SectionHeading
          title="Projects"
          subtitle="A showcase of my development projects."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-around rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-52 bg-gray-200">
                {/* Replace with actual image */}
                <div
                  className="w-full h-full bg-cover bg-top"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>
              <div className="p-6 pb-0">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
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
              </div>
              <div className="px-6 pt-3 pb-4 flex gap-4 mt-auto border-t border-blue-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-1"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 0-.287-.01-1.05-.016-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.9-.015 3.293 0 .323.19.7.8.583C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Repo
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-1"
                  >
                    <path d="M14 3h7v7h-2V5.414l-9.293 9.293-1.414-1.414L17.586 4H14V3z" />
                    <path d="M5 5h5V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2v5H5V5z" />
                  </svg>
                  Visit Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
