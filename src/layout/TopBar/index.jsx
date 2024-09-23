import  {useContext, useState} from 'react';
import * as React from 'react';
import {Avatar, Box, Button, IconButton, TextField, Typography} from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {
    DarkModeOutlined,
    LightModeOutlined,
    MenuRounded,
} from "@mui/icons-material";
import {Context} from "../../App.jsx";

import {useLocation} from "react-router-dom";

import ProfileButton from "../../components/nav/profileButton.jsx";
import NotificationButton from "../../components/nav/NotificationButton.jsx";


function Index() {


    const location = useLocation();
    const pathName = location.pathname;
    const currentPath = location.pathname.replace(/\//g, "");
    const [theme,isOpen,setIsOpen,toggleDarkTheme] = useContext(Context)
    return (
       <Box>
           <Box sx={{
               width:'100%',
                display:'flex',
               flexDirection:{xs:'column-reverse',sm:'row'},
               justifyContent:{sm:'space-between'},
           }}>
               <Box sx={{
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
               }}>
                   <Breadcrumbs aria-label="breadcrumb">
                       <Link underline="hover" color="inherit" href="/">
                           Dashboard
                       </Link>
                       <Link
                           underline="hover"
                           color="inherit"
                           href={pathName}
                           sx={{textTransform:'capitalize'}}
                       >
                           {currentPath}
                       </Link>
                   </Breadcrumbs>
                   <Typography
                       level='h6'
                       sx={{
                           fontWeight:'bold',
                           textTransform:'capitalize'
                       }}
                   >
                       {currentPath}
                   </Typography>
               </Box>
               <Box sx={{
                   paddingY: '16px',
                   display: 'flex',
                   gap: '5px'
               }}>
                   <TextField id="outlined-basic" label="Search" variant="outlined" size='small' sx={{width: '200px'}}
                              color='black'/>
                   <IconButton sx={{
                       display: {lg: 'none'}
                   }} aria-label='menu' onClick={() => setIsOpen(!isOpen)}>
                       <MenuRounded/>
                   </IconButton>
                   <IconButton aria-label='menu' onClick={toggleDarkTheme}>
                       {theme === 'dark' ? <LightModeOutlined/> : <DarkModeOutlined/>}
                   </IconButton>
                   <NotificationButton/>
                   <ProfileButton/>

               </Box>

           </Box>
       </Box>
    );
}

export default Index;
