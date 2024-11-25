import React from "react";
import LandingNavigation from "./Navbar";
import LandingInfo from "./Info";
import LandingLinks from "./Links";
import LandingImage from "./Picture";

const LandingUI = () => {
  return (
    <div className="landing">
      <div className="landing-nav">
        <LandingNavigation />
      </div>
      <div className="landing-content">
        <LandingInfo />
        <LandingLinks />
        <LandingImage />
      </div>
    </div>
  );
};

export default LandingUI;
