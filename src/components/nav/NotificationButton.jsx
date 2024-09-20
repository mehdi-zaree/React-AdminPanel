import React, {useState} from 'react';
import {Avatar, Box, IconButton, Typography} from "@mui/material";
import {AccessTimeFilled, CreditCard, NotificationsOutlined} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function NotificationButton() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="icon"
                onClick={handleClick}
            >
                <NotificationsOutlined color='white'/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} size='xl' sx={{borderRadius: '6px', display: 'flex', gap: 1}}>
                    <Avatar src={'/img/notifMenu.jpg'} sx={{width:'30px',height:"30px"}}/>
                    <Box>
                        <Box sx={{display: 'flex', gap: 1}}>
                            <Typography level={'h3'} sx={{fontWeight: 'bold'}}>
                                New message
                            </Typography>
                            <Typography>
                                from laur
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                            <AccessTimeFilled sx={{fontSize: '14px', color: 'gray'}}/>
                            <Typography sx={{fontSize: '12px', color: 'gray'}}>
                                13 minutes ago
                            </Typography>
                        </Box>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleClose} size='xl' sx={{borderRadius: '6px', display: 'flex', gap: 1}}>
                    <Avatar src={'/img/logo-spotify.svg'} sx={{width:'30px',height:"30px"}}/>
                    <Box>
                        <Box sx={{display: 'flex', gap: 1}}>
                            <Typography level={'h3'} sx={{fontWeight: 'bold'}}>
                                New album
                            </Typography>
                            <Typography>
                               by travis scott
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                            <AccessTimeFilled sx={{fontSize: '14px', color: 'gray'}}/>
                            <Typography sx={{fontSize: '12px', color: 'gray'}}>
                                1 day ago
                            </Typography>
                        </Box>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleClose} size='xl' sx={{borderRadius: '6px', display: 'flex', gap: 1}}>
                   <Box  sx={{width:'40px',height:"40px",bgcolor:'#29363d',color:'snow',fontSize:'6px',borderRadius:'50%',display:'flex',placeContent:'center',alignItems:'center'}}>
                       <CreditCard sx={{color:'snow'}}/>
                   </Box>
                    <Box>
                        <Box sx={{display: 'flex', gap: 1}}>
                            <Typography>
                               Payment successfully completed
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                            <AccessTimeFilled sx={{fontSize: '14px', color: 'gray'}}/>
                            <Typography sx={{fontSize: '12px', color: 'gray'}}>
                                2 day ago
                            </Typography>
                        </Box>
                    </Box>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default NotificationButton;
