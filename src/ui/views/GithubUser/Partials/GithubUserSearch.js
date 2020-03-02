import React, { useState } from "react";
import searchIcon from "../../../../assets/Images/search-outline.svg";
import loaderIcon from "../../../../assets/Images/loader-outline.svg";
import { connect } from "react-redux";
import { fetchUserIfNeeded } from "../../../../core/actions/action.index";

function GithubUserSearch({ userNotFound, isFetching, dispatch }) {
  const [username, setUsername] = useState("");

  const onInputUserChange = val => {
    setUsername(val);
  };

  const onSearch = () => {
    if (!username) return;

    dispatch(fetchUserIfNeeded(username));
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
        value={username}
        onChange={e => onInputUserChange(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <button
        className={`search-button ${
          !!username ? "search-button-has-value" : ""
        }`}
        onClick={() => onSearch()}
      >
        <img
          src={isFetching ? loaderIcon : searchIcon}
          className="search-button-img"
        />
      </button>

      {userNotFound ? <p className="form-error">User not found :(</p> : null}
    </div>
  );
}

const mapStateToProps = state => ({
  userNotFound: state.userNotFound,
  isFetching: state.isFetching
});

export default connect(mapStateToProps)(GithubUserSearch);
