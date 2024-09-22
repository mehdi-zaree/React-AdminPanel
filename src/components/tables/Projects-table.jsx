import {
    Avatar, AvatarGroup,
    Box,
    Button, IconButton, LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Tooltip,
    Typography
} from "@mui/material";
import { MoreVert} from "@mui/icons-material";


function ProjectsTable({data,moreIcon,isEdit}) {

    return (
            <TableContainer>
                <Table size="medium" aria-label="simple table" sx={{width: '100%',overflowX: 'auto'}}>
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{fontSize: '12px', color: 'gray', fontWeight: 'bold',textTransform:'uppercase'}}>{moreIcon?'companies':'author'}</TableCell>
                            <TableCell sx={{fontSize: '12px', color: 'gray', fontWeight: 'bold',textTransform:'uppercase'}}>{moreIcon?'members':'function'}</TableCell>
                            <TableCell sx={{fontSize: '12px', color: 'gray', fontWeight: 'bold',textTransform:'uppercase'}}>{moreIcon?'budget':'status'}</TableCell>
                            <TableCell sx={{fontSize: '12px', color: 'gray', fontWeight: 'bold',textTransform:'uppercase'}}>{moreIcon?'completion':'employed'}</TableCell>
                            <TableCell sx={{fontSize: '12px', color: 'gray', fontWeight: 'bold',textTransform:'uppercase'}}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell >
                                        <Box sx={{display:'flex',flexDirection:{xs:"column",sm:'row'},alignItems:{xs:'center'},gap:1,}}>
                                            <Avatar src={item.img} sx={{height:'32px',width:'32px'}}/>
                                            <Typography sx={{textAlign:"center"}}>{item.name}</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell  size='small' >
                                        {item.members?
                                            <AvatarGroup max={4}  sx={{display:'flex',justifyContent:"flex-end",}}>
                                            {item.members.map((member,index)=>{
                                                return(
                                                    <Tooltip key={index} title={member.name} placement="top">
                                                        <Avatar sx={{width:'22px',height:'22px'}} src={member.img} alt={member.name}/>
                                                    </Tooltip>
                                                )
                                            })}
                                        </AvatarGroup>:
                                            <Box sx={{height:'50%',my:0}}>
                                            <Typography sx={{color:'gray',fontWeight:'bold',fontSize:'12px'}}>
                                                {item.job[0]}
                                            </Typography>
                                            <Typography sx={{color:'gray',fontSize:'12px'}}>
                                                {item.job[1]}
                                            </Typography>
                                        </Box>}
                                    </TableCell>
                                    <TableCell sx={{}}>
                                        {item.budget?<Typography sx={{fontSize:'12px',color:'gray'}}>{item.budget}</Typography>:<Typography sx={{textTransform:'uppercase',backgroundColor:!item.online?'rgb(93,118,130)':'rgb(81,171,85)',textAlign:'center',borderRadius:'8px',color:'snow',width:'100px',fontWeight:'bold'}}>{item.online?'online':'offline'}</Typography>}
                                    </TableCell>
                                    <TableCell>
                                        {item.completion?<Box>
                                            <Typography sx={{fontSize:'12px',color:'#7499ba',fontWeight:'bold'}}>{item.completion}%</Typography>
                                            <LinearProgress variant="determinate" value={item.completion} color={item.completion===100?'success':'info'}/>
                                        </Box>:<Typography>{item.date}</Typography>}
                                    </TableCell>
                                    {isEdit? <TableCell>
                                        {moreIcon?<IconButton><MoreVert/></IconButton>:<Button variant='text' color="primary.main">EDIT</Button>}
                                    </TableCell>:null}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

    );
}

export default ProjectsTable;
