import { makeStyles } from "@mui/styles";
import { colors } from "../../styles/colors";

// Styles
const useStyles = makeStyles({
  pageHeading: {
    fontSize: "1.75rem",
    fontWeight: 600,
    color: colors.pageHeading,
    letterSpacing: "0.1rem",
  },
});

interface HeadingProps {
  children: String;
}

export const PageHeading = ({ children }: HeadingProps) => {
  const classes = useStyles();
  return <div className={classes.pageHeading}>{children}</div>;
};
