export default {
    name:"skills",
    title:"Skills",
    type:"document",
    fields:[
        {
            name:"skillType",
            title:"Skill Type",
            type:"string",
        },
        {
            name:"skillSlug",
            title:"Skill Slug",
            type:"slug",
            options:{
                source:"skillType",
                maxLength:100,
                slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 100)
            }
        },
        {
            name:"skills",
            title:"Skills",
            type:"array",
            of: [{
                name:"techStack",
                title:"Tech Stack",
                type: "reference",
                to: [{type: "techStack"}]
                
            }]

        }
    ]
}