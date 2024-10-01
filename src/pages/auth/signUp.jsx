import {useForm} from "react-hook-form";
import {
    Box,
    Button,
    FormControl, FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from "@mui/material";
import useRegister from "../../api/auth/register.api.js";
import {NavLink} from "react-router-dom";
import {VisibilityOffRounded, VisibilityRounded} from "@mui/icons-material";
import {useState} from "react";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const signUpSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters')
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
});

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    // const navigate = useNavigate();
    const {status , mutate  } = useRegister()

    const {register , handleSubmit,formState:{errors}} = useForm({
        resolver : zodResolver(signUpSchema)
    })

    const registerHandlerSubmit = (values) => {
        mutate(values)
    }
    return (
        <Box sx={{width:'100%',height:'100vh',display:'flex',padding:'32px',gap:4}}>
            <Box sx={{width:"40%",height:'100%',background:'url(/img/pattern.png) no-repeat center',display:{xs:'none',md:'flex'},backgroundSize:'cover',borderRadius:"24px"}}>
            </Box>
            <Box sx={{width:{xs:'100%',md:'60%'},height:'100%',display:'flex',flexDirection:'column',gap:4,justifyContent:'center'}}>
                <form style={{display:'flex',flexDirection:'column',gap:'32px',alignItems:'center',justifyContent:'center'}} onSubmit={handleSubmit(registerHandlerSubmit)}>
                    <Typography variant='h4' sx={{fontWeight:'bold'}}>
                        Sign Up
                    </Typography>
                    <Typography sx={{textTransform:'capitalize'}}>
                        Join our community
                    </Typography>
                    <Box sx={{display:'flex',flexDirection:'column',gap:1,justifyContent:'center',paddingX:'10px',alignItems:'center'}}>
                        <FormControl sx={{ m: 1, width: '100%' }} size='small' error={!!errors.email}>
                            <InputLabel htmlFor="component-outlined" >Email</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                label="Email"
                                {...register('email')}
                            />
                            {errors.email && (<FormHelperText error>{errors.email.message}</FormHelperText>)}

                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" size='small' error={!!errors.password}>
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
                            {errors.password && (<FormHelperText error>{errors.password.message}</FormHelperText>)}
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined" size='small' error={!!errors.confirmPassword}>
                            <InputLabel sx={{width:'150px',bgcolor:'white',textAlign:'center'}} htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-ConfirmPassword"
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
                                {...register('confirmPassword')}
                            />
                            {errors.confirmPassword && (<FormHelperText error>{errors.confirmPassword.message}</FormHelperText>)}
                        </FormControl>
                        <NavLink to='/#' style={{textDecoration:'none',color:'inherit'}}>
                            <Typography variant='subtitle1' sx={{width:'100%',paddingX:'10px'}}>
                                Forgot password ?
                            </Typography>
                        </NavLink>
                    </Box>
                    <Button type={"submit"} variant='contained' sx={{width:'200px'}}>
                        Sign Up
                    </Button>
                    <Box sx={{display:'flex',gap:1}}>
                        <Typography sx={{color:'#7799ba'}}> Registered?</Typography>
                        <NavLink to={'/auth/signin'} style={{textDecoration:'none',color:'inherit',fontWeight:'bold'}}>
                            Login
                        </NavLink>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}

export default SignUp;
