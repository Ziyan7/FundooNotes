import axios from "axios";
let post = (data) =>{
  return axios({
    method: data.method,
    url: data.url,
    headers: data.headers,
    data: data.data
  }).then((data)=> {
    console.log(data)
    return data}
    )
  .catch((error)=>{throw error})
};
/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}]*/ 

export default {post};
