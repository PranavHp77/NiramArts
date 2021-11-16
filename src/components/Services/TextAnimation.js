import React from "react";
import styled, { keyframes } from "styled-components";

export default function TextAnimation(){
    return <Wrapper></Wrapper>
    
}

const animation = keyframes`
    0%{opacity:0; transform: translateX(-100px);}
    25%{opacity:1; transform: translateX(0);}
    75%{opacity:1; transform: translateX(0);}
    100%{opacity:0; transform: translateX(-100px);}
`

export const Wrapper = styled.span`
    padding-left: 6px;
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 4s;
    animation-fill-mode: backwards;
    animation-iteration-count: infinite;
`