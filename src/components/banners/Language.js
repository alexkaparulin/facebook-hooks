import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';


function Language() {
    return(
        <Wrapper>
            <P> <Strong>English (US) ·</Strong> עברית · العربية · Русский ·<br/> Español</P>
            <Button>+</Button>
        </Wrapper>
    )   
}
export default Language;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center; justify-content:space-between;
        height:50px;
        background:#FFFFFF;
        border:1px solid #dddfe2; border-radius:3px;
        margin-top:10px;
        padding:0 10px;
    }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        font-size:11px; color: #90949c;
    }
`
const Strong = styled.strong`
    @media (min-width: ${laptop}) {
        font-size:11px; color: #3578E5;
    }
`
const Button = styled.button`
    @media (min-width: ${laptop}) {
       background:#F5F6F7;
       border:1px solid #dddfe2;
       height:25px; width:25px;
    }
`