import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const LandingNavigation = () => {
  const [open, setOpen] = React.useState(false);
  const handleHamburger = () => {
    setOpen(!open);
  };
  return (
    <div className="landing-navigation">
      <div className="landing-navigation-hamburger" onClick={handleHamburger}>
        <MenuIcon />
      </div>
      <Button className="landing-navigation-logo">Pratik Kumar</Button>
      <div
        className={`landing-navigation-links landing-navigation-links-mobile-${
          open ? "open" : "close"
        }`}
      >
        <Button className="landing-navigation-links-item">Services</Button>
        <Button className="landing-navigation-links-item">Skills</Button>
        <Button className="landing-navigation-links-item">Works</Button>
        <Button className="landing-navigation-links-item">Blogs</Button>
        <Button className="landing-navigation-links-item">Testimonials</Button>
        <Button className="landing-navigation-links-item">Contact</Button>
      </div>
      <Button
        className="landing-navigation-button"
        variant="contained"
        color="primary"
      >
        Hire Me
      </Button>
    </div>
  );
};

export default LandingNavigation;
