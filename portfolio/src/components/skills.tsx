import "./skills.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import React from "react";
import BugReportIcon from '@mui/icons-material/BugReport';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';


export default function Skills() {

    const cardProblemSolving = (
        <React.Fragment>
          <CardContent id="card-content-problem" sx={{ color: 'rgba(255, 255, 255, 0.6)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', paddingTop: '90px', paddingBottom: '100px' }}>
            <Typography variant="h6" component="div" sx={{ mb: 1.5, textAlign: 'center', }}>
                Problem-Solving
            </Typography>  
            <BugReportIcon sx={{  fontSize: '4rem' }}/>
          </CardContent>
        </React.Fragment>
      );

      const cardTeamwork = (
        <React.Fragment>
          <CardContent id="card-content-teamwork" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px' }}>
            <Typography variant="h6" component="div" sx={{ mb: 1.5, textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}>
              Teamwork
            </Typography>
            <GroupsIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '4rem' }}/>
          </CardContent>
          
        </React.Fragment>
      );
      
      const cardAdaptability = (
        <React.Fragment>
          <CardContent id="card-content-adapt" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px' }}>
            <Typography variant="h6" component="div" sx={{ mb: 1.5, textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}> 
              Adaptability
            </Typography>
            <PublishedWithChangesIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '4rem' }}/>
          </CardContent>
        </React.Fragment>
      );

      const cardCriticalThinking = (
        <React.Fragment>
          <CardContent id="card-content-critical" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px' }}>
            <Typography variant="h6" component="div" sx={{ mb: 1.5, textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}> 
              Critical Thinking
            </Typography>
            <PsychologyIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '4rem' }}/>
          </CardContent>
        </React.Fragment>
      );

      const cardLeadership = (
        <React.Fragment>
          <CardContent id="card-content-critical" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px' }}>
            <Typography variant="h6" component="div" sx={{ mb: 1.5, textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}> 
              Leadership
            </Typography>
            <ArrowOutwardIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '4rem' }}/>
          </CardContent>
        </React.Fragment>
      );

      const cardCreativity = (
        <React.Fragment>
          <CardContent id="card-content-critical" sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px' }}>
            <Typography variant="h6" component="div" sx={{ mb: 1.5, textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}> 
              Creativity
            </Typography>
            <EmojiObjectsIcon sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '4rem' }}/>
          </CardContent>
        </React.Fragment>
      );

    return (
        <section className="skills">
            <h1>Soft skills</h1><br />
            <div className="skills-cards-row">
                <Box className="skill-box" sx={{ width: '25%', height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card sx={{ width: 300, height: 300, backgroundColor: '#12121280' }} variant="outlined">{cardProblemSolving}</Card>
                </Box>
                <Box className="skill-box" sx={{ width: '25%', height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{ width: 300, height: 300, backgroundColor: '#12121280' }} variant="outlined">{cardTeamwork}</Card>
                </Box>
                <Box className="skill-box" sx={{ width: '25%', height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{ width: 300, height: 300, backgroundColor: '#12121280' }} variant="outlined">{cardAdaptability}</Card>
                </Box>
                
            </div>
            <div className="skills-cards-row">
                <Box className="skill-box" sx={{ width: '25%', height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{ width: 300, height: 300, backgroundColor: '#12121280' }} variant="outlined">{cardCriticalThinking}</Card>
                </Box>
                <Box className="skill-box" sx={{ width: '25%', height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{ width: 300, height: 300, backgroundColor: '#12121280' }} variant="outlined">{cardLeadership}</Card>
                </Box>
                <Box className="skill-box" sx={{ width: '25%', height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Card sx={{ width: 300, height: 300, backgroundColor: '#12121280' }} variant="outlined">{cardCreativity}</Card>
                </Box>
            </div>

            <div id="skills-cards-small">
              <Card sx={{ backgroundColor: 'transparent', borderColor: 'transparent' }} variant="outlined">{cardProblemSolving}</Card>
              <Card sx={{ backgroundColor: 'transparent', borderColor: 'transparent' }} variant="outlined">{cardTeamwork}</Card>
              <Card sx={{ backgroundColor: 'transparent', borderColor: 'transparent' }} variant="outlined">{cardAdaptability}</Card>
              <Card sx={{ backgroundColor: 'transparent', borderColor: 'transparent' }} variant="outlined">{cardCriticalThinking}</Card>
              <Card sx={{ backgroundColor: 'transparent', borderColor: 'transparent' }} variant="outlined">{cardLeadership}</Card>
              <Card sx={{ backgroundColor: 'transparent', borderColor: 'transparent' }} variant="outlined">{cardCreativity}</Card>
            </div>
            
            
        </section>
    )
}