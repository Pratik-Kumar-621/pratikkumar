export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "projectSlug",
      title: "Project Slug",
      type: "slug",
      options: {
        source: "projectName",
        maxLength: 100,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
      },
    },
    {
      name: "projectDesc",
      title: "Project Description",
      type: "string",
    },
    {
      name: "projectStack",
      title: "Project Stack",
      type: "array",
      of: [
        {
          name: "techStack",
          title: "Tech Stack",
          type: "reference",
          to: [{ type: "techStack" }],
        },
      ],
    },
    {
      name: "projectSourceCode",
      title: "Project Source Code",
      type: "string",
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
  ],
};
