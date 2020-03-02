import React from "react";
import GithubUserHeader from "./Partials/GithubUserHeader";
import GithubUserSearch from "./Partials/GithubUserSearch";

function GithubUser() {
  return (
    <div className="container">
      <GithubUserHeader />
      <GithubUserSearch />
    </div>
  );
}

export default GithubUser;
