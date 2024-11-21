import React from "react";
import LandingNavigation from "./Navbar";
import LandingInfo from "./Info";
import LandingLinks from "./Links";
import LandingImage from "./Picture";

const LandingUI = () => {
  return (
    <div className="landing">
      <LandingNavigation />
      <LandingInfo />
      <LandingLinks />
      <LandingImage />
    </div>
  );
};

export default LandingUI;
