import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';


function Ads({headerTitle,subTitle,paragraph,pic}) {
    return(
        <Wrapper>
            <Img src={pic}></Img>
            <Content>
                <PHeader style={{fontWeight:'700'}}>{headerTitle}<br/>{subTitle}</PHeader>
                <P>{paragraph}</P>
            </Content>
        </Wrapper>
    )   
}
export default Ads;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        background:#FFFFFF;
        height:220px;     
    }
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
       height:130px;
       width:90%;
       align-self:center;    
    }
`
const Content = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        padding-left:10px;
    }
`
const PHeader = styled.p`
    @media (min-width: ${laptop}) {
        color: #3b5998; font-size:13px; 
    }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        color: #616770; font-size:11px;
        margin-top:-10px;
    }
`

