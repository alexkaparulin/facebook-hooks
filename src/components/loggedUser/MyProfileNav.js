import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';

function MyProfileNav(){
    return(
      <Wrapper>
        <ImgBox>
            <Img src='https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/d8/ko-phi-phi-don.jpg'></Img>
            <MyInfo>
                <ProfileImg></ProfileImg>
                <UserName>Alex Kaparulin</UserName>
                <ButtonsBox>
                    <Button>Update Info</Button>
                    <Button>Activity Log</Button>
                </ButtonsBox>
            </MyInfo>
        </ImgBox>
        <NavBox>
            <P>Timeline</P>
            <P>About</P>
            <P>Friends (num)</P>
            <P>Photos</P>
            <P>Archive</P>
            <P style={{borderRight:'1px solid #e9eaed'}}>More</P>
        </NavBox>
      </Wrapper>
    )   
}
export default MyProfileNav;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        border:1px solid red;
        height:350px; width:700px;
    }   
`
const ImgBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        height:310px; width:100%;
    }   
`
const MyInfo = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
        margin-left:185px;
        position:relative; bottom:60px;
    }   
`
const ProfileImg = styled.img`
    @media (min-width: ${laptop}) {
       height:140px; width:140px; 
       border: 4px solid #fff; border-radius:100%;
       position:absolute; left:-170px; bottom:-20px;
       background:black;
    }   
`
const UserName = styled.p`
    @media (min-width: ${laptop}) {
        font-size:22px; color: #fff; font-weight:bold;
        text-rendering: optimizelegibility; text-shadow: 0 0 3px rgba(0, 0, 0, .8); 
    }   
`
const ButtonsBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
    }   
`
const Button = styled.button`
    @media (min-width: ${laptop}) {
        background:#F5F6F7;
        padding:4px 8px;
        margin:4px;
        height:20px;
        border-color: rgba(0, 0, 0, .4); border-radius:1px;
        font-size:10px; font-weight:bold; color: #4B4F56;
        &:hover {
            background-color: #f5f6f7;
            border-color: #ccd0d5;
            color: #4b4f56;
        }
    }   
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        height:100%; width:100%;
    }   
`
const NavBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
        height:40px;
        padding-left:185px;
        background: #FFFFFF;
    }   
`
const P = styled.li`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:center; align-items:center;
        font-size:11px; font-weight:600; color: #385898; 
        list-style-type: none; cursor: pointer;
        line-height: 3.05; vertical-align: middle;
        padding: 0 17px;
        position: relative;
        white-space: nowrap;
        border-left: 1px solid #e9eaed;
    }   
`