
import axios from "axios";

const API_BASE_URL = "http://localhost:4242/api"

const api = {
    getText: async function() {
        return await axios.get(API_BASE_URL + '/documents/')
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    },
    sendText: async function(content) {
        return await axios.post(API_BASE_URL + '/documents/', { content })
            .then(({data}) => {
                return data;
            })
    }
   
}

export default api;