import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";


const notify = (message)=>{
    toast(message)
}
const registerApi = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/api/register' , data);
        return response.data;
        notify('Account created successfully, please login.');
    }catch (error) {
        console.error(error)
        if(error){
            if(error.status === 500){
                notify('Account already exists!')
            }
        }
    }
}


const useRegister = () => {
    return useMutation({
        mutationFn : registerApi,
        mutationKey : ['register'],
    })
}

export default useRegister;



