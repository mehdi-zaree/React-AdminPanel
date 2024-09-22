import React, {useState} from 'react';
import {Alert, Box, Button, Card, Collapse, IconButton, Stack, Typography} from "@mui/material";
import {LockClosedIcon} from "@heroicons/react/16/solid/index.js";
import {CloseRounded} from "@mui/icons-material";

function Notifications(props) {
    const [alerts,setAlerts]= useState([
        {
            severity : 'success',
            open: true,
        },
        {
            severity : 'info',
            open: true,
        },
        {
            severity : 'warning',
            open: true,
        },
        {
            severity : 'error',
            open: true,
        },
    ])
    const [alertsWithIcon,setAlertsWithIcon]= useState([
        {
            severity : 'success',
            open: true,
        },
        {
            severity : 'info',
            open: true,
        },
        {
            severity : 'warning',
            open: true,
        },
        {
            severity : 'error',
            open: true,
        },
    ])
    return (
       <Box sx={{display:'flex',flexDirection:'column',gap:5,my:12}}>
           <Card sx={{padding:'16px',width:{xs:"100",md:"50%"},marginX:{xs:0,md:'auto'},borderRadius:'8px'}}>
           <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>
               Alerts
           </Typography>
               <Stack spacing={2} sx={{mt:5}}>
                   {alerts.map((alert,index)=>{
                       return(
                           <Collapse  in={alert.open} key={index}>
                               <Alert icon={false} severity={alert.severity} onClose={()=> setAlerts([...alerts,alert.open = false])}>This is a success Alert.</Alert>
                           </Collapse>
                       )
                   })}
               </Stack>
           </Card>
           <Card sx={{padding:'16px',width:{xs:"100",md:"50%"},marginX:{xs:0,md:'auto'},borderRadius:'8px'}}>
               <Typography sx={{fontSize:'20px',fontWeight:'bold',textTransform:'capitalize'}}>
                   Alerts with icon
               </Typography>
               <Stack spacing={2} sx={{mt:5}}>
                   {alertsWithIcon.map((alert,index)=>{
                       return(
                           <Collapse in={alert.open} key={index}>
                               <Alert  severity={alert.severity} onClose={()=> setAlerts([...alerts,alert.open = false])}>This is a success Alert.</Alert>
                           </Collapse>
                       )
                   })}
               </Stack>
           </Card>
       </Box>
    );
}

export default Notifications;