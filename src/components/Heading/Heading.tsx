import { makeStyles } from "@mui/styles";
import { colors } from "../../styles/colors";

// Styles
const useStyles = makeStyles({
  pageHeading: {
    fontSize: "2.1rem",
    fontWeight: 600,
    color: colors.pageHeading,
    letterSpacing: "0.1rem",
    marginBottom: "2.4rem",
  },
});

interface HeadingProps {
  children: String;
}

export const PageHeading = ({ children }: HeadingProps) => {
  const classes = useStyles();
  return <div className={classes.pageHeading}>{children}</div>;
};
