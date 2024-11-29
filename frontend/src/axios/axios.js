import axios from 'axios'

// const baseUrl = "http://127.0.0.1:8000/"
const baseUrl = "http://jsonplaceholder.typicode.com/posts"
const AxiosInstance = axios.create({
    baseURL:baseUrl,
    timeout: 5000,
    headers:{ 
        "Content-Type":"multipart/formdata",
        accept: "application/json"

    }
});

export default AxiosInstance

