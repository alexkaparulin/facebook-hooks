import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../../enhancers/mediaQuery';


function UserStory({storyImg,userName,profileImg,plusSign,border,color,fontSize}) {
    return(
        <Wrapper src={storyImg}>
            <Button src={profileImg} style={{border:border,color:color,fontSize:fontSize}}>{plusSign}</Button>
            <P>{userName}</P>
        </Wrapper>
    )   
}
export default UserStory;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column; justify-content:space-between;
        border: 1px solid rgba(0, 0, 0, .1); border-radius:10px;
        height:180px; width:105px;
        background:#000000;
    }
`
const Button = styled.button`
    @media (min-width: ${laptop}) {
        text-align:center;
        position:relative; top:5px; left:5px;
        border-radius:100%; border:3px solid #1877F2;
        height:35px; width:35px;
        background:#FFFFFF;
    }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
      color:#FFFFFF; font-weight:700; font-size:13px; 
      padding-left:5px;
    }
`