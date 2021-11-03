import axiosService from "../helper/signUpApi";
import config from "../config/local";

const register = (data) => {
  let regObj = {
    method: "post",
    url: config.url + "/user",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return axiosService
    .post(regObj)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};
const login = (data) => {
  let loginObj = {
    method: "post",
    url: config.url + "/user/login",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return axiosService
    .post(loginObj)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};
/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}]*/
export default { register, login };
