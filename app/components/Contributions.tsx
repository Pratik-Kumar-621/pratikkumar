import React from "react";

const contributions = [
  {
    title: "Open Source Project",
    description:
      "Contributed to a popular open-source project by implementing new features and fixing bugs.",
    project: "Project Name",
    link: "https://github.com/org/project",
    date: "2023",
  },
  {
    title: "Community Talk",
    description:
      "Presented at a tech conference about modern web development practices.",
    project: "Tech Conference 2023",
    link: "https://conference.com/talk",
    date: "2023",
  },
  {
    title: "Technical Blog",
    description:
      "Wrote a series of articles about advanced React patterns and best practices.",
    project: "Dev.to Publication",
    link: "https://dev.to/yourusername",
    date: "2023",
  },
];

const Contributions = () => {
  return (
    <section id="contributions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contributions</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {contributions.map((contribution, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-600">
                    {contribution.title}
                  </h3>
                  <span className="text-gray-500">{contribution.date}</span>
                </div>
                <p className="text-gray-700 mb-4">{contribution.description}</p>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Project:</span>
                  <a
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {contribution.project}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
