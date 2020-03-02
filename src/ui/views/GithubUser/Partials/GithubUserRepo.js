import React from "react";
import codeIcon from "../../../../assets/Images/code.svg";
import starIcon from "../../../../assets/Images/star.svg";
import copyIcon from "../../../../assets/Images/copy.svg";

function GithubUserRepo({
  name,
  description,
  language,
  stargazersCount,
  forksCount
}) {
  return (
    <div className="user-repo-single">
      <div className="user-repo-single-container">
        <h4>{name}</h4>
        <p>{description}</p>

        <span className="repo-detail">
          <img src={codeIcon} />
          {language}
        </span>

        <span className="repo-detail">
          <img src={starIcon} />
          {stargazersCount}
        </span>

        <span className="repo-detail">
          <img src={copyIcon} />
          {forksCount}
        </span>
      </div>
    </div>
  );
}

export default GithubUserRepo;
