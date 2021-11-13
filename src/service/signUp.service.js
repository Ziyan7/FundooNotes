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
      if(data.data.status !== 200){
        throw new Error("Account Creation Failed");
      };
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
      if(data.data.status === 500){
        throw new Error("Login Failed");
      };
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

const forgetPassword = (data) => {
  let reqobj = {
    method: "post",
    url: config.url + "/user/forgotPassword",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return axiosService.post(reqobj)
    .then((data) => {
      if(data.data.status === 500){
        throw new Error("Invalid Email");
      };
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

const resetPassword = (data,token) => {
  let reqobj = {
    method: "post",
    url: config.url + "/user/reset/" + token,
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return axiosService.post(reqobj)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
  }

  const userNotes = ()=>{
    let reqobj = {
      method: "get",
      url: config.url + "/notes" ,
      headers: {
        "Content-type": "application/json",
        "Authorization" : "Bearer " + sessionStorage.getItem('token')
      },
    }
    return axiosService.get(reqobj)
    .then((data) => {
      // sessionStorage.removeItem('token')
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

export { register, login , forgetPassword , resetPassword, userNotes};
