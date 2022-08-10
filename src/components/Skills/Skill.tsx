import { makeStyles } from "@mui/styles";
import { PageHeading } from "../Heading/Heading";
import { colors } from "../../styles/colors";

// styles
const useStyles = makeStyles({
  skillPage: {},
  skillIndiv: {
    marginTop: "2rem",
  },
  skillType: {
    fontSize: "1.25rem",
    fontWeight: 300,
    marginBottom: "1.25rem",
  },
  skillList: {
    maxWidth: "60rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(3.75rem, 1fr))",
    gridGap: "1.5rem",
  },
  skill: {
    height: "3.75rem",
    width: "3.75rem",
    borderRadius: ".4rem",
    border: `1px solid ${colors.border}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.1rem",
    transition: "all .2s ease-in-out",
    "&:hover": {
      cursor: "default",
      boxShadow: "0px 4px 4px rgba(255, 255, 255, 0.25)",
    },
  },
});

const skills = [
  {
    type: "Language",
    skill: ["C", "C++", "Python"],
  },
  {
    type: "Development",
    skill: [
      "HTML",
      "CSS",
      "Javascript",
      "HTML",
      "CSS",
      "Javascript",
      "HTML",
      "CSS",
      "Javascript",
      "HTML",
      "CSS",
      "Javascript",
      "HTML",
      "CSS",
      "Javascript",
      "HTML",
      "CSS",
      "Javascript",
      "HTML",
      "CSS",
      "Javascript",
      "HTML",
      "CSS",
      "Javascript",
      "HTML",
      "CSS",
      "Javascript",
    ],
  },
  {
    type: "Tools",
    skill: ["Figma", "AdobeXD", "Git", "GitHub"],
  },
];

const Skill = () => {
  const classes = useStyles();
  return (
    <div className={classes.skillPage}>
      <PageHeading children="Skills" />
      {skills.map((skill, index) => {
        return (
          <div className={classes.skillIndiv} key={index}>
            <div className={classes.skillType}>{skill.type}</div>
            <div className={classes.skillList}>
              {skill.skill.map((sk, indx) => (
                <div className={classes.skill} key={indx}>
                  {sk[0]}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
