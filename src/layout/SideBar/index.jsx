import {useContext} from 'react';
import {
    Box, Card, IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import {Context} from "../../App.jsx";
import {
    AccountCircle,
    AppRegistrationRounded, CloseRounded,
    ErrorRounded,
    HomeRounded,
    LoginRounded,
    TableChart
} from "@mui/icons-material";
import {NavLink, useLocation} from "react-router-dom";


function Index() {
    const [theme, isOpen, setIsOpen, toggleDarkTheme] = useContext(Context);
    const location = useLocation();
    const pathName = location.pathname;


    return (
        <>
            <Card sx={{
                boxShadow:'0 2 0 .9px black',
                width: {xs: '60%', sm: '40%', md: '17%', lg: '15%'},
                height:'98%',
                position: 'fixed',
                left: {xs: isOpen ? '1%' : '-100%', lg: '1%'},
                top: '1%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '16px',
                transition: '.4s',
                borderRadius: '8px',
                zIndex: 999,
                bgcolor: theme === 'dark' ? '#121212' : 'white'
            }}>
                <Box >
                    <Typography level={"h1"} sx={{
                        fontWeight: 'bolder',
                        textTransform: 'uppercase'
                    }}>
                        MUI React
                    </Typography>
                    <IconButton sx={{ position:'absolute',right:1,top:1, display:{xs:'flex',lg:'none'}}} onClick={()=>setIsOpen(false)}>
                        <CloseRounded/>
                    </IconButton>
                </Box>
                <List sx={{
                    width: '90%',
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}>

                    <ListItemButton component={NavLink} to='/home' sx={{
                        borderRadius: '8px',
                        background: pathName === '/home' ? 'rgb(32,32,32)' : '',
                        color: pathName === '/home' ? 'white' : '#607d8d',
                        pointerEvents: pathName === '/home' ? 'none' : 'auto',
                    }}>
                        <ListItemIcon sx={{color: pathName === '/home' ? 'snow' : '#607d8d'}}>
                            <HomeRounded/>
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} sx={{
                            fontWeight: 'bold'
                        }}/>
                    </ListItemButton>
                    <ListItemButton component={NavLink} to='/profile' sx={{
                        borderRadius: '8px',
                        background: pathName === '/profile' ? 'rgb(32,32,32)' : '',
                        color: pathName === '/profile' ? 'white' : '#607d8d',
                        pointerEvents: pathName === '/profile' ? 'none' : 'auto',
                    }}>
                        <ListItemIcon sx={{color: pathName === '/profile' ? 'snow' : '#607d8d'}}>
                            <AccountCircle/>
                        </ListItemIcon>
                        <ListItemText primary={'Profile'} sx={{
                            fontWeight: 'bold'
                        }}/>
                    </ListItemButton>
                    <ListItemButton component={NavLink} to='/tables' sx={{
                        borderRadius: '8px',
                        background: pathName === '/tables' ? 'rgb(32,32,32)' : '',
                        color: pathName === '/tables' ? 'white' : '#607d8d',
                        pointerEvents: pathName === '/tables' ? 'none' : 'auto',
                    }}>
                        <ListItemIcon sx={{color: pathName === '/tables' ? 'snow' : '#607d8d'}}>
                            <TableChart/>
                        </ListItemIcon>
                        <ListItemText primary={'Tables'} sx={{
                            fontWeight: 'bold'
                        }}/>
                    </ListItemButton>
                    <ListItemButton component={NavLink} to='/notifications' sx={{
                        borderRadius: '8px',
                        background: pathName === '/notifications' ? 'rgb(32,32,32)' : '',
                        color: pathName === '/notifications' ? 'white' : '#607d8d',
                        pointerEvents: pathName === '/notifications' ? 'none' : 'auto',
                    }}>
                        <ListItemIcon sx={{color: pathName === '/notifications' ? 'snow' : '#607d8d'}}>
                            <ErrorRounded/>
                        </ListItemIcon>
                        <ListItemText primary={'Notifications'} sx={{
                            fontWeight: 'bold'
                        }}/>
                    </ListItemButton>
                    <ListSubheader sx={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>
                        auth pages
                    </ListSubheader>
                    <ListItemButton component={NavLink} to='/auth/signin' sx={{
                        borderRadius: '8px',
                        background: pathName === '/auth/signin' ? 'rgb(32,32,32)' : '',
                        color: pathName === '/auth/signin' ? 'white' : '#607d8d',
                        pointerEvents: pathName === '/auth/signin' ? 'none' : 'auto',
                    }}>
                        <ListItemIcon sx={{color: pathName === '/auth/signin' ? 'snow' : '#607d8d'}}>
                            <LoginRounded/>
                        </ListItemIcon>
                        <ListItemText primary={'Sign In'} sx={{
                            fontWeight: 'bold'
                        }}/>
                    </ListItemButton>
                    <ListItemButton component={NavLink} to='/auth/signup' sx={{
                        borderRadius: '8px',
                        background: pathName === '/auth/signup' ? 'rgb(32,32,32)' : '',
                        color: pathName === '/auth/signup' ? 'white' : '#607d8d',
                        pointerEvents: pathName === '/auth/signup' ? 'none' : 'auto',
                    }}>
                        <ListItemIcon sx={{color: pathName === '/auth/signup' ? 'snow' : '#607d8d'}}>
                            <AppRegistrationRounded/>
                        </ListItemIcon>
                        <ListItemText primary={'Sign Up'} sx={{
                            fontWeight: 'bold'
                        }}/>
                    </ListItemButton>
                </List>

            </Card>
        </>
    );
}

export default Index;
