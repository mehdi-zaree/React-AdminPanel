import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const notify = (message) => {
  toast(message);
};
const registerApi = async (data) => {
  try {
    const response = await axios.post(
      "https://inaweb.ir/api/register",
      data
    );

    if (response.status === 200 || response.status === 201) {
      localStorage.setItem("token", response.data?.token);
      toast.success("success");
      location.href = "/home";
    }
    return response.data;
  } catch (error) {
    console.error(error);
    if (error) {
      if (error.status === 500) {
        notify("Account already exists!");
      }
    }
  }
};

const useRegister = () => {
  return useMutation({
    mutationFn: registerApi,
    mutationKey: ["register"],
  });
};

export default useRegister;
