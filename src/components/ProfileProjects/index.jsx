import React, {Fragment} from 'react';
import {Avatar, AvatarGroup, Box, Button, Tooltip, Typography} from "@mui/material";
function Index({project}) {
    return (
        <Box sx={{width:'100%',display:'flex',flexDirection:'column',gap:'10px'}}>
            <Avatar src={project.img} sx={{width:'100%',height:'200px',borderRadius:'12px'}} variant='rounded'/>
            <Typography variant='caption' sx={{color:'#7499ba',fontSize:'14px',fontWeight:'bold'}}>
                {project.tag}
            </Typography>
            <Typography variant='h4' sx={{fontWeight:'bold',fontSize:'20px'}}>
                {project.title}
            </Typography>
            <Typography sx={{fontSize:'14px',color:'#7499ba'}}>
                {project.description}
            </Typography>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Button variant='outlined' sx={{textTransform:'uppercase',fontWeight:'bold',border:2,borderRadius:'8px'}}>
                    view project
                </Button>
                <AvatarGroup>
                    {project?.members?.map((member,index)=>(
                        <Fragment key={index}>
                            <Tooltip title={member.name} placement='top'>
                                <Avatar src={member.img} sx={{width:'24px',height:'24px'}}/>
                            </Tooltip>
                        </Fragment>
                    ))}
                </AvatarGroup>
            </Box>
        </Box>
    );
}

export default Index;
