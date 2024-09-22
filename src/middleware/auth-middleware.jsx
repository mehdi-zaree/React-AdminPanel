import useVerification from "../api/auth/verification.api.js";
import {useNavigate} from "react-router-dom";
import Loading from "../components/loading/loading.jsx";

function AuthMiddleware(children) {
    const {status} = useVerification()
    console.log(status)
    const navigate = useNavigate();
    if (status === 'error') {
        return navigate('/auth/signin');
    }

    if (status === "pending") {
        return <Loading/>
    }

    if (status === "success") {
        return children
    }

}

export default AuthMiddleware;