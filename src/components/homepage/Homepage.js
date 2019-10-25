import React from 'react';
import styled from 'styled-components';
import LeftSidebar from './LeftSidebar';
import CenterContent from './CenterContent';
import Banners from './Banners';
import { laptop } from '../../enhancers/mediaQuery';

function HomePage(){
    return(
        <Wrapper>
            <ContentWrap>
                <LeftSidebar/>
                <CenterContent/>
                <Banners/>
            </ContentWrap>
        </Wrapper>
    )
}

export default HomePage;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:center; justify-self:center;
        border:1px solid black; 
        padding-top:15px;
    }
`
const ContentWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
    }
`