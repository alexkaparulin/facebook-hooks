import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';

function SingleFriend({img,friend_name}) {
    return(
      <Wrapper>
          <Img src={img}></Img>
          <Name>{friend_name}</Name>
      </Wrapper>
    )   
}
export default SingleFriend;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-basis:30%; flex-direction:column;
        margin:2px;
    }   
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        background:lightcyan;
        height:88px; width:88px;
    }   
`
const Name = styled.p`
    @media (min-width: ${laptop}) {
        font-size:10px; color:#385898;
        margin-top:5px;
    }   
`