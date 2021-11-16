import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import {BannerBg,BannerContainer,VideoBg,BanH1,BanP,BanbtnWrapper,BannerContent,ArrowForward,ArrowRight} from './BannerElements'
import {Button} from '../ButtonElement'
function Banner() {

    const [hover,setHover]=useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }

    return (
        <BannerContainer>
            <BannerBg>
                <VideoBg autoPlay loop muted src={Video} type='videos/mp4'/>
            </BannerBg>
            <BannerContent>
                <BanH1>"Design is intelligence made visible."</BanH1>
                <BanP>
                    Graphic Designing, Flex Printing, Laser Printing At The Best Price.
                </BanP>
                <BanbtnWrapper>
                    <Button to='services' onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark='true'
                    smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset= {-80}
                    >
                        Know More{hover ? <ArrowForward/> : <ArrowRight/>}
                        
                    </Button>
                </BanbtnWrapper>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner
