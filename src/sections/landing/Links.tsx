import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import { Button } from "@mui/material";

const LandingLinks = () => {
  const handleCVDownload = () => {};
  return (
    <div className="landing-links">
      <div className="landing-links-cv" onClick={handleCVDownload}>
        <Button>Download CV</Button>
      </div>
      <div className="landing-links-social">
        <div className="landing-links-social-item">
          <a href="/">
            <FacebookIcon />
          </a>
        </div>
        <div className="landing-links-social-item">
          <a href="/">
            <LinkedInIcon />
          </a>
        </div>
        <div className="landing-links-social-item">
          <a href="/">
            <GitHubIcon />
          </a>
        </div>
        <div className="landing-links-social-item">
          <a href="/">
            <XIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingLinks;
