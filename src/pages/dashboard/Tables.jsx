import React from 'react';
import {
    Avatar, AvatarGroup,
    Box,
    Card, LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Tooltip,
    Typography
} from "@mui/material";
import projectsTableData from "../../data/projects-table-data.js";
import {MoreVert} from "@mui/icons-material";
import ProjectsTable from "../../components/tables/Projects-table.jsx";
import authorsTableData from "../../data/authors-table-data.js";
import ProjectsTableData from "../../data/projects-table-data.js";

function Tables() {
    return (
        <Box sx={{my:5}}>
            <Box>
                <Box sx={{width:'98%',bgcolor:'primary.main',height:'90px',borderRadius:'16px',mx:'auto',display:"flex",alignItems:'center', paddingX:'24px',boxShadow:5,transform:'translateY(70%)'}}>
                    <Typography variant='h3' sx={{textTransform:'capitalize',fontSize:'16px',color:'white',fontWeight:'bold'}}>
                        authors table
                    </Typography>
                </Box>
                <Card sx={{borderRadius:'10px'}}>
                    <Box sx={{mt:10}}>
                        <ProjectsTable
                            data={authorsTableData}
                            isEdit={true}
                            moreIcon={false}
                        />
                    </Box>
                </Card>
            </Box>
            <Box>
                <Box sx={{width:'98%',bgcolor:'primary.main',height:'90px',borderRadius:'16px',mx:'auto',display:"flex",alignItems:'center', paddingX:'24px',boxShadow:5,transform:'translateY(70%)'}}>
                    <Typography variant='h3' sx={{textTransform:'capitalize',fontSize:'16px',color:'white',fontWeight:'bold'}}>
                        projects table
                    </Typography>
                </Box>
                <Card sx={{borderRadius:'10px'}}>
                    <Box sx={{mt:10}}>
                        <ProjectsTable
                            data={ProjectsTableData}
                            isEdit={true}
                            moreIcon={true}
                        />
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}

export default Tables;
