import React, { useState } from "react";
import searchIcon from "../../../../assets/Images/search-outline.svg";

function GithubUserSearch() {
  const [hasError, setHasError] = useState(false);
  const [inputHasValue, setInputHasValue] = useState(false);

  const onInputUserChange = val => {
    setInputHasValue(!!val);
  };

  return (
    <div className="get-username-part">
      <h3>
        Enter a GitHub username, <br />
        to see the magic.
      </h3>
      <label htmlFor="github-username">GitHub username:</label>
      <input
        id="github-username"
        type="text"
        placeholder="@username"
        onChange={e => onInputUserChange(e.target.value)}
      />
      <button
        className={`search-button ${
          inputHasValue ? "search-button-has-value" : ""
        }`}
      >
        <img src={searchIcon} className="search-button-img" />
      </button>

      {hasError ? <p className="form-error">User not found :(</p> : null}
    </div>
  );
}

export default GithubUserSearch;
