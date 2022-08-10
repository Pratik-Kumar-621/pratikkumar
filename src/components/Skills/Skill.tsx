import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { PageHeading } from "../Heading/Heading";
import { colors } from "../../styles/colors";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import Tooltip from "@mui/material/Tooltip";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}
// styles
const useStyles = makeStyles({
  skillPage: {},
  skillIndiv: {
    marginBottom: "2.7rem",
  },
  skillType: {
    fontSize: "1.36rem",
    fontWeight: 300,
    marginBottom: "1.7rem",
  },
  skillList: {
    maxWidth: "60rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(4.75rem, 1fr))",
    gridGap: "1.5rem",
  },
  skill: {
    height: "4.75rem",
    width: "4.75rem",
    borderRadius: ".4rem",
    border: `1px solid ${colors.border}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    transition: "all .2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 4px 4px rgba(255, 255, 255, 0.25)",
    },
  },
});

const Skill = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const classes = useStyles();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skills"]{
      skillType,
      skillSlug,  
      skills[]->{
        stackName,
        stackImage{
          asset->{
            _id,
            url
          },
        }
      }
         
    }`
      )
      .then((skill) => setSkills(skill))
      .catch(console.error);
  }, []);
  // console.log(skills);

  return (
    <div className={classes.skillPage}>
      <PageHeading children="Skills" />
      {skills &&
        skills.map((skill) => {
          console.log();
          return (
            <div className={classes.skillIndiv}>
              <div className={classes.skillType}>{skill.skillType}</div>
              <div className={classes.skillList}>
                {skill.skills.map((tech: any) => {
                  return (
                    <Tooltip title={tech.stackName} arrow>
                      <div className={classes.skill}>
                        <img src={urlFor(tech.stackImage).url()} alt="" />
                      </div>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Skill;
