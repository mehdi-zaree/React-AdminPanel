import axiosinstance from "../axiosinstance.js";
import {useQuery} from "@tanstack/react-query";

const verificationApi = async () => {
    try {
        const response = await axiosinstance.get("/verification");
        return response.data;
    }catch (error) {
        console.log(error)
    }
}
const useVerification = () => {
    return useQuery({
        queryFn : verificationApi,
        queryKey : ['verification'],
    })
}


export default useVerification