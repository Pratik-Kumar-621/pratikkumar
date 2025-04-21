import React from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const majorSkills = {
  frontend: {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  backend: {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-[1350px]">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my skills, experience, and what I do"
        />
        <div className="grid md:grid-cols-2 gap-2 md:gap-14 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-900">
              Hey there! I&apos;m a full-stack developer who loves building cool
              stuff on the web. Whether it&apos;s crafting beautiful user
              interfaces or solving complex backend challenges, I&apos;m always
              up for creating something awesome. I believe in writing clean,
              efficient code that not only works but is also fun to work with.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Major Skills
                </h3>
                <Link
                  href="#skills"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  View All Skills →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-gray-300 pt-4">
                {Object.entries(majorSkills).map(([key, value]) => (
                  <div key={key}>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <ul className="space-y-2">
                      {value.skills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-blue-800 mr-2">•</span>
                          <span className="text-gray-900">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex gap-4">
              <a
                href="/pratik_kumar.pdf"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                download="Pratik_Kumar_Resume.pdf"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="space-y-6 md:mt-7">
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                What I Do
              </h3>
              <ul className="space-y-4 border-t border-gray-300 pt-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="text-gray-900 font-medium">
                      Web Development
                    </span>
                    <p className="text-gray-700 mt-1">
                      Building responsive and interactive web applications using
                      modern technologies and best practices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="text-gray-900 font-medium">
                      UI/UX Design
                    </span>
                    <p className="text-gray-700 mt-1">
                      Creating intuitive and user-friendly interfaces with a
                      focus on accessibility and performance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="text-gray-900 font-medium">
                      Mobile Development
                    </span>
                    <p className="text-gray-700 mt-1">
                      Developing cross-platform mobile applications using React
                      Native and other modern frameworks.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 justify-center md:hidden">
              <a
                href="/pratik_kumar.pdf"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                download="Pratik_Kumar_Resume.pdf"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
