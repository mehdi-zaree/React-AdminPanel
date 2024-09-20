import {
    Button, Card, Input,
} from "@mui/material";
import {useForm} from "react-hook-form";
import useLogin from "../../api/auth/login.api.js";

function SignIn() {

    const {status  , mutate} = useLogin()

    const {register, handleSubmit} = useForm();

    // const [showPassword, setShowPassword] = React.useState(false);
    //
    // const handleClickShowPassword = () => setShowPassword((show) => !show);
    //
    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };
    //
    // const handleMouseUpPassword = (event) => {
    //     event.preventDefault();
    // };


    const loginHandler = values => {
        mutate(values)
    }


    return (

        <Card>
            <form onSubmit={handleSubmit(loginHandler)}>
                <Input {...register('email')} placeholder={"User Email"}/>
                <Input {...register('password')} placeholder={"User Password"}/>
                <Button type={"submit"}>
                    Sign in
                </Button>
            </form>
        </Card>);
}

export default SignIn;
