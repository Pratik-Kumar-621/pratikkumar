import React from "react";
const logo = require("../../assets/profile3.jpeg");

const LandingImage = () => {
  return (
    <div className="landing-image">
      <img src={logo} alt="" />
    </div>
  );
};

export default LandingImage;
