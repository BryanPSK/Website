import React, { useState } from 'react'
import Video from "../../videos/video.mp4"
import { HeroContainer,HeroBg,VideoBg, HeroContent, HeroBtnWrapper,HeroH1,HeroP,ArrowForward,ArrowRight, DisplayPicture } from './HeroElements'
// import { Button } from "../Sidebar/ButtonElement";
import { Button,Typography } from '@mui/material'
import Display from "../../images/display.jpg"
const ContactSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => { 
        setHover(!hover)
    }
  return (
    <HeroContainer id="contact">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type ="video/mp4"/>
        </HeroBg>

            <HeroContent>
                {/* <DisplayPicture src={Display}></DisplayPicture> */}
                <HeroH1>Feel free to reach out!</HeroH1>
                <HeroH1>I'm always open to new ideas and projects!</HeroH1>
                <Typography color='white' fontSize={28}><Button variant='string' href='https://github.com/BryanPSK'><Typography color='white'>GitHub</Typography></Button> |<Button variant='string' href='https://www.linkedin.com/in/bryan-pang-25442421b'><Typography color='white'>LinkedIn</Typography></Button> | <Button variant='string' href='mailto:bryanpang99@hotmail.com'><Typography color='white'>email</Typography></Button></Typography>
            </HeroContent>
    </HeroContainer>
  )
}

export default ContactSection
