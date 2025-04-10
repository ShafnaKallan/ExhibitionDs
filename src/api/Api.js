import axios from "axios";

export function storeData(data) {
     return axios.post("https://expo.datastoneglobal.com/api/user/store", {
        headers: {
            "Content-Type": "application/json",
        },
        name: data.name,
        phone_number: data.phone_number,
        business_name: data.business_name,
        
      });
      
}
export function sendTts(data) {
    return axios.post("https://api-post-ada8f-default-rtdb.firebaseio.com/tts.json", {
        headers: {
          "Content-Type": "application/json",
          "Authorization ": "Bearer ".localStorage.getItem("token"),
        },
        body: JSON.stringify(data),
      });
}
export function sendRec(data) {
    return axios.post("https://api-post-ada8f-default-rtdb.firebaseio.com/tts.json", {
        headers: {
          "Content-Type": "application/json",
          "Authorization ": "Bearer ".localStorage.getItem("token"),
        },
        body: JSON.stringify(data),
      });
}