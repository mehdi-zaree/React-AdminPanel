import useVerification from "../api/auth/verification.api.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../components/loading/loading.jsx";

function AuthMiddleware({ children }) {
  const { status } = useVerification();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "error") {
      navigate("/auth/signin");
    }
  }, [status, navigate]);

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "success") {
    return children;
  }

  return null;
}

export default AuthMiddleware;
