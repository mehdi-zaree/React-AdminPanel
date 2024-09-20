import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import Link from "@mui/material/Link";


function Notfound() {
    return (
        <>
            <Box sx={{
                width:'100%',
                height:'100vh',
                display:"flex",
                justifyContent:"center",
                alignContent:'center',
                transform:'translateX(-10%)',


            }}>
            <Box sx={{ position:'relative' ,width:'500px'}}>
                    <img src="/Ellipse%2033.svg" style={{
                        width: '100%',
                        position: 'absolute',
                        top:'25%',


                    }} alt=""/>
                    <img src="/Group.svg" alt="" style={{
                        width: '100%',
                        position: 'absolute',
                        top:'25%'


                    }}/>
                <Box sx={{
                    position: 'absolute',
                    left:'50%',
                    transform:'translateX(-50%)',
                    top:'5%',
                    display:'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    gap:1
                }}>
                    <Typography level='h1' sx={{fontSize:'30px'}}>
                        404-ERROR
                    </Typography>
                    <Typography>
                        Page Not Found
                    </Typography>
                    <Typography sx={{textAlign:'center'}}>
                        Your search has ventured beyond the known universe.
                    </Typography>
                   <Link href='/'>
                       <Button variant="outlined" color="inherit">
                           back to home
                       </Button>
                   </Link>
                </Box>
                </Box>
            </Box>
        </>
    );
}

export default Notfound;
