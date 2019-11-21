import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';

function UserBio(){
    return(
    <Wrapper>
        <Top>
            <TitleBox>
                <Icon style={{margin:'0 10px'}}></Icon>
                <P style={{fontSize:'14px',color:'#1c1e21'}}>Intro</P>
            </TitleBox>
            <ContentBox>
                <Icon></Icon>
                <P>Add a short bio to tell people more about yourself.</P>
                <P style={{color:'#3578e5',marginTop:'-3px'}}>Add Bio</P>
            </ContentBox>
        </Top>
        <Center>
            <TitleBox>
                <Icon style={{margin:'0 10px'}}></Icon>
                <P>Lives in <Span>Tel Aviv, Israel</Span></P>
            </TitleBox>
            <EditDetails>Edit Details</EditDetails>
        </Center>
        <Bottom>
            <ContentBox>
                <Icon></Icon>
                <P>Showcase what's important to you by adding photos,</P>
                <P style={{marginTop:'-6px',marginBottom:'-6px'}}>pages,  and more to your featured section on</P>
                <P>your public profile.</P>
                <P style={{color:'#3578e5',marginTop:'-3px'}}>Add to Featured</P>
            </ContentBox>
        </Bottom>
    </Wrapper>
    )
}
export default UserBio;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        border: 1px solid #dddfe2; border-radius: 3px;
        background:#FFF;
        width:250px; height:auto;
  }
`
const Top = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
  }
`
const TitleBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
    }
`
const ContentBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; align-items:center; justify-content:center; 
    }
`
const Center = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        padding:15px 0;
        border-top: 1px solid #ebedf0;
        border-bottom: 1px solid #ebedf0;
  }
`
const Span = styled.span`
    @media (min-width: ${laptop}) {
        font-size:9px; color: #385898;
  }
`
const EditDetails = styled.button`
    @media (min-width: ${laptop}) {
        font-size:11px; color: #4b4f56; font-weight:bold;
        margin:4px 8px;
        padding:3px 10px;
        outline:none;
        background:#F5F6F7;
        border: 1px solid #CCC; border-radius: 2px;
        &:hover {
            background: #f5f6f7;
            border-color: #ccd0d5;
            color: #4b4f56;
        }
    }
`
const Bottom = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:center;
        padding:4px 0;
  }
`
const Icon = styled.img`
    @media (min-width: ${laptop}) {
        height:22px; width:22px;
        border:1px solid #000; border-radius:100%;
        background:blue;
  }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        font-size:9px; color: #1d2129;
  }
`