import React from "react";
import moonIcon from "../../../../assets/Images/moon.svg";

function GithubUserHeader() {
  return (
    <header className="main-header">
      <h1>GitHub Profiles</h1>
      <span className="toggle-theme-button">
        <img src={moonIcon} className="toggle-theme-button-img" />
      </span>
    </header>
  );
}

export default GithubUserHeader;
