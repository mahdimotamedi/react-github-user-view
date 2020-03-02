import React from "react";

function GithubUserInfoIsFetching() {
  return (
    <div className="github-user">
      <div className="user-info">
        <div className="placeholder-box placeholder-box-avatar" />

        <div className="placeholder-box placeholder-box-h1" />
        <div className="placeholder-box placeholder-box-p1" />
        <div className="placeholder-box placeholder-box-p2" />
        <div className="placeholder-box placeholder-box-p3" />
      </div>

      <div className="user-repos">
        <div className="user-repos-container">
          <div className="user-repo-single">
            <div className="placeholder-box placeholder-box-repo" />
          </div>

          <div className="user-repo-single">
            <div className="placeholder-box placeholder-box-repo" />
          </div>

          <div className="user-repo-single">
            <div className="placeholder-box placeholder-box-repo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubUserInfoIsFetching;
