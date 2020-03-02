import React from "react";
import GithubUserHeader from "./Partials/GithubUserHeader";
import GithubUserSearch from "./Partials/GithubUserSearch";
import GithubUserInfo from "./Partials/GithubUserInfo";
import CpContainer from "../../components/container/cp.container";

function GithubUser() {
  return (
    <CpContainer>
      <GithubUserHeader />
      <GithubUserSearch />
      <GithubUserInfo />
    </CpContainer>
  );
}

export default GithubUser;
