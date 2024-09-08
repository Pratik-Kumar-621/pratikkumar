export default {
  name: 'achievements',
  title: 'Achievements',
  type: 'document',
  fields: [
    {
      name: 'achievementImage',
      title: 'Achievement Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'achievementName',
      title: 'Achievement Name',
      type: 'string',
    },
  ],
}
