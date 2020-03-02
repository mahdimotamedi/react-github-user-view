import axios from "axios/index";

const ServiceApi = axios;

ServiceApi.defaults.timeout = 5000;
ServiceApi.defaults.baseURL = "https://api.github.com";
axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";

export default ServiceApi;
