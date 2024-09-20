import React from 'react';
import {Box, Card, CardContent, CardHeader, Divider, Typography} from "@mui/material";
import Chart from "react-apexcharts";
import {AccessTimeFilled, AccessTimeRounded} from "@mui/icons-material";

function StatisticChart({ color, chart, title, description, footer }) {
    return (
        <>
            <Card sx={{borderRadius:'12px',width:'100%',paddingX:'12px'}}>
                <Box sx={{}} >
                    <Chart {...chart} width='100%' />
                    <Typography sx={{fontWeight:'bold'}} level='h4'>{title}</Typography>
                    <Typography>{description}</Typography>
                </Box>
                <Divider/>
                <CardContent sx={{display:'flex',gap:1}}>
                    <AccessTimeFilled sx={{color:'gray'}}/>
                    <Typography>{footer}</Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default StatisticChart;
