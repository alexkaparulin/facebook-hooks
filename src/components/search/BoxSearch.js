import React from 'react';
import styled from 'styled-components';
import SearchedPerson from './SearchedPerson';
import { laptop } from '../../enhancers/mediaQuery';
import Loader from 'react-loader-spinner'

const BoxSearch = props => {
    
    function filteredSearchedData(props){
       if(props.usersData.data.length !== 0 && props.on_filter.length === 0){
           return 'no value was found';
        }
        else if(props.usersData.data.length === 0 && props.on_filter.length === 0){
            return (<SpinnerContainer>
                        <Loader type="Grid" color="#90949c" height={80} width={80} />
                    </SpinnerContainer>)
        }
        else if(props.usersData.data.length !== 0 && props.on_filter.length !== 0){
            return props.on_filter.map((user,i)=>{
                return ( <SearchedPerson key={i} users={user}/> )
            })
        }else{
            return props.usersData.data.results.map((user,i)=>{
                return ( <SearchedPerson key={i} users={user}/> )})
        }
    }
    return(
        <Wrapper>
           <Header>
               <P>RECENT SEARCHES</P>
               <P style={{paddingRight:'8px'}}>EDIT</P>
           </Header>
           <UsersWrap>
                {filteredSearchedData(props)}
           </UsersWrap>
        </Wrapper>
    )
}

export default BoxSearch;
const SpinnerContainer = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:center;align-items:center;
        height:100%;
    }
` 
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