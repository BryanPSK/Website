import React from 'react'
import { AboutMeContainer } from './AboutMeElements'
import { Card, Typography, Grid,Paper,CardContent, CardMedia, CardHeader,Box, Stack} from '@mui/material'
import { HeroH1 } from '../HeroSection/HeroElements'
import { NavLinks } from '../Navbar/NavbarElements'


const AboutMeSection = () => {
  return (
    <AboutMeContainer id='about'>
        <Stack container spacing={3} alignItems='center' >
            <Box>
                <Typography sx={{fontSize:48,fontFamily:'sans-serif'}}variant='h1' color='white' borderBottom={0.5}>About Me</Typography>
            </Box>
            <Box item >
                <Typography sx={{fontSize:20,fontFamily:'sans-serif',maxWidth:900}} variant='body2' color='whitesmoke'>I'm a final year EEE student currently enrolled in NTU. Since young, my curiousity has always gotten the better of me. I've dabbled in my many interests such as teaching myself musical instruments and picking up various sports.</Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize:20,fontFamily:'sans-serif',maxWidth:900}} variant='body2' color='whitesmoke'>Through my experiences in volunteer work, I discovered my passion to serve my community and empowering the lives of the underprivilleged and marginalized people around me. As I entered university, I was exposed to coding and I was immediately drawn to its ability to build and create solutions for our everyday problems be it big or small. </Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize:20,fontFamily:'sans-serif',maxWidth:900}} variant='body2' color='whitesmoke'>In spite of my weaker technical capabilities due to my inexperience, I stay driven and seek to continuously hone my skills. I strive for excellence in hopes that one day, I'll be able to lead, serve and engage at the forefront of the digital revolution. </Typography>
            </Box>
            <Box>
            <NavLinks to ='projects' smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                <Typography sx={[{fontSize:20,fontFamily:'sans-serif',maxWidth:900}, {'&:hover':{borderBottom:0.5}}]} variant='body2' color='whitesmoke'>Interested in my projects? Take a look at some of them below!</Typography>
            </NavLinks>
            </Box>
        </Stack>
    </AboutMeContainer>
  )
}

export default AboutMeSection