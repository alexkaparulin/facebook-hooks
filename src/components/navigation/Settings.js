import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';

function Settings(){
    return(
    <Wrapper>
      <Ul>
          <Li style={{borderBottom:'1px solid #e9ebee',padding:'10px'}}>Manage Groups</Li>
          <Li style={{borderBottom:'1px solid #e9ebee',padding:'10px'}}>Advertasing on Facebook</Li>
          <Ul style={{padding:'3px 0'}}>
            <Li>Activity Log</Li>
            <Li>News Feed Preferences</Li>
            <Li>Settings</Li>
          </Ul>
            <Li style={{borderTop:'1px solid #e9ebee',padding:'10px'}}>Log Out</Li>
      </Ul>
    </Wrapper>
    )
}
export default Settings;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        background:#FFFFFF;
        height:165px; width:150px;
        border: solid 1px #dddfe2;
  }
`
const Ul = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        list-style-type: none;
  }
`
const Li = styled.li`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        color:#1d2129; font-size:10px;
        padding:5px 10px;
        &:hover{
            background:#1877F2;
            color:#FFFFFF;
        }
  }
`