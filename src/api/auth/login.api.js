import axios from "axios";
import {useMutation} from "@tanstack/react-query";

const loginApi = async (data) => {
    try {
        const response = await axios.post("http://localhost:3000/api/login", data)
        return response?.data
    } catch (error) {
        console.log(error)
    }
}


const useLogin = () => {
    return useMutation({
        mutationFn: loginApi,
        mutationKey: ['login'],
        onSuccess: (data) => {
            if (data) {
                localStorage.setItem('token', data.token)
                window.location.href = '/home'
            }
        }
    })
}

export default useLogin;