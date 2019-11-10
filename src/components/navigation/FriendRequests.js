import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';

function FriendRequests(){
    return(
    <Wrapper>
        <Header>
            <Left>
                <P>Friend Requests</P>
            </Left>
            <Right>
                <P>Find Friends &middot;&nbsp;</P>
                <P>Settings</P>
            </Right>
        </Header>
    </Wrapper>
    )
}
export default FriendRequests;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        height:550px; width:350px;
        background:#FFFFFF;
        border:1px solid blue;
        padding:0 10px;
  }
`
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between;
        width:100%;
        border-bottom: solid 1px #dddfe2;
  }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        font-size:11px;
  }
`
const Left = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
  }
`
const Right = styled(Left)`
    @media (min-width: ${laptop}) {
        display:flex;
  }
`
