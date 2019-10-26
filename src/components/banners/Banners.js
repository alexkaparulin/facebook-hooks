import React from 'react';
import styled from 'styled-components';
import { laptop } from '../../enhancers/mediaQuery';
import Events from './Events';
import Ads from './Ads';
import iherb from '../../static/banners/iherb.png';
import supplement from '../../static/banners/supplement.jpg';
import Language from './Language';


function Banners() {

    let dataArray = [{title:'iherb', subTitle:'iherb.com',pic:iherb,
        content:"Shop 'iHerb's Brands of the Week today and save up to 15%. Low cost international shipping..."},
        {title:'MUSCLETECH SUPPLEMENT SALE', subTitle:'muscleandstrength.com',pic:supplement,
        content:"BUY 1 GET 1 FREE DEALS & MORE on MuscleTech supplements today. Save big when you shop at M..."}];

    return(
        <Wrapper>
           <Events/>  {/* Event Component Container */}
           <AdContainer>
                <Header>
                    <P style={{fontWeight:'600'}}>Sponsored</P>
                    <P style={{color:'#4267b2'}}>Create Ad</P>
                </Header>
                <AdsContent>
                    {dataArray.map((obj,i) => {
                        return(
                            <Ads key ={i} headerTitle={obj.title} subTitle={obj.subTitle} paragraph={obj.content} pic={obj.pic}/>   /* Ads Components.. */
                        )
                    })}
                </AdsContent>  
           </AdContainer>
           <Language/>
           <PrivacyContent>
             Privacy · Terms · Advertising · Ad Choices · Cookies · 
                More
                Facebook © 2019
           </PrivacyContent>
        </Wrapper>
    )   
}
export default Banners;

const Wrapper = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        height:800px; width:270px;
        padding-bottom:10px;
    }
`
const AdContainer = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
        background:#FFFFFF;
        margin-top:10px;
        position:sticky;
        top:60px;
        border:1px solid #dddfe2; border-radius:3px;
    }
`
const Header = styled.div`
    @media (min-width: ${laptop}) {
        display:flex; justify-content:space-between;
        padding:0 10px;      
    }
`
const P = styled.p`
     @media (min-width: ${laptop}) {
        color:#616770; font-family:Arial, Helvetica, sans-serif; font-size:12px;   
    }
`
const AdsContent = styled.div`
     @media (min-width: ${laptop}) {
        display:flex; flex-direction:column;
    }
`
const PrivacyContent = styled.div`
     @media (min-width: ${laptop}) {
        display:flex;
        padding: 0 10px;
        margin-top:10px;
        font-size:12px; color:#90949C;
    }
`
