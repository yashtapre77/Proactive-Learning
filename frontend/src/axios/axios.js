import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000/"
const AxiosInstance = axios.create({
    baseURL:baseUrl,
    timeout: 500,
    headers:{
        "Content-Type":"application/json",
        accept:"applicatioin/json"

    }
});

export default AxiosInstance

