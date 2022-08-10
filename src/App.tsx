import { makeStyles } from "@mui/styles";
import Project from "./components/Project/Project";
import Skill from "./components/Skills/Skill";
import { colors } from "./styles/colors";

const useStyles = makeStyles({
  app: {
    backgroundColor: colors.bodyBackground,
    padding: "4.2rem 7.5rem",
    minHeight: "100vh",
    color: colors.white,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      {/* <Skill /> */}
      <Project />
    </div>
  );
};

export default App;
