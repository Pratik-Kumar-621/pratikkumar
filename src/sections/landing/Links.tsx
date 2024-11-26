import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import DownloadingIcon from "@mui/icons-material/Downloading";
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
          Download CV&nbsp;&nbsp;
          <DownloadingIcon />
        </Button>
      </div>
      <div className="landing-links-social">
        <div className="landing-links-social-item">
          <IconButton
            size="small"
            color="inherit"
            className="landing-links-social-item-button"
          >
            <FacebookIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div className="landing-links-social-item">
          <IconButton
            size="small"
            color="inherit"
            className="landing-links-social-item-button"
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div className="landing-links-social-item">
          <IconButton
            size="small"
            color="inherit"
            className="landing-links-social-item-button"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div className="landing-links-social-item">
          <IconButton
            size="small"
            color="inherit"
            className="landing-links-social-item-button"
          >
            <XIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default LandingLinks;
