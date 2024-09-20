import React from 'react';
import {Avatar, Box, Card, Divider, List, ListItem, Switch, Tab, Tabs, Tooltip, Typography} from "@mui/material";
import {
    EditRounded,
    FavoriteBorderRounded,
    LocalPhoneRounded,
    PersonRounded
} from "@mui/icons-material";
import ProfileMessages from "../../components/Profile Messages/index.jsx";
import platformSettingsData from "../../data/platform-settings-data.js";
import conversationsData from "../../data/conversations-data.js";
import ProjectsData from "../../data/projects-data.js";
import Grid from "@mui/material/Grid2";
import ProfileProjects from "../../components/ProfileProjects/index.jsx";


function Profile() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <Box sx={{my:'30px'}}>
                <Box sx={{width:"100%",height:'300px',background:'black url(/img/background-image.png) no-repeat',backgroundSize:'cover',backgroundPosition:'center center',borderRadius:'16px'}}>
                </Box>
                <Card sx={{width:'98%',mx:'auto',borderRadius:'12px',transform:'translateY(-100px)',padding:'16px'}}>
                    {/*header*/}
                    <Box sx={{display:'flex',justifyContent:'space-between',flexDirection:{xs:'column',sm:'row'},alignItems:'flex-start',gap:2}}>
                        <Box sx={{display:'flex',gap:4}}>
                            <Avatar src={'/img/bruce-mars.jpeg'} variant="rounded" sx={{width:'72px',height:'72px',borderRadius:'8px'}}/>
                            <Box>
                                <Typography sx={{textTransform:'capitalize',fontSize:'24px',fontWeight:'bold'}}>
                                    Richard Davis
                                </Typography>
                                <Typography sx={{textTransform:'capitalize',color:'gray'}}>
                                    CEO / co-Founder
                                </Typography>
                            </Box>
                        </Box>
                        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" sx={{mx:{xs:'auto',sm:'0'}}}>
                            <Tab icon={<LocalPhoneRounded />} sx={{borderRadius:'16px'}} aria-label="phone" />
                            <Tab icon={<FavoriteBorderRounded/>} sx={{borderRadius:'16px'}} aria-label="favorite" />
                            <Tab icon={<PersonRounded />} sx={{borderRadius:'16px'}}  aria-label="person" />
                        </Tabs>
                    </Box>
                {/*body*/}
                    <Box sx={{display:'flex',my:4,flexDirection:{xs:'column',md:'row'},gap:2}}>
                        <Box sx={{width:{xs:'100%',md:'33%'},padding:'16px'}}>
                            <Typography level={'h2'} sx={{fontSize:'16px',fontWeight:'bold'}}>
                                Platform settings
                            </Typography>
                            {platformSettingsData.map((list,index)=>{
                                return(
                                    <List>
                                        <Typography sx={{textTransform:'uppercase',fontSize:'12px',fontWeight:'bold',color:'#7499ba'}}>
                                            {list.title}
                                        </Typography>
                                        {list.options.map((listItem,index)=>{
                                            return(
                                                <ListItem>
                                                    <Switch checked={listItem.checked}/>
                                                    <Typography sx={{fontSize:'14px',color:'#7499ba'}}>
                                                        {listItem.label}
                                                    </Typography>
                                                </ListItem>
                                            )
                                        })}

                                    </List>
                                )
                            })}
                        </Box>
                        {/*2nd box*/}
                        <Box sx={{width:{xs:'100%',md:'33%'},padding:'16px',display:'flex',flexDirection:'column',gap:2}}>
                            <Box sx={{display:'flex',justifyContent:'space-between',}}>
                                <Typography level={'h2'} sx={{fontSize:'16px',fontWeight:'bold'}}>
                                    Profile information
                                </Typography>
                                <Tooltip title={'Edit'} placement={'top'}>
                                    <EditRounded />
                                </Tooltip>
                            </Box>
                            <Typography sx={{fontSize:'14px',color:"#7499ba"}}>
                                Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                            </Typography>
                            <Divider/>
                            <List>
                                <ListItem sx={{display:'flex',gap:2}}>
                                    <Typography sx={{textTransform:'capitalize',display:'flex',fontSize:'14px',fontWeight:'bold'}}>
                                        Full Name:
                                    </Typography>
                                    <Typography sx={{fontSize:'14px',color:'#7499ba'}}>
                                        Mehdi Zarei
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{display:'flex',gap:2}}   >
                                    <Typography sx={{textTransform:'capitalize',display:'flex',fontSize:'14px',fontWeight:'bold'}}>
                                        Mobile:
                                    </Typography>
                                    <Typography sx={{fontSize:'14px',color:'#7499ba'}}>
                                       +989366334236
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{display:'flex',gap:2}}>
                                    <Typography sx={{textTransform:'capitalize',display:'flex',fontSize:'14px',fontWeight:'bold'}}>
                                        Email:
                                    </Typography>
                                    <Typography sx={{fontSize:'14px',color:'#7499ba'}}>
                                        mahdizarei22019@gmail.com
                                    </Typography>
                                </ListItem>
                                <ListItem sx={{display:'flex',gap:2}}>
                                    <Typography sx={{textTransform:'capitalize',display:'flex',fontSize:'14px',fontWeight:'bold'}}>
                                        Location:
                                    </Typography>
                                    <Typography sx={{fontSize:'14px',color:'#7499ba'}}>
                                       Iran, Karaj
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <Box sx={{width:{xs:'100%',md:'33%'},padding:'16px'}}>
                            <Typography level={'h2'} sx={{fontSize:'16px',fontWeight:'bold'}}>
                                Platform settings
                            </Typography>
                            <Box>
                                {conversationsData.map((message,index)=>{
                                    return(
                                        <ProfileMessages
                                            imageSrc={message.img}
                                            messageSender={message.name}
                                            messageContent={message.message}
                                        />
                                    )
                                })}
                            </Box>
                        </Box>
                    </Box>
                {/*    projects*/}
                    <Box sx={{display:'flex',flexDirection:'column',gap:1,padding:'16px'}}>
                        <Typography variant='h6' sx={{fontSize:'18px'}}>
                            Projects
                        </Typography>
                        <Typography sx={{fontSize:'14px',color:'gray'}}>
                            Architects design houses
                        </Typography>
                        <Grid container spacing={6} columns={{xs:4,lg:8,xl:12}} sx={{width:'100%'}}>
                            {ProjectsData.map((project,index)=>{
                                return(
                                    <Grid Item  key={index} size={{xs:12,lg:4,xl:3}}>
                                        <ProfileProjects project={project}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Card>
            </Box>
        </>
    );
}

export default Profile;
