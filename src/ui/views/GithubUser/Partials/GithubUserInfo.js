import React from "react";
import GithubUserRepo from "./GithubUserRepo";
import GithubUserInfoIsFetching from "./GithubUserInfoIsFetching";
import { connect } from "react-redux";

function GithubUserInfo({ userNotFound, isFetching, userInfo, userRepos }) {
  if (isFetching) return <GithubUserInfoIsFetching />;

  if (userNotFound || !userInfo.login) return null;

  return (
    <div className="github-user">
      <div className="user-info">
        <img src={userInfo.avatar_url} />
        <h3>{userInfo.name}</h3>
        <div className="user-info-detail">
          Company: <strong>{userInfo.company}</strong>
        </div>
        <div className="user-info-detail">
          Location: <strong>{userInfo.location}</strong>
        </div>
        <div className="user-info-detail">
          Website: <a href={userInfo.blog}>{userInfo.blog}</a>
        </div>
      </div>

      <div className="user-repos">
        <div className="user-repos-container">
          {userRepos.map(repo => (
            <GithubUserRepo
              key={repo.id}
              name={repo.name}
              description={repo.description}
              language={repo.language}
              forksCount={repo.forks_count}
              stargazersCount={repo.stargazers_count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  userNotFound: state.userNotFound,
  userInfo: state.userInfo,
  userRepos: state.userRepos,
  isFetching: state.isFetching
});

export default connect(mapStateToProps)(GithubUserInfo);
