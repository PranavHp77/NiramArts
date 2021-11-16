import React from 'react'
import { ServicesContainer,ServicesCard,ServicesP,ServicesH1,ServicesH2,ServicesWrap } from './ServicesElements' 


const Services = () => {
    return (
        <>
          <ServicesContainer id='loc'>
              <ServicesH1>Our Location</ServicesH1>
                  <ServicesWrap>
                      <ServicesCard>
                          <ServicesH2>Niram Arts</ServicesH2>
                          <ServicesP>Kulathoor P O Near S N M Library<br/> Kazhakuttom,Tvpm</ServicesP>
                      </ServicesCard>
                      <ServicesCard>                          
                          <ServicesH2>Contact Info</ServicesH2>
                          <ServicesP>Mobile : 9497639012 <br/> Email Address : niramarts44@gmail.com</ServicesP>
                      </ServicesCard>
                  </ServicesWrap>

              </ServicesContainer>  
        </>
    )
}

export default Services
