import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'https://inaweb.ir/api',
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    }
});

export default instanceAxios