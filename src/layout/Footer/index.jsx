import React from 'react';
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";
import Link from "@mui/material/Link";


function Index() {
    return (
       <>
           <Box sx={{px:2, display:'flex',flexDirection:{xs:'column',sm:'row'}, textDecoration:'none',alignItems:'center',justifyContent:'space-between',alignContent:'center',my:4}}>
               <Box sx={{display:'flex',gap:1}}>
                   <Typography sx={{fontSize:{xs:'10px',sm:'12'},color:'inherit'}}>
                       ©
                       2024,
                       made with courage by
                   </Typography>
                   <Link href="https://github.com/mehdi-zaree/admin-panel-react" target='_blank' sx={{textDecoration:'none' ,fontWeight:'bold',fontSize:{xs:'10px',sm:'12px'}}}>Mehdi Zarei</Link>
                   <Typography sx={{fontSize:{xs:'10px',sm:'12'}}}> for a better web</Typography>
               </Box>
               <Box >
                   <List sx={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
                       <ListItem component={Link} target='_blank'  href='https://github.com/mehdi-zaree'>
                            <Typography sx={{fontSize:{xs:'12px',sm:'16px'}, width:'50px',textAlign:'center'}}>GitHub</Typography>
                       </ListItem>
                       <ListItem component={Link} target='_blank'   href='https://linkedin.com/in/mehdi-zri'>
                           <Typography sx={{fontSize:{xs:'12px',sm:'16px'}, width:'50px',textAlign:'center'}}>LinkedIn</Typography>
                       </ListItem>
                       <ListItem component={Link} target='_blank'   href='https://instagram.com/mti_zri.dev'>
                           <Typography sx={{fontSize:{xs:'12px',sm:'16px'}, width:'50px',textAlign:'center'}}>Instagram</Typography>
                       </ListItem>
                       <ListItem component={Link}   href='mailto:mahdizarei22019@gmail.com'>
                           <Typography sx={{fontSize:{xs:'12px',sm:'16px'}, width:'50px',textAlign:'center'}}>E-mail</Typography>
                       </ListItem>
                   </List>

               </Box>
           </Box>
       </>
    );
}

export default Index;
