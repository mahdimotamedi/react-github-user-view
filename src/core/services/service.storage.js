import configTheme from "../configs/config.theme";

const ServiceStorage = {
  setTheme: theme => {
    localStorage.setItem("theme", theme);
  },

  getTheme: () => {
    let rv = localStorage.getItem("theme");
    if (!rv) rv = configTheme.LIGHT;

    return rv;
  }
};

export default ServiceStorage;
