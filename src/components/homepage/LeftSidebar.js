import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';
import MainSelector from './LeftSidebar/MainSelector';


function LeftSidebar() {
    return(
        <Wrapper>
            <UserWrap>
                <Row>
                    <UserImg></UserImg>
                    <UserName>Alex Kaparulin</UserName>
                </Row>
            </UserWrap>
            <MainSelector/>
        </Wrapper>
    )   
}
export default LeftSidebar;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        border:1px solid red;
        height:800px; width:180px;
    }
`
const UserWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
    }
`
const UserImg = styled.img`
    @media (min-width: ${laptop}) {
        border-radius:100%;
        background:black;
        height:25px; width:25px;
    }
`
const UserName = styled.p`
    @media (min-width: ${laptop}) {
        font-size:11px; font-weight:600;
        margin-left:5px;
    }
`
const Row = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
    }
`