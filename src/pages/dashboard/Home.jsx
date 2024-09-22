import React from "react";
import StatisticsCard from "../../components/Cards/Statistics-Card.jsx";
import Grid from '@mui/material/Grid2';
import StatisticsCardsData from "../../data/statistics-cards-data.js";
import statisticsChartsData from "../../data/statistics-charts-data.js";
import StatisticChart from "../../components/Charts/Statistic-Chart.jsx";

import ProjectsTable from "../../components/tables/Projects-table.jsx";
import {Box, Button, Card, CardContent, CardHeader, Typography} from "@mui/material";
import {ArrowUpwardRounded, CheckCircleRounded, MoreVert} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ordersOverviewData from "../../data/orders-overview-data.js";
import projectsTableData from "../../data/projects-table-data.js";

function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Grid sx={{my:8}} container spacing={{ xs: 2, md: 3 }} columns={{xs:4,sm:8,md:24}}>
                {StatisticsCardsData.map((item,index)=>{
                    return(
                        <Grid Item size={{xs: 4,md: 6}}>
                                <StatisticsCard
                                    key={index}
                                    Icon={<item.icon style={{color:'white',width:'30px',height:'30px'}}/>}
                                    value={item.value}
                                    title={item.title}
                                    footerLabel={item.footer.label}
                                    footerColor={item.footer.color}
                                    footerValue={item.footer.value}
                                />
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container spacing={2} sx={{justifyContent:'center'}} columns={{xs:3,sm:9,md:12}}>
                {statisticsChartsData.map((props,index)=>{
                    return(
                        <Grid Item size={{xs:4}}>
                            <StatisticChart {...props} key={index}/>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container spacing={2} sx={{justifyContent:'center',my:4}} columns={{xs:3,md:12}} >
                <Grid Item size={{xs:12,sm:8}}>
                    <Card sx={{borderRadius:'12px',display:'flex',flexDirection:'column'}}>
                        <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',paddingX:'32px',paddingY:'32px'}}>
                            <Box>
                                <Typography level='h3' sx={{fontWeight: 'bold'}}>
                                    Projects
                                </Typography>
                                <Typography sx={{
                                    display: 'flex',
                                    gap: 1,
                                    color: 'gray',
                                    fontSize: '14px',
                                    alignItems: 'center'
                                }}>
                                    <CheckCircleRounded sx={{width: '14px'}}/>
                                    <Typography sx={{fontWeight: "bold", fontSize: '14px'}}>
                                        30 done
                                    </Typography>
                                    this month
                                </Typography>
                            </Box>
                            <Box>
                                <Button
                                    id="demo-positioned-button"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <MoreVert/>
                                </Button>
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}


                                >
                                    <MenuItem onClick={handleClose}>setting</MenuItem>
                                    <MenuItem onClick={handleClose}>more settings</MenuItem>
                                    <MenuItem onClick={handleClose}>somewhere else</MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                        <ProjectsTable data={projectsTableData} isEdit={false} moreIcon={false}/>
                    </Card>
                </Grid>
                <Grid Item size={{xs:12,sm:4}} >
                    <Card sx={{borderRadius:'8px',height:'100%'}} >
                        <Box sx={{display:'flex',flexDirection:'column', gap:1,padding:'16px',}}>
                            <Typography level={'h4'} sx={{fontWeight:'bold'}}>
                                Orders Overview
                            </Typography>
                            <Typography sx={{color:'#7499ba',display:'flex',gap:1}}>
                                <ArrowUpwardRounded sx={{color:'green'}}/>
                                <Typography sx={{fontWeight:'bold',color:'inherit'}}>24%</Typography>
                                this month
                            </Typography>
                        </Box>
                        <CardContent>
                            {ordersOverviewData.map((item,index)=>{
                                return(
                                    <>
                                        <Box key={index} sx={{display:'flex', alignItems:'flex-start',gap:3,marginY:'16px'}}>
                                            <item.icon style={{width:'24px',color:'#7499ba'}}/>
                                            <Box>
                                                <Typography sx={{fontSize:'14px',color:'inherit'}}>
                                                    {item.title}
                                                </Typography>
                                                <Typography sx={{fontSize:'12px',color:'#7499ba'}}>
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                        </Box></>
                                )
                            })}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>
    );
}

export default Home;
