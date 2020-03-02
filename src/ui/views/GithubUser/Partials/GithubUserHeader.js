import React from "react";
import moonIcon from "../../../../assets/Images/moon.svg";
import sunIcon from "../../../../assets/Images/sun.svg";
import { connect } from "react-redux";
import configTheme from "../../../../core/configs/config.theme";
import { toggleTheme } from "../../../../core/actions/action.index";

function GithubUserHeader({ theme, dispatch }) {
  return (
    <header className="main-header">
      <h1>GitHub Profiles</h1>
      <span
        className="toggle-theme-button"
        onClick={() => dispatch(toggleTheme())}
      >
        <img
          src={theme === configTheme.LIGHT ? moonIcon : sunIcon}
          className="toggle-theme-button-img"
        />
      </span>
    </header>
  );
}

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(GithubUserHeader);
