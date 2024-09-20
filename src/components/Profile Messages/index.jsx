import React from 'react';
import {Avatar, Box, Button, Typography} from "@mui/material";

function Index({imageSrc,messageSender,messageContent}) {
    return (
        <Box sx={{display:'flex',justifyContent:'space-between',alignContent:'center',my:2}}>
            <Box sx={{display:'flex',gap:3,alignItems:'flex-end'}}>
                <Avatar variant='rounded' src={imageSrc} sx={{width:'52px',height:'52px',borderRadius:'8px'}}/>
                <Box>
                    <Typography>
                        {messageSender}
                    </Typography>
                    <Typography sx={{fontSize:'14px',color:'#7499ba'}}>
                        {messageContent}
                    </Typography>
                </Box>
            </Box>
            <Button variant='text' sx={{fontSize:'12px',fontWeight:"bold"}}>
                Replay
            </Button>
        </Box>
    );
}

export default Index;
