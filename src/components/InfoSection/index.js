import React from 'react'
import { Button } from '../ButtonElement'
import { ImgWrap,InfoContainer,InfoRow,InfoWrapper,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,BtnWrapper,Img } from './InfoElements'
import { Wrapper } from '../Services/TextAnimation'

const InfoSection = ({lightBg,lightText,id,imgStart,topLine,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                           <TopLine>{topLine}</TopLine> 
                           <Heading lightText={lightText}>{headline}</Heading>
                           <Subtitle darkText={darkText}>{description}</Subtitle>
                           <BtnWrapper>
                               <Button to={'home'}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset= {-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                               >Starting From<Wrapper>{buttonLabel}</Wrapper></Button>
                           </BtnWrapper>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                    </InfoWrapper>  
            </InfoContainer>  
        </>
    )
}

export default InfoSection
