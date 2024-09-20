import React from 'react';
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

function AuthLayout({darkTheme}) {
    return (
        <>
            <Box sx={{bgcolor: darkTheme.palette.mode ==='dark'? 'primary.bgDark':'white'}}>
                <Outlet/>
            </Box>
        </>
    );
}

export default AuthLayout;
