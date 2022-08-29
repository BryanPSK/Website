import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarRoute,SidebarMenu,SidebarLink,SidebarWrapper } from './SidebarElements'

const Sidebar = ({toggle,isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to ='home' onClick={toggle}>Home</SidebarLink>
                <SidebarLink to ='about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to ='projects' onClick={toggle}>Projects</SidebarLink>
                <SidebarLink to ='contact' onClick={toggle}>Contact</SidebarLink>
            </SidebarMenu>
            {/* <SideBtnWrap>
                <SidebarRoute to ='/signin' onClick={toggle}>Sign in</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar