import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost/project-react-Combination/back-end/"
})


export default api;