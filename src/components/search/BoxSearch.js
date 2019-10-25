import React from 'react';
import styled from 'styled-components';
import SearchedPerson from './SearchedPerson';
import { laptop } from '../../enhancers/mediaQuery';

const BoxSearch = props => {

    function sortUsersList(props){
        return props.usersData.data.results.map((user,i)=>{
            return ( <SearchedPerson key={i} users={user}/> )
        })
    }
    let checkForUsers = props.usersData.data.length !== 0 ? sortUsersList(props) : console.log('no users yet')
    return(
        <Wrapper>
           <Header>
               <P>RECENT SEARCHES</P>
               <P style={{paddingRight:'8px'}}>EDIT</P>
           </Header>
           <UsersWrap>
                {checkForUsers}
           </UsersWrap>
        </Wrapper>
    )
}

export default BoxSearch;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        background:#FFFFFF;
        border-top:1px solid #000000;
        width:455px; height:300px;
    }
` 
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between; align-items:center;
        background:#f5f6f7; color:#90949c;
        height:30px;
        padding-left:8px;
    }
`
const P = styled.p` 
    @media (min-width: ${laptop}) {
    font-size:11px; font-weight:600;
    }
`
const UsersWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        height:500px;
        overflow-y:scroll; overflow-x:hidden;
    }
`