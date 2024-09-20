import axios from "axios";
import {useMutation} from "@tanstack/react-query";

const registerApi = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/api/register' , data);
        return response.data;
    }catch (error) {
        console.error(error)
    }
}


const useRegister = () => {
    return useMutation({
        mutationFn : registerApi,
        mutationKey : ['register'],
    })
}

export default useRegister;



