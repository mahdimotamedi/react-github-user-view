import React from "react";
import searchIcon from "../../../../assets/Images/search-outline.svg";

function GithubUserSearch() {
  return (
    <div className="get-username-part">
      <h3>
        Enter a GitHub username, <br />
        to see the magic.
      </h3>
      <label htmlFor="github-username">GitHub username:</label>
      <input id="github-username" type="text" placeholder="@username" />
      <button className="search-button">
        <img src={searchIcon} className="search-button-img" />
      </button>
    </div>
  );
}

export default GithubUserSearch;
