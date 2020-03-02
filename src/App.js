import React from "react";
import GithubUser from "./ui/views/GithubUser/GithubUser";
import { connect } from "react-redux";

function App({ theme }) {
  return (
    <div className={`app-main ${theme}`}>
      <GithubUser />
    </div>
  );
}

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(App);
