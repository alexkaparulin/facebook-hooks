import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import facebookLogo from '../../static/logos/main/facebook-logo.png';
import Search from '../search/Search';
import { laptop } from '../../enhancers/mediaQuery';
import friendRequest from '../../static/navbar/friend-request.png'
import messenger from '../../static/navbar/messenger.png'
import notification from '../../static/navbar/notification.png'
import help from '../../static/navbar/help.png'
import options from '../../static/navbar/option-arrow.png'
import triangle from '../../static/logos/main/triangle.png'
import FriendRequests from './FriendRequests';
import QuickHelp from './QuickHelp';
import Settings from './Settings';

function Links(){

    const [isFriendsOpen,openCloseFriends] = useState(false);
    const [isHelpOpen,openCloseHelp] = useState(false);
    const [isSettingsOpen,openCloseSetting] = useState(false);

    function closeLinksTab(isOpen){
        openCloseFriends(isOpen);
        openCloseHelp(isOpen);
        openCloseSetting(isOpen);
    }

    function openLinksTab(friends,help,settings){
        openCloseFriends(friends);
        openCloseHelp(help);
        openCloseSetting(settings);
    }

    function openFriendRequests(isOpen){
        isOpen? openLinksTab(isOpen,!isOpen,!isOpen) : closeLinksTab(isOpen)
    }

    function openHelpTab(isOpen){
        isOpen? openLinksTab(!isOpen,isOpen,!isOpen) : closeLinksTab(isOpen)
    }

    function openSettingsTab(isOpen){
        isOpen? openLinksTab(!isOpen,!isOpen,isOpen):  closeLinksTab(isOpen);
    }

    return(
    <Wrapper>
        <SearchWrap>
            <Img src={facebookLogo}></Img>
            <Search/>
        </SearchWrap>
        <NavbarWrap>
            <UserWrap>
                <UserImg></UserImg>
                <StyledLink to='/:user'>Alex</StyledLink>
            </UserWrap>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to=''>Create</StyledLink>
            <SelectorWrap>
                <ImgSelector src={friendRequest} onClick={() => openFriendRequests(!isFriendsOpen)}></ImgSelector>
                <Triangle src={triangle} isClicked={isFriendsOpen}></Triangle>
                <ImgSelector style={{height:'19px', width:'20px'}} src={messenger}></ImgSelector>
                <ImgSelector style={{height:'20px', width:'22px'}} src={notification}></ImgSelector>
            </SelectorWrap>
            <RequestContainer>
                {isFriendsOpen? <FriendRequests/> : null}
            </RequestContainer>
            <OptionsWrap>
               <ImgSelector src={help} onClick={() => openHelpTab(!isHelpOpen)}></ImgSelector>
               <HelpContainer>
                    {isHelpOpen ? <QuickHelp/> : null}
               </HelpContainer>
               <Img style={{height:'10px',width:'10px',marginLeft:'5px'}} src={options} onClick={() => openSettingsTab(!isSettingsOpen)}></Img>
               <SettingsContainer>
                    {isSettingsOpen ? <Settings/> : null}
               </SettingsContainer>
            </OptionsWrap>
        </NavbarWrap>
    </Wrapper>
    )
}
export default Links;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center; justify-content:space-between;
        width:950px;
  }
`
const SearchWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
    }    
`
const Img = styled.img`
    @media (min-width: ${laptop}) {
        height:26px; width:25px;
        cursor:pointer;
    }
`
const NavbarWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
    }
`
const UserWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        border:none;
        height:20px;
    }
`
const UserImg = styled.img`
    @media (min-width: ${laptop}) {
        border-radius:100%; 
        height:25px; width:25px;
        background:red;
    }
`
const SelectorWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
        padding: 0 10px;
        height:15px;
        border-right:1px solid #45565c;
    }
`
const ImgSelector = styled.img`
    @media (min-width: ${laptop}) {
        padding: 0 7px;
        height:22px; width:22px;
        cursor: pointer;
    }
`
const Triangle = styled.img`
    @media (min-width: ${laptop}) {
        display:${props => props.isClicked ? 'flex':'none'};
        padding: 0 7px;
        position:absolute; top:33px;
        height:15px; width:22px
    }
`
const OptionsWrap = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; align-items:center;
    }
`
const HelpContainer = styled.div`
    @media (min-width: ${laptop}) {
        position:absolute; top:45px; right:150px;
    }
`
const SettingsContainer = styled.div`
    @media (min-width: ${laptop}) {
        position:absolute; top:45px; right:120px;
    }
`
const StyledLink = styled(Link)`
    @media (min-width: ${laptop}) {
        text-decoration:none; color:#FFFFFF; font-size:12px; font-weight:600;
        cursor: pointer;
        padding: 0 10px;
        border-right:1px solid #45565c;
    }
`
const RequestContainer = styled.div`
    @media (min-width: ${laptop}) {
        position:absolute; top:45px; right:220px;
    }
`