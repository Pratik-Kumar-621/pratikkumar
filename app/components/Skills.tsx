import React from "react";
import SectionHeading from "./SectionHeading";

const skills = {
  development: {
    title: "Development",
    skills: [
      "HTML",
      "CSS",
      "Scss",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Rest APIs",
    ],
  },
  tools: {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Docker",
      "Vercel",
      "Netlify",
    ],
  },
  libraries: {
    title: "Libraries",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "ShadCN",
      "Redux",
      "Formik",
      "Firebase",
      "Clerk",
    ],
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:pt-10 pt-0 bg-gray-100 transition-all delay-200"
    >
      <div className="container mx-auto px-4 max-w-[1350px]">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with to build amazing applications"
        />
        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillGroup]) => (
            <div
              key={category}
              className="bg-white p-6 rounded-lg shadow-xl border border-gray-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900">
                {skillGroup.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
