import axiosService from "../helper/signUpApi";
import config from "../config/local"; 

let setNotes = (data) => {
   
    let reqObj = {
      method: "post",
      url: config.url + "/notes" ,
      headers: {
        "Content-type": "application/json",
        "Authorization" : "Bearer " + sessionStorage.getItem('token')
      },
      data:data
    }
    return axiosService.post(reqObj)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err
      });
  };

  let updateNote = (data, id) => {

    let reqObj = {
      method: "put",
      url: config.url + "/notes/"+ id ,
      headers: {
        "Content-type": "application/json",
        "Authorization" : "Bearer " + sessionStorage.getItem('token')
      },
      data:data
    }
    return axiosService.post(reqObj)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err
      });
  };
  

export {setNotes , updateNote}
  