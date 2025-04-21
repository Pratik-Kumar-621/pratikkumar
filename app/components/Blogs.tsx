import React from "react";

const blogs = [
  {
    title: "Building Scalable React Applications",
    description:
      "Learn how to structure and scale your React applications for better maintainability and performance.",
    date: "March 15, 2023",
    readTime: "5 min read",
    link: "https://yourblog.com/react-scalability",
  },
  {
    title: "Modern CSS Techniques",
    description:
      "Explore the latest CSS features and techniques to create stunning user interfaces.",
    date: "February 28, 2023",
    readTime: "4 min read",
    link: "https://yourblog.com/modern-css",
  },
  {
    title: "TypeScript Best Practices",
    description:
      "A comprehensive guide to writing better TypeScript code with real-world examples.",
    date: "January 10, 2023",
    readTime: "6 min read",
    link: "https://yourblog.com/typescript-best-practices",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Blogs</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <span className="text-sm text-gray-500">
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
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

export default Blogs;
