import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavItem,NavLinks,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';
import { animateScroll as scroll} from 'react-scroll';
import RocketIcon from '@mui/icons-material/Rocket';
import PublicIcon from '@mui/icons-material/Public';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => { 
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])
    
    const toggleHome = () => { 
        scroll.scrollToTop();
     }
return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    <RocketIcon/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ='home' smooth={true} duration={500} spy={true} exact="true" offset={-80}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='about' smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='projects' smooth={true} duration={500} spy={true} exact="true" offset={-80}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ='contact' smooth={true} duration={500} spy={true} exact="true" offset={-80}>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to='/signin'>Sign in</NavBtnLink>
                    </NavBtn> */}
            </NavbarContainer>
        </Nav>
    </>
)
}

export default Navbar