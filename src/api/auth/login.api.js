
import {useMutation} from "@tanstack/react-query";
import instanceAxios from "../axiosinstance.js";
import {toast} from "react-toastify";

const notify = (message)=>{
    toast(message)
}

const loginApi = async (data) => {
    try {
        const response = await instanceAxios.post("/login", data)
        return response?.data
    } catch (error) {
        console.log(error)
        if (error){
            if ( error.status === 401){
                notify('Incorrect email or password');
            }
        }
    }
}


const useLogin = () => {
    return useMutation({
        mutationFn: loginApi,
        mutationKey: ['login'],
        onSuccess: (data) => {
            if (data) {
                localStorage.setItem('token', data.token)
                location.href = '/home'
            }
        }
    })
}

export default useLogin;