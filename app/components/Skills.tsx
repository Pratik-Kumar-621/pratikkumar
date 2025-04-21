import React from "react";

const skills = [
  {
    category: "Development",
    items: [
      "HTML/CSS",
      "Scss",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Capacitor",
      "Node.js",
      "Express",
      "REST APIs",
    ],
  },

  {
    category: "Tools",
    items: ["Figma", "Canva", "Postman", "Docker", "Git", "VS Code"],
  },
  {
    category: "Libraries",
    items: [
      "Material-UI",
      "Ant Design",
      "Tailwind CSS",
      "Firebase",
      "Redux",
      "Prisma",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-700"
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
