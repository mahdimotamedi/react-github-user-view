import React from "react";
import GithubUserHeader from "./Partials/GithubUserHeader";
import GithubUserSearch from "./Partials/GithubUserSearch";
import GithubUserInfo from "./Partials/GithubUserInfo";

function GithubUser() {
  return (
    <div className="container">
      <GithubUserHeader />
      <GithubUserSearch />
      <GithubUserInfo />
    </div>
  );
}

export default GithubUser;
