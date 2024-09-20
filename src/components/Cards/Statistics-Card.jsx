import {Box, Card, CardContent, CardHeader, Divider, Typography} from "@mui/material";


// eslint-disable-next-line react/prop-types
function StatisticsCard({footerColor,footerValue,title,footerLabel,value,Icon}) {
    return (
        <Card sx={{ width: "100%",height:'140px',borderRadius:'12px',boxShadow:'md' }}>
            <CardContent>
                <Box sx={{ width:'100%',display:'flex', justifyContent:'space-between' }}>
                    <Box sx={{width:'50px',height:'50px',bgcolor:'primary.bgDark',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'10px'}}>
                        {Icon}
                    </Box>
                    <Box sx={{display: 'flex', flexDirection:'column',justifyContent:'space-between',alignItems:'end'}}>
                        <Typography sx={{}}>
                            {title}
                        </Typography>
                        <Typography level='h3' sx={{fontSize:'24px',fontWeight:'bold'}}>
                            {value}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Divider sx={{width:'100%'}}/>
                <Box sx={{px:2,display:'flex',my:1,gap:1}}>
                    <Typography sx={{color:footerColor,fontWeight:'bolder',fontSize:'16px',}}>
                        {footerValue}
                    </Typography>
                    <Typography>
                        {footerLabel}
                    </Typography>
                </Box>
        </Card>
    );
}

export default StatisticsCard;


