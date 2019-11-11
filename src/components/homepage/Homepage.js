import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import styled from 'styled-components';
import LeftSidebar from './LeftSidebar';
import CenterContent from './CenterContent';
import Banners from '../banners/Banners';
import { laptop } from '../../enhancers/mediaQuery';
import { getData } from '../../configureStore/actions/friendRequests.action';

function HomePage(){
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getData(dispatch));
      });

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
        padding-top:15px;
    }
`
const ContentWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
    }
`