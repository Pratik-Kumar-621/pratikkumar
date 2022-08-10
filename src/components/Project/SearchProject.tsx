import { useState } from "react";
import { makeStyles } from "@mui/styles";

import { colors } from "../../styles/colors";

const useStyles = makeStyles({
  searchBox: {
    width: "24rem",
    height: "2.25rem",
  },
  input: {
    width: "100%",
    paddingLeft: "2.4rem",
    height: "100%",
    background: "#555454",
    border: "none",
    color: colors.white,
    fontWeight: 400,
    borderRadius: "1rem",
    letterSpacing: ".16rem",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      color: colors.white,
      fontWeight: 200,
    },
  },
});

const SearchProject = () => {
  const classes = useStyles();
  const [inputSearch, setInputSearch] = useState("");
  const filterSearch = (e: any) => {
    setInputSearch(e.target.value);
    console.log(inputSearch);
  };
  return (
    <div className={classes.searchBox}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search Projects ..."
        value={inputSearch}
        onChange={filterSearch}
      />
    </div>
  );
};

export default SearchProject;
