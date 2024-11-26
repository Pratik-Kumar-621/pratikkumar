import React from "react";
import { Typewriter } from "react-simple-typewriter";

const LandingInfo = () => {
  return (
    <div className="landing-info">
      <div className="landing-info-name">I am Pratik Kumar</div>
      <div className="landing-info-skill">
        <Typewriter
          {...{
            words: ["Web Developer", "Android Developer", "UI/UX Designer"],
            loop: true,
            cursorStyle: "landing-info-skill",
            typeSpeed: 50,
            deleteSpeed: 40,
            delaySpeed: 1000,
          }}
        />
      </div>
      <div className="landing-info-pitch">
        I convert user's comfort into user's experience, design and code. I
        deliver quality product in the least possible time.
      </div>
    </div>
  );
};

export default LandingInfo;
