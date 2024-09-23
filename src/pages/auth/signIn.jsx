import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import useLogin from "../../api/auth/login.api.js";
import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Loading from "../../components/loading/loading.jsx";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const { status, mutate } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const loginHandler = (values) => {
    mutate(values);
  };

  if (status === "pending") return <Loading />;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        padding: "32px",
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit(loginHandler)}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Sign In
          </Typography>
          <Typography>Enter your email and password to Sign In.</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              paddingX: "8px",
              alignItems: "center",
            }}
          >
            <FormControl
              sx={{ m: 1, width: "100%" }}
              size="small"
              error={!!errors.email}
            >
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput
                id="component-outlined"
                label="Email"
                {...register("email")}
              />
              {errors?.email && (
                <FormHelperText error>{errors.email.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              error={!!errors.password}
              sx={{ m: 1, width: "100%" }}
              variant="outlined"
              size="small"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffRounded />
                      ) : (
                        <VisibilityRounded />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                {...register("password")}
              />
              {errors?.password && (
                <FormHelperText error>{errors.password.message}</FormHelperText>
              )}
            </FormControl>
            <NavLink
              to="#"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="subtitle1"
                sx={{ width: "100%", paddingX: "10px" }}
              >
                Forgot password ?
              </Typography>
            </NavLink>
          </Box>
          <Button type={"submit"} variant="contained" sx={{ width: "200px" }}>
            Sign in
          </Button>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ color: "#7799ba" }}>Not registered?</Typography>
            <NavLink
              to={"/auth/signup"}
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "bold",
              }}
            >
              Create account
            </NavLink>
          </Box>
        </form>
      </Box>
      <Box
        sx={{
          width: "40%",
          height: "100%",
          background: "url(/img/pattern.png) no-repeat center",
          backgroundSize: "cover",
          borderRadius: "24px",
          display: { xs: "none", md: "flex" },
        }}
      ></Box>
    </Box>
  );
}

export default SignIn;
