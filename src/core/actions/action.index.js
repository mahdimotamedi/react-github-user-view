import {
  TOGGLE_THEME,
  RECEIVE_GITHUB_INFO,
  REQUEST_GITHUB_INFO,
  USER_NOT_FOUND
} from "../configs/config.actions";
import ApiUser from "../api/api.user";

export const toggleTheme = () => ({
  type: TOGGLE_THEME
});

function requestUser() {
  return {
    type: REQUEST_GITHUB_INFO
  };
}

function userNotFound() {
  return {
    type: USER_NOT_FOUND
  };
}

function receivePosts(userInfo, userRepos) {
  return {
    type: RECEIVE_GITHUB_INFO,
    userInfo: userInfo.data,
    userRepos: userRepos.data
  };
}

function fetchUser(username) {
  return async dispatch => {
    dispatch(requestUser());
    try {
      const userInfo = await ApiUser.getInfo(username);
      const userRepos = await ApiUser.getRepos(username);

      dispatch(receivePosts(userInfo, userRepos));
    } catch (e) {
      dispatch(userNotFound());
    }
  };
}

function shouldFetchUser(state, username) {
  if (state.userInfo && state.userInfo.login === username) {
    return false;
  } else return !state.isFetching;
}

export function fetchUserIfNeeded(username) {
  if (username[0] === "@") username = username.substring(1);

  return (dispatch, getState) => {
    if (shouldFetchUser(getState(), username)) {
      return dispatch(fetchUser(username));
    }
  };
}
