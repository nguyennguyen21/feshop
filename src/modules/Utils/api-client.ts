import axios from "axios";
const BaseUrl = import.meta.env.BASE_URL;

const instance = axios.create({
    baseURL : BaseUrl,
    timeout : 1000,
    headers:{
       'Content-Type': 'application/json',   
    },
});

export default instance;
