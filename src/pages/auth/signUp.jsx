import {useForm} from "react-hook-form";
import {Button, Card, Input} from "@mui/material";
import useRegister from "../../api/auth/register.api.js";
import {useNavigate} from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();
    const {status , mutate  } = useRegister()

    const {register , handleSubmit} = useForm()

    const registerHandlerSubmit = (values) => {
        mutate(values)
    }

    if (status === "success") {
        navigate('/auth/signin')
    }

    return (
        <section className="w-screen h-screen flex items-center justify-center">
            <Card>
                <form onSubmit={handleSubmit(registerHandlerSubmit)} className={'w-[500px] h-[500px] rounded'}>
                    <Input {...register('email')} placeholder={"User Email"}/>
                    <Input {...register('password')} placeholder={"User Password"}/>
                    <Button type={"submit"}>
                        Sign Up
                    </Button>
                </form>
            </Card>
        </section>
    );
}

export default SignUp;
