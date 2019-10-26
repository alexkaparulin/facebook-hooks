import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';


function Events() {
    return(
        <Wrapper>
           <Content>
               <Img></Img>
               <P>10 event invites</P>
           </Content>
        </Wrapper>
    )   
}
export default Events;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; justify-content:center;
        border:1px solid #dddfe2; border-radius:3px;
        background:#FFFFFF;
        height:40px;
    }
`
const Content = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        padding-left:10px;
    }
`
const Img = styled.img`
    @media (min-width:${laptop}){
        border:1px solid green; border-radius:100%;
        height:15px; width:15px;
        margin-right:5px;
    }
`
const P = styled.strong`
    @media (min-width: ${laptop}) {
        color: #385898; font-size:12px; font-family:Arial, Helvetica, sans-serif;
        cursor: pointer;
    }
`