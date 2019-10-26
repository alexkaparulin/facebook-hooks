import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';
import UserStory from './stories/UserStory';

function Stories() {

    let storyArr = [{name:'Lebron James',profileImg:null,img:null},{name:'Kevin Durant',profileImg:null,img:null},
        {name:'Steve Nash',profileImg:null,img:null}];
    
    return(
        <Wrapper>
            <Header>
                <P style={{color:'#616770',fontWeight:'700'}}>Stories</P>
                <P style={{color:'#385898',fontSize:'12px'}}>See All</P>
            </Header>
            <StoriesContainer>
                    <UserStory profileImg='Add To Story' userName='null' 
                    storyImg='null' plusSign='+' border='1px solid #dddfe2' color='#1877F2' fontSize='28px'/>
                {
                    storyArr.map((obj,i)=>{
                        return(
                            <UserStory key={i} profileImg={obj.profileImg} userName={obj.name} storyImg={obj.img}/>
                        )
                    })
                }
            </StoriesContainer>
        </Wrapper>
    )   
}
export default Stories;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        padding:0 10px; 
        margin-top:5px;
        border-radius:2px; border: 1px solid #bdc7d8;
        background:#FFFFFF;
    }
`
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
    }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        font-size:13px;
    }
`
const StoriesContainer = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-evenly;
        padding-bottom:10px;
    }
`