import "./skills.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import React from "react";
import BugReportIcon from '@mui/icons-material/BugReport';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';


export default function Skills() {

    const cardProblemSolving = (
        <React.Fragment>
          <CardContent id="card-content-problem" sx={{ color: 'rgba(255, 255, 255, 0.6)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', paddingTop: '90px', paddingBottom: '100px' }}>
            <Typography variant="h5" component="div" sx={{ mb: 1.5, textAlign: 'center', }}>
                Problem-Solving
            </Typography>  
            <BugReportIcon sx={{  fontSize: '5rem' }}/>
          </CardContent>
        </React.Fragment>
      );

      const cardTeamwork = (
        <React.Fragment>
          <CardContent id="card-content-teamwork" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px' }}>
            <Typography variant="h5" component="div" sx={{ mb: 1.5, textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}>
              Teamwork
            </Typography>
            <GroupsIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '5rem' }}/>
          </CardContent>
          
        </React.Fragment>
      );
      
      const cardAdaptability = (
        <React.Fragment>
          <CardContent id="card-content-adapt" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px' }}>
            <Typography variant="h5" component="div" sx={{ mb: 1.5, textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}> 
              Adaptability
            </Typography>
            <PublishedWithChangesIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '5rem' }}/>
          </CardContent>
        </React.Fragment>
      );

    return (
        <section className="skills">
            <h1>Soft skills</h1><br />
            <div className="skills-cards">
                <Box sx={{ width: 350, height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card sx={{ width: 300, height: 300, backgroundColor: '#12121280' }} variant="outlined">{cardProblemSolving}</Card>
                </Box>
                <Box sx={{ width: 350, height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{ width: 300, height: 300, backgroundColor: '#12121280' }} variant="outlined">{cardTeamwork}</Card>
                </Box>
                <Box sx={{ width: 350, height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{ width: 300, height: 300, backgroundColor: '#12121280' }} variant="outlined">{cardAdaptability}</Card>
                </Box>
            </div>
            
            
        </section>
    )
}