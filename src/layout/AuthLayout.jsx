import React from 'react';
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AuthLayout({darkTheme}) {
    return (
        <>
            <Box sx={{bgcolor: darkTheme.palette.mode ==='dark'? 'primary.bgDark':'white'}}>
                <ToastContainer theme='dark' position='bottom-left'/>
                <Outlet/>
            </Box>
        </>
    );
}

export default AuthLayout;
