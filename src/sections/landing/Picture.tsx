import React from "react";
const logo = require("../../assets/profile1.png");

const LandingImage = () => {
  return (
    <div className="landing-image">
      <div className="landing-image-container">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default LandingImage;
