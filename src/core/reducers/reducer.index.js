import {
  TOGGLE_THEME,
  RECEIVE_GITHUB_INFO,
  REQUEST_GITHUB_INFO
} from "../configs/config.actions";
import configTheme from "../configs/config.theme";

function appReducer(
  state = {
    isFetching: false,
    userNotFound: false,
    theme: configTheme.LIGHT,
    userInfo: {},
    userRepos: []
  },
  action
) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme:
          state.theme === configTheme.LIGHT
            ? configTheme.DARK
            : configTheme.LIGHT
      };

    case REQUEST_GITHUB_INFO:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_GITHUB_INFO:
      return {
        ...state,
        isFetching: false,
        userInfo: action.userInfo,
        userRepos: action.userRepos
      };

    default:
      return state;
  }
}

export default appReducer;
