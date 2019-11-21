import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';

function PhotosBox(){
    return(
    <Wrapper>
        <Top>
            <Left>
                <Icon></Icon>
                <P style={{fontSize:'13px',marginLeft:'4px'}}>Photos</P>
            </Left>
            <Right>
                <P style={{color:'#385898'}}>Add Photo</P>
            </Right>
      </Top>
      <Photos>

      </Photos>
    </Wrapper>
    )   
}
export default PhotosBox;

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
        display:flex; justify-content:space-between; align-items:center;
        padding:0 5px;
    }   
`
const Left = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
    }   
`
const Icon = styled.div`
    @media (min-width: ${laptop}) {
        height:22px; width:22px;
        border:1px solid #FFF; border-radius:100%;
        background:#000;
    }   
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        font-size:10px; color:#1D2129;
    }   
`
const Right = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
    }   
`
const Photos = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
    }   
`