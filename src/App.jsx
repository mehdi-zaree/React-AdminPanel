import './index.css'
import React, {createContext, useState} from "react";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/dashboard/Home.jsx";
import ProfilePage from "./pages/dashboard/Profile.jsx";
import NotificationsPage from "./pages/dashboard/Notifications.jsx";
import TablesPage from "./pages/dashboard/Tables.jsx";
import {Box} from "@mui/material";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Notfound from "./pages/Notfound.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import SignIn from "./pages/auth/signIn.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import SignUp from "./pages/auth/signUp.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AuthMiddleware from "./middleware/auth-middleware.jsx";

export const Context = createContext(undefined);
const queryClient = new QueryClient()

function App() {
    const [toggleDarkMode, setToggleDarkMode] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const toggleDarkTheme = () => {
        setToggleDarkMode(!toggleDarkMode)
    }
    const darkTheme = createTheme({
        palette: {
            mode: toggleDarkMode ? 'dark' : 'light',
            primary: {
                main: '#333',
                mainDark: '#f5f7f8',
                bg: '#f5f7f8',
                bgDark: 'rgb(32,32,32)'
            },
            secondary: {
                main: '#f48fb1',
            },
        },
    })
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AuthMiddleware><RootLayout/></AuthMiddleware>,
            errorElement: <Notfound/>,
            children: [
                {
                    path: '/home',
                    element: <Home/>,
                },
                {
                    path: '/profile',
                    element: <ProfilePage/>,
                },
                {
                    path: '/notifications',
                    element: <NotificationsPage/>,
                },
                {
                    path: '/tables',
                    element: <TablesPage/>,
                },

            ]
        },
        {
            path: '/auth',
            element: <AuthLayout darkTheme={darkTheme}/>,
            children: [
                {
                    path: '/auth/signin',
                    element: <SignIn/>,
                },
                {
                    path: '/auth/signup',
                    element: <SignUp/>,
                }
            ]
        },


    ])
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <QueryClientProvider client={queryClient}>
                    <CssBaseline/>
                    <Context.Provider value={[darkTheme.palette.mode, isOpen, setIsOpen, toggleDarkTheme]}>
                        <Box className={'app'} sx={{
                            height: '100%',
                            bgcolor: darkTheme.palette.mode === 'light' ? 'primary.bg' : 'primary.bgDark'
                        }}>
                            <Box sx={{
                                width: '100%',
                                transitionDuration: '.4s',
                                height: '100%',

                            }}>
                                <Box>
                                        <RouterProvider router={router}/>
                                </Box>
                            </Box>
                        </Box>
                    </Context.Provider>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    )
}

export default App
