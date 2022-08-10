import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { PageHeading } from "../Heading/Heading";
import { colors } from "../../styles/colors";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}

const useStyles = makeStyles({
  aboutPage: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  aboutContent: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    height: "100%",
    marginTop: "2.4rem",
  },
  Image: {
    width: "30rem",
  },
  profilePhoto: {
    width: "100%",
    // alignSelf: "center",
    marginLeft: "-7.5rem",
  },
  aboutInfo: {
    // alignSelf: "center",
  },
  about: {
    fontWeight: 300,
    fontSize: "1.5rem",
    padding: "1rem 0",
  },
});

const About = () => {
  const [abouts, setAbout] = useState<any[]>([]);
  const classes = useStyles();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"]{
            profilePhoto{
                asset->{
                    _id,
                    url
                },
            },
            about[]
    }`
      )
      .then((abt) => setAbout(abt))
      .catch(console.error);
  }, []);
  console.log(abouts[0]?.about.map((abt: any) => abt));

  return (
    <div className={classes.aboutPage}>
      <PageHeading children="Myself" />
      {abouts &&
        abouts.map((abt: any) => {
          return (
            <div className={classes.aboutContent}>
              <div className={classes.Image}>
                <img
                  className={classes.profilePhoto}
                  src={urlFor(abt.profilePhoto).url()}
                  alt=""
                />
              </div>
              <div className={classes.aboutInfo}>
                {abt.about.map((abts: any) => {
                  return <div className={classes.about}>{abts}</div>;
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default About;
