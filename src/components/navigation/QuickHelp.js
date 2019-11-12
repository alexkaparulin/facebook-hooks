import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';
import searchIcon from '../../static/logos/search/searchIcon.png' 

function QuickHelp(){
    return(
    <Wrapper>
        <Header>
            <Title>
                <P style={{color:'#1c1e21',fontWeight:'600'}}>Quick Help</P>
                <P style={{color:'#385898'}}>Help Center</P>
            </Title>
            <InputBox>
                <Input placeholder='How can we help?'></Input>
                <Search src={searchIcon}></Search>
            </InputBox>
            <P style={{marginLeft:'10px'}}>HELP WITH THIS PAGE</P>
            <Li>Home page</Li>
            <Li>Timeline</Li>
            <Li>Chat and Messages</Li>
            <Li>Account Security</Li>
            <Li>Privacy</Li>
        </Header>
        <Privacy>
            <Li style={{borderTop:'1px solid #dddfe2'}}><Icon></Icon>Privacy Checkup</Li>
            <Li style={{borderBottom:'1px solid #dddfe2',borderTop:'1px solid #dddfe2'}}><Icon></Icon>Privacy Shortcuts</Li>
        </Privacy>
        <Support>
            <Li style={{borderBottom:'1px solid #dddfe2',borderTop:'1px solid #dddfe2'}}><Icon></Icon>New Support Messages</Li>
            <Li style={{borderLeft:'1px solid rgba(100, 100, 100, .4)',borderRight:'1px solid rgba(100, 100, 100, .4)'}}><Icon></Icon >Report a Problem</Li>
        </Support>
    </Wrapper>
    )
}
export default QuickHelp;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        background:#f5f6f7;
        width:215px; height:370px;
        border: 1px solid rgba(100, 100, 100, .4); border-radius: 0 0 2px 2px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, .25);
    }
`
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        background:#FFFFFF;
        width:100%;
        border-bottom: 1px solid #dddfe2;
        margin-bottom:4px;
    }
`
const Title = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between;
        padding:0 10px;
    }
`
const P = styled.p`
    @media (min-width: ${laptop}) {
        color: #8d949e; font-size: 10px; font-weight: 600;
    }
`
const InputBox = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        margin:0 10px;
        border: 1px solid #dddfe2;
    }
`
const Input = styled.input`
    @media (min-width: ${laptop}) {
        font-size:10px;
        width:100%;
        border:none;
        padding: 6px;
        outline:none;
    }
`
const Search = styled.img`
    @media (min-width: ${laptop}) {
        height:15px; width:15px;
        padding: 5px;
        align-self:center; justify-self:center;
  }
`
const Li = styled.li`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        font-size:10px; color: #4b4f56;
        list-style-type: none;
        padding:10px;
        &:hover{
            background-color: #e9ebee;
        }
    }
`
const Privacy = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        background:#FFFFFF;
    }
`
const Icon = styled.img`
    @media (min-width: ${laptop}) {
      border-radius:100%;
      border:1px solid red;
      height:15px; width:15px;
      margin-right:5px;
    }
`
const Support = styled(Privacy)`
    @media (min-width: ${laptop}) {
        margin-top:4px;
        border-bottom: 1px solid #dddfe2;
    }
`
