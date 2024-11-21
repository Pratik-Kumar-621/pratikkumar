import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

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
      <div className="landing-navigation-logo">Pratik Kumar</div>
      <div
        className={`landing-navigation-links landing-navigation-links-mobile-${
          open ? "open" : "close"
        }`}
      >
        <div className="landing-navigation-links-item">Services</div>
        <div className="landing-navigation-links-item">Skills</div>
        <div className="landing-navigation-links-item">Works</div>
        <div className="landing-navigation-links-item">Blogs</div>
        <div className="landing-navigation-links-item">Testimonials</div>
        <div className="landing-navigation-links-item">Contact</div>
      </div>
      <div className="landing-navigation-button">Hire Me </div>
    </div>
  );
};

export default LandingNavigation;
