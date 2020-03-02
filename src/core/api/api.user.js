import ServiceApi from "../services/service.api";

const baseServiceUrl = `users`;

const ApiUser = {
  getInfo: username => {
    const url = `${baseServiceUrl}/${username}`;
    return ServiceApi.get(url);
  },

  getRepos: username => {
    const url = `${baseServiceUrl}/${username}/repos`;
    return ServiceApi.get(url);
  }
};

export default ApiUser;
