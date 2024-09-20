import React from 'react';
import TopBar from "./TopBar/index.jsx";
import SideBar from "./SideBar/index.jsx";
import {Box} from "@mui/material";
import Footer from "./Footer/index.jsx";
import {Outlet} from "react-router-dom";

function RootLayout({darkTheme}) {
    return (
        <>
            <Box sx={{
                display:'flex',
                flexDirection: 'column',
                justifyItems:'space-between',
                paddingX:{xs:'10px',sm:'12px',lg:'12px'},
                marginLeft: {lg:'17%'},
            }}>
                <TopBar/>
                <Box>
                    <Outlet/>
                </Box>
                <SideBar/>
                <Footer/>
            </Box>
        </>
    );
}

export default RootLayout;
