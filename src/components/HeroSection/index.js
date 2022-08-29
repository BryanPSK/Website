import React, { useState } from 'react'
import Video from "../../videos/video.mp4"
import { HeroContainer,HeroBg,VideoBg, HeroContent, HeroBtnWrapper,HeroH1,HeroP,ArrowForward,ArrowRight, DisplayPicture } from './HeroElements'
import { Button } from "../Sidebar/ButtonElement";
import Display from "../../images/display.jpg"
const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => { 
        setHover(!hover)
    }
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type ="video/mp4"/>
        </HeroBg>
            {/* <HeroContent>
            </HeroContent> */}
            <HeroContent>
                <DisplayPicture src={Display}></DisplayPicture>
                <HeroH1>Hi! I'm Bryan, an aspiring web developer!</HeroH1>
                <HeroP>Curious | Passionate | Driven</HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" primary='false' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}>Contact me{hover? <ArrowForward/>: <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
