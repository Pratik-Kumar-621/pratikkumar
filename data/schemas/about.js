export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "profilePhoto",
      title: "Profile Photo",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
