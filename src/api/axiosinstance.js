import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    }
});

export default instanceAxios