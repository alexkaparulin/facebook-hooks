import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';
import CreatePost from './centerContent/CreatePost';


function CenterContent() {
    return(
        <Wrapper>
           <CreatePost/>
        </Wrapper>
    )   
}
export default CenterContent;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        border:1px solid red;
        height:800px; width:480px;
        margin:0 10px;
    }
`