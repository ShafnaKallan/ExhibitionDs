import axios from "axios";

// const apiUrl = "http://127.0.0.1:9090";
const apiUrl = "";

export function storeData(data) {
     return axios.post(`${apiUrl}/api/user/store`, {
        headers: {
            "Content-Type": "application/json",
        },
        name: data.name,
        phone_number: data.phone_number,
        business_name: data.business_name,
        business_category: data.business_category,
        
      });
      
}
export function sendTts(data) {
    return axios.post(`${apiUrl}/api/tts/send`, {
        name: data.name,
        phone_number: data.phone_number,
        language: data.language,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization ": "Bearer " + localStorage.getItem("access_token"),
        },
      });
}
export function sendRec(data) {
    return axios.post(`${apiUrl}/api/rec/send`, {
        phone_number: data.phone_number,
      },{
        headers: {
          "Content-Type": "application/json",
          "Authorization ": "Bearer " + localStorage.getItem("access_token"),
        }
      });
}

export function getData() {
  return axios.get(`${apiUrl}/api/user/get`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("access_token"),
    }
  });
}