import React from 'react'
import { ProjectsContainer } from './ProjectsElements'
import { Card, Typography, Grid,Paper,CardContent, CardMedia, CardHeader,Box } from '@mui/material'
import projects from '../../images/projects.jpg'
import ETLAS from '../../images/ETLAS.jpg'
import laundryApp from '../../images/laundryApp.jpg'
import { HeroH1 } from '../HeroSection/HeroElements'
import ProjectsCard from './card'
import Icon from '@mdi/react'
import pesula from '../../videos/pesula.mp4'
import pesula2 from '../../videos/PESULA-2.mp4'
//IOT card
import JavascriptIcon from '@mui/icons-material/Javascript';
import { mdiLanguagePython,mdiFirebase, mdiLanguageJava } from '@mdi/js';

const Projects = () => {
  return (
    <>
    <ProjectsContainer id='projects'>
            <Grid container spacing={6} justifyContent='center'>
                <Grid item>
                    <ProjectsCard 
                    title="IOT Cashless Smart Washing Machine"
                    subheader="React Native, Firebase, Raspberry Pi"
                    icon1={<JavascriptIcon/>}
                    icon2={<Icon path={mdiLanguagePython}/>}
                    icon3={<Icon path={mdiFirebase }/>}
                    cardImg={laundryApp}
                    content="I led a team of 5 to build and design a washing machine booking app to solve some of the problems of doing laundry in NTU halls. Our team then competed with others in the category of Smart Mobile Apps and emerged champions"
                    />
                </Grid>
                <Grid item>
                <ProjectsCard 
                    title="ETLAS RBAC "
                    subheader="NextJs, Spring Boot, PostgreSQL, Raspberry Pi"
                    icon1={<JavascriptIcon/>}
                    icon2={<Icon path={mdiLanguagePython}/>}
                    icon3={<Icon path={mdiLanguageJava}/>}
                    cardImg={ETLAS}
                    content="I contributed to the design and creation of the first prototype of ETLAS(a web-based Role-Based Access Control security platform) as part of my 6 month internship at Integrated Security Solutions. We developed with the goal of creating a more pleasant and intuitive experience for users as the current systems are slightly outdated and harder to operate. "
                    />
                </Grid>
                <Grid item>
                <ProjectsCard 
                    title="IOT Cashless Smart Washing Machine(FYP)"
                    subheader="React Native, Firebase, Raspberry Pi (In progress)"
                    icon1={<JavascriptIcon/>}
                    icon2={<Icon path={mdiLanguagePython}/>}
                    icon3={<Icon path={mdiFirebase }/>}
                    video={pesula2}
                    content="After a successful presentation from the first iteration of this project, I received feedback from a few interested professors to make this project into a reality. Hence, I initiated this project with a partner for my Final Year Project(FYP). We aim to complete the project and run user tests on NTU campus by the end of the academic year."
                    />                   
                </Grid>
            </Grid>
    </ProjectsContainer>
    </>
  )
}

export default Projects