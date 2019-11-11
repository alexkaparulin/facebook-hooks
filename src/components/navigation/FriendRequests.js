import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { laptop } from '../../enhancers/mediaQuery';
import AddFriend from './AddFriend';

function FriendRequests(){
    const requestsArr = useSelector(state => state.friendRequests.data.results);
    let requestsSort = requestsArr.map((request,i)=>{
        return(
            <AddFriend key={i} name={request.name.first+''+request.name.last} img={request.picture.thumbnail}/>
        )
    }) ;
    return(
    <Wrapper>
        <Header>
            <Left>
                <P style={{color:'#333333',fontWeight:700}}>Friend Requests</P>
            </Left>
            <Right>
                <P>Find Friends &middot;&nbsp;</P>
                <P>Settings</P>
            </Right>
        </Header>
        <ListOfRequests>
            {requestsSort}
        </ListOfRequests>
    </Wrapper>
    )
}
export default FriendRequests;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        height:520px; width:340px;
        background: #fff;
        border: 1px solid rgba(100, 100, 100, .4);
        border-radius: 0 0 2px 2px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
        color: #1d2129;
        overflow:visible;
  }
`
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
        height:25px;
        border-bottom: solid 1px #dddfe2;
        padding:0 10px;
  }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        font-size:10px; color: #385898;
        cursor: pointer;
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
const ListOfRequests = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        overflow-y:scroll;
  }
`
