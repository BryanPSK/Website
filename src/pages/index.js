import React, { useState } from 'react'
import AboutMeSection from '../components/AboutMeSection'
import ContactSection from '../components/ContactSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Projects from '../components/ProjectsSection'
import Sidebar from '../components/Sidebar'


const Home = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection/>
        <AboutMeSection/>
        <Projects/>
        <ContactSection/>
        {/* <HeroSection/> */}
        {/* <Projects/> */}

    </>
  )
}

export default Home