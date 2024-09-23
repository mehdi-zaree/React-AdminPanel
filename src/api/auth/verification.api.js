import instanceAxios from "../axiosinstance.js";
import { useQuery } from "@tanstack/react-query";

const verificationApi = async () => {
  try {
    const response = await instanceAxios.get("/verify");
    return response.data;
  } catch (error) {
    console.error("Error fetching verification data:", error);
  }
};

const useVerification = () => {
  return useQuery({
    queryFn: verificationApi,
    queryKey: ["verification"],
  });
};

export default useVerification;
