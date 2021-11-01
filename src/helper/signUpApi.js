import axios from "axios";
// const api = axios.create({
//   baseURL: "http://localhost:9000",
// });
// const signUp = (data) => {
//   return api.post("/user", data);
// };
// const signIn = (data) => {
//     return api.post("/user/login", data);
//   };
// /*eslint import/no-anonymous-default-export: [2, {"allowObject": true}]*/
let post = (data) =>{
  return axios({
    method: data.method,
    url: data.url,
    headers: data.headers,
    data: data.data
  }).then((data)=> {return data})
  .catch((error)=>{throw error})
};
/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}]*/ 

export default {post,};
