import React from "react";
import "./styles/app.scss";
import LandingPage from "./sections/landing";
import AboutPage from "./sections/about";

const App = () => {
  return (
    <div className="app">
      <LandingPage />
      <AboutPage />
    </div>
  );
};

export default App;
