
import {useMutation} from "@tanstack/react-query";
import instanceAxios from "../axiosinstance.js";
const loginApi = async (data) => {
    try {
        const response = await instanceAxios.post("/login", data)
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