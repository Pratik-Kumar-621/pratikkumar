import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import { Button, IconButton } from "@mui/material";

const LandingLinks = () => {
  const handleCVDownload = () => {};
  return (
    <div className="landing-links">
      <div className="landing-links-cv" onClick={handleCVDownload}>
        <Button
          className="landing-links-cv-button"
          variant="contained"
          color="primary"
        >
          Download CV
        </Button>
      </div>
      <div className="landing-links-social">
        <IconButton
          size="small"
          color="inherit"
          className="landing-links-social-item"
        >
          <FacebookIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          size="small"
          color="inherit"
          className="landing-links-social-item"
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          size="small"
          color="inherit"
          className="landing-links-social-item"
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          size="small"
          color="inherit"
          className="landing-links-social-item"
        >
          <XIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default LandingLinks;
