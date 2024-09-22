import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography,
} from "@mui/material";
import {useForm} from "react-hook-form";
import useLogin from "../../api/auth/login.api.js";
import {VisibilityOffRounded, VisibilityRounded} from "@mui/icons-material";
import {useState} from "react";
import {NavLink} from "react-router-dom";
function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const {status  , mutate} = useLogin()
    const {register, handleSubmit} = useForm();

    const loginHandler = values => {
        mutate(values)
    }


    return (
        <Box sx={{width:'100%',height:'100vh',display:'flex',padding:'32px',gap:4}}>

            <Box sx={{width:'60%',height:'100%',display:'flex',flexDirection:'column',gap:4,justifyContent:'center'}}>
                <form style={{display:'flex',flexDirection:'column',gap:'32px',alignItems:'center',justifyContent:'center'}} onSubmit={handleSubmit(loginHandler)}>
                    <Typography variant='h4' sx={{fontWeight:'bold'}}>
                        Sign In
                    </Typography>
                    <Typography>
                        Enter your email and password to Sign In.
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'column',gap:1,justifyContent:'center',paddingX:'8px'}}>
                        <FormControl sx={{ m: 1, width: '50ch' }} size='small'>
                            <InputLabel htmlFor="component-outlined" >Email</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Email"
                                {...register('email')}

                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined" size='small'>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                {...register('password')}
                            />
                        </FormControl>
                        <NavLink to='/#' style={{textDecoration:'none',color:'inherit'}}>
                            <Typography variant='subtitle1' sx={{width:'90%',paddingX:'10px'}}>
                                Forgot password ?
                            </Typography>
                        </NavLink>
                    </Box>
                    <Button type={"submit"} variant='contained' sx={{width:'50ch'}}>
                        Sign in
                    </Button>
                    <Box sx={{display:'flex',gap:1}}>
                        <Typography sx={{color:'#7799ba'}}>Not registered?</Typography>
                        <NavLink to={'/auth/signup'} style={{textDecoration:'none',color:'inherit',fontWeight:'bold'}}>
                            Create account
                        </NavLink>
                    </Box>
                </form>
            </Box>
            <Box sx={{width:"40%",height:'100%',background:'url(/img/pattern.png) no-repeat center',backgroundSize:'cover',borderRadius:"24px"}}>
            </Box>
        </Box>
    )
}

export default SignIn;
