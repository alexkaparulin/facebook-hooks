import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../../enhancers/mediaQuery';
import SingleFriend from './SingleFriend';
import { useSelector } from 'react-redux';

function FriendsBox(){
    
    const userFriends = useSelector(state => state.myUserFriends.friends.results);
    if(userFriends !== undefined){
        var arrOfFriends = userFriends.map((friend,i) => {
            return( <SingleFriend key={i} img={friend.picture.medium} friend_name={friend.name.first+' '+friend.name.last}/>)
        });
    }
    return(
      <Wrapper>
        <Top>
            <Left>
                <Icon></Icon>
                <P style={{fontSize:'13px',marginLeft:'4px'}}>Friends &middot;&nbsp;<Span>554</Span></P>
            </Left>
            <Right>
                <P style={{color:'#385898'}}>Find Friends</P>
            </Right>
        </Top>
        <Photos>
           {arrOfFriends}
        </Photos>
      </Wrapper>
    )   
}
export default FriendsBox;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        border: 1px solid #dddfe2; border-radius:3px;
        margin:2px 0 2px 0;
        width:280px;
        background:#FFF;
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
        display:flex; align-items:center;
        font-size:10px; color:#1D2129;
    }   
`
const Span = styled.span`
    @media (min-width: ${laptop}) {
        color:#90949C; font-size:11px;
    }   
`
const Right = styled.div`
    @media (min-width: ${laptop}) {
        display:flex;
    }   
`
const Photos = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-wrap:wrap; justify-content:center;
    }   
`