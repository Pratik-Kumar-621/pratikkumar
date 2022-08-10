import { PageHeading } from "../Heading/Heading";
import { makeStyles } from "@mui/styles";
import { colors } from "../../styles/colors";
import SearchProject from "./SearchProject";

const useStyles = makeStyles({
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  project: {},
});

const Project = () => {
  const classes = useStyles();
  return (
    <div className={classes.project}>
      <div className={classes.head}>
        <PageHeading children="Projects" />
        <SearchProject />
      </div>
    </div>
  );
};

export default Project;
