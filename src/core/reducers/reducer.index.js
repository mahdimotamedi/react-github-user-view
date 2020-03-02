import {
  TOGGLE_THEME,
  RECEIVE_GITHUB_INFO,
  REQUEST_GITHUB_INFO,
  USER_NOT_FOUND
} from "../configs/config.actions";
import configTheme from "../configs/config.theme";
import ServiceStorage from "../services/service.storage";

function appReducer(
  state = {
    isFetching: false,
    userNotFound: false,
    theme: ServiceStorage.getTheme(),
    userInfo: {},
    userRepos: []
  },
  action
) {
  switch (action.type) {
    case TOGGLE_THEME:
      let appTheme =
        state.theme === configTheme.LIGHT
          ? configTheme.DARK
          : configTheme.LIGHT;

      ServiceStorage.setTheme(appTheme);
      return {
        ...state,
        theme: appTheme
      };

    case REQUEST_GITHUB_INFO:
      return {
        ...state,
        isFetching: true,
        userNotFound: false,
        userInfo: {},
        userRepos: []
      };

    case RECEIVE_GITHUB_INFO:
      return {
        ...state,
        isFetching: false,
        userInfo: action.userInfo,
        userRepos: action.userRepos
      };

    case USER_NOT_FOUND:
      return {
        ...state,
        isFetching: false,
        userNotFound: true
      };

    default:
      return state;
  }
}

export default appReducer;
