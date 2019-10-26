import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';
import publicIcon from '../../../static/logos/main/public.png';

function UserPost() {
    return(
        <Wrapper>
            <Header>
                <UserImg></UserImg>
                <JustifyContent>
                    <UserInfo>
                        <P style={{color:'#2851A3',fontWeight:'700',fontSize:'12px'}}>Manchester United</P>
                        <P style={{color:'#616770'}}>2 Hrs &middot;&nbsp;<Public src={publicIcon}></Public></P>
                    </UserInfo>
                    <OptionsButton>&middot;&middot;&middot;</OptionsButton>
                </JustifyContent>    
            </Header>
            <HeaderText>
                <Text>dfsfdsfds sd fdsf sd fds fds fds fdfhgf dsf dsfdsf dsfb dsn </Text>
            </HeaderText>
            <ImgContainer>
                <Img></Img>
            </ImgContainer>
        </Wrapper>
    )   
}
export default UserPost;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; 
        background:#FFFFFF;
        padding:10px 0;
        margin-top:5px;
        border-radius:2px; border: 1px solid #bdc7d8;
    }
`
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        padding:0 10px;
    }
`
const JustifyContent = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between;
        width:100%;
    }
`
const UserImg = styled.img`
    @media (min-width: ${laptop}) {
       height:32px; width:32px;
       border:2px solid #1877F2; border-radius:100%;
    }
`
const UserInfo = styled.ul`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
    }
`
const P = styled.li`
    @media (min-width: ${laptop}) {
        list-style-type:none;
        font-size:11px;
        margin-left:-35px;
    }
`
const Public = styled.img`
    @media (min-width: ${laptop}) {
       height:10px; width:10px;
    }
`
const OptionsButton = styled.p`
    @media (min-width: ${laptop}) {
        font-size:20px;
    }
`
const HeaderText = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
        padding:0 10px;
    }
`
const Text = styled.p`
    @media (min-width: ${laptop}) {
        font-size:13px;
    }
`
const ImgContainer = styled.div`
    @media (min-width: ${laptop}) {
        font-size:13px;
    }
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        height:350px; width:100%;
    }
`
