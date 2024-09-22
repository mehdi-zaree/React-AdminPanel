import instanceAxios from "../axiosinstance.js";
import {useQuery} from "@tanstack/react-query";


const verificationApi = async () => {
    try {
        const response = await instanceAxios.get("/verification");
        return response.data; // مطمئن شو که این داده‌ها وجود دارند
    } catch (error) {
        console.error("Error fetching verification data:", error);
        throw new Error("Failed to fetch verification data"); // خطا را پرتاب کن
    }
};

const useVerification = () => {
    return useQuery({
        queryFn : verificationApi,
        queryKey : ['verification'],
    })
}


export default useVerification