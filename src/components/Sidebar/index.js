import React from 'react'
import {SidebarContainer,CLoseIcon,Icon,SidebarWrapper,SideBtnWrap,SidebarRoute,SidebarLink,SidebarMenu} from './SidebarElements'

function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CLoseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='pricing' onClick={toggle}>
                        Pricing
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/quote'>Get A Quote</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
            
    )
}

export default Sidebar
