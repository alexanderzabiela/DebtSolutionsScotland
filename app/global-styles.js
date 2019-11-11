import { injectGlobal } from 'styled-components';
import img from './large_background_image.png';
import tick from './images/tick.png';
import cross from './images/cross.png';
import tick2 from './images/tick_2.png';
import mobileTick from './images/tick_mobile.png';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  .cookieConsent{
    line-height: unset!important;
  }



  // p{
  //  line-height: 1.5!important;
  // }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  #desktopAccordion .Collapsible:nth-of-type(2) {
    display:none;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    max-width: 1920px!important;
    overflow-x:hidden;
    float: left;

    ol > li {
      list-style: initial!important;
    }
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
  }

  a{
    text-decoration: none;
  }

  .activeLink span{
    color: #2962AF;
  }

  .footerHeadings{
    color: #35DCB6;
    margin-left: 2%;
    margin-bottom: 5px;
    margin-top: 5px;
  }


@media only screen and (min-width: 300px) {
  .chicken {
    width: 92%;
    float: left;
    margin: 0 4%;
  }
}





@media only screen and (min-width: 1025px) {

  .topHeading{
    padding-top:50px;
  }

  .cookieConsent button{
    top: 15px!important;
  }

  .desktopCookieFix{
    display: block;
  }
  .checkWrapper{
    display: block;
    float: left;
    margin-top: -60px;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 50px;
  }

  .checkWrapper input{
    margin-left: 0.5%;
  }

  #footerLogo{
    width: 30%;
  }

  .mobileAccordion{
    display:none!important;
  }

  .mobileButton{
    display: none!important;
  }

  .desktopButton{
    display: block!important;
  }

  #bottomBannerText{
    position: relative;
    color: white;
    top: 62px;
    margin-left: 5%;
    width: 54%;
    display: inline-block;
    font-size: 1.2rem!important;
    margin-bottom: 15px;
    line-height: 25px;
    padding-top: 15px;
    margin-left: 6%;
   
  }

  #bottomBannerImg{
    display: inline;
    width: 300px;
    top: 18px;
    margin-top:30px;
  }

  select{
    background-color: white;
    color: black;
    width: 93%;
    height: 56px;
    border-radius: 10px;
    font-size: 24px;
    float: left;
    font-size: 1.35rem;
    margin-bottom: 20px;
    padding-left: 4%;
  }

  .bullets{
    display: block!important;
  }
  .tick{
    width: 40px;
    float: left;
  }



  .mobileThirdWrapper{
    display:none;
  }

  .headerWrapper > li{
    margin: 0;
    list-style: none;
    padding: 36px 0 14px 84px;
    background-image: url(${tick2});
    background-repeat: no-repeat;
    background-size: 3.5vw;
    font-size: 1.5vw;
    line-height: 3vw;
    padding-left: 4vw;
    font-weight: 800;
  }

  .advantages, .disadvantages{
    padding-left: 2%;
  }

  .advantages > li {
    margin: 0;
    list-style: none;
    background-image: url(${tick});
    background-repeat: no-repeat;
    background-size: 40px;
    padding-left: 50px;
    padding-bottom: 20px;
    font-weight: 800;
  }

  .disadvantages > li {
    margin: 0;
    list-style: none;
    background-image: url(${cross});
    background-repeat: no-repeat;
    background-size: 40px;
    padding-left: 50px;
    padding-bottom: 20px;
    font-weight: 800;
  }

  .CapabilitiesTitle{
    margin-bottom: 0px!important;
    padding-bottom: 0px!important;
  }

  .third{
    display: inline-block;
    float: left;
    width: 29%;
    margin-left: 4%;
  }

  .third > li {
    color: #35DCB6;
    font-size: 2rem;
  }

  .third > li > span {
    color: #696969;
    font-weight: 800;
    font-size: 1.6rem;
  }

  .thirdWrapper{
    width: 90%;
    clear: both;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .noMargin{
    margin-bottom: 0px!important;
    color: #262736;
  }
  

  #capabilities{
    display:block;
    margin-top: 30px;
    margin-bottom: 30px;
  }
    
    .registrationRight{
      display: block;
      color: white;
      width: 100%;
      text-align: left;
    }
    .registrationLeft{
      color: white;
      width: 97%;
      float: left;
      text-align: left;
    }

  #mobileFooter{
    display: none!important;
  }
  .chicken {
    width: 101.4%;
    float: left;
    margin: 15px 0 0;
  }
  .chicken a {
    width: 49%;
    float: left;
  }
  .chicken a:nth-child(odd) {
    margin-right: 0.3%;
  }
  .chicken a:nth-child(even) {
    margin-left: 0.3%;
  }

  h3#otherDebtSolutions{
    padding-top: 30px;
    margin-bottom: 50px;
  }

  .selectDropdown {
    background-color: white;
    color: black;
    width: 93%;
    height: 54.7px;
    padding: 3%;
    border-radius: 10px;
    margin-bottom: 24px;
    font-size: 21px;
    float: left;
    border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  }
}

@media only screen and (max-width: 1024px) {
  #desktopFooter{
    display: none;
  }

  .desktopCookieFix{
    display: none;
  }

  .cookieConsent button{
    display: block!important;
    position: unset!important;
    float: right!important;
    font-size: 13px!important;;
    margin-top: 5px!important;;
  }

  .footerHeadings{
    margin-left: unset;
  }
  
  .advantages, .disadvantages {
    padding-left: 0px;
  }

  .advantages > li {
    margin: 0;
    list-style: none;
    background-image: url(${tick});
    background-repeat: no-repeat;
    background-size: 40px;
    padding-left: 50px;
    padding-bottom: 20px;
    font-weight: 800;
  }

  .disadvantages > li {
    margin: 0;
    list-style: none;
    background-image: url(${cross});
    background-repeat: no-repeat;
    background-size: 40px;
    padding-left: 50px;
    padding-bottom: 20px;
    font-weight: 800;
  }

  select{
    background-color: white;
    color: black;
    border-radius: 10px;
    margin-bottom: 29px;
    font-size: 1.2rem;
    float: left;
    height: 43px;
    width: 87%;
    padding-left: 2%;
  }

  .registration{
    color: white;
    width: 100%;
    float: right;
    margin-right: 8%;
  }

  .selectDropdown {
    background-color: white;
    color: black;
    height: 40px;
    padding: 0%;
    border-radius: 10px;
    margin-bottom: 29px;
    font-size: 24px;
    float: left;
    border-right: 20px solid transparent;
    border-left: 12px solid transparent;
    width: 87% !important;
    margin-right: 2.5%;
  }

  #mobileFooter{
    display: block;
  }
}



@media only screen and (min-width: 990px) {
  .chicken {
    margin: 20px 0 0; 
  }
}

.chicken {
  margin-bottom: 0;
}


.leftBlock p {
  margin-left: 0px!important; 
  width: 100%;
}

.otherSolutions{
  margin-left: 12%;
}

.blueSection p {
  color: white!important;
}

.blueSection h3 {
  color: white!important;
}


  .Collapsible__trigger{
    display: block;
    color: white;
    background-color: #35DCB6;
    width: 100%;
    font-size: 30px;
    padding-left: 3%;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 30px;
    cursor: pointer;
  }

  .Collapsible__contentInner{
    padding-bottom:20px;
  }


.blueSection p {
  color: white!important;
}

.blueSection h3 {
  color: white!important;
}

.accordionWrapper{
  float:left;
}


.Collapsible__contentOuter{
  background-color:#262736;
  border-radius: 30px;
}
.Collapsible__contentOuter p{
  color: white;
  text-align: left;
  padding-left: 3%;
  padding-right: 3%;
  width: 100%;
}
.Collapsible__contentOuter h3{
  color: white;
  text-align: left;
  padding-left: 3%;
  margin: 0 0;
  padding-right: 3%;
  padding-top: 2%;
}

@media only screen and (max-width: 1024px) {

  #desktopAccordion{
    display: none;
  }

  .checkWrapper{
    display: block;
    clear: both;
    float: left;
    bottom: 4%;
    line-height: 19px;
    margin-top: 24px;
    width: 81%;
    margin-left: 9%;
  }

  .checkWrapper label{
    font-size: 14px;
    color: white;
  }

  .checkWrapper input{
    margin-left: 1%;
  }


  .mobileHeaderWrapper{
    padding-left: 10%;
    margin-top: 3vw;
  }
  .mobileHeaderWrapper > li{
    background-image: url(${mobileTick});
    background-repeat: no-repeat;
    background-size: 7vw;
    list-style: none;
    font-size: 5vw;
    padding-left: 9vw;
    line-height: 7vw;
  }



  .mobileButton{
    display: block!important;
  }

  .desktopButton{
    display: none!important;
  }

  .bottomBannerWrapper{
    display: table;
  }

  #bottomBannerText{
    color: white;
    margin-left: 8%;
    width: 60%;
    line-height: 19px;
    display: table-cell;
    vertical-align: middle;
    margin: 0 5% 1.75em;
    font-weight: 400;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-left: 5%;
    padding-right: 10%;
    font-size: 0.8rem!important;
    margin-left: 6%;

  }

  #bottomBannerImg{
    position: relative;
    display: table-cell;
    vertical-align: middle;
    float: left;
    width: 80%;
    margin-top: 46px;
    margin-bottom: 36px;
    margin-left: 18%;
    margin-right: 4%;
  }

  #footerLogo{
    width: 92%;
  }

  #desktopBottomBanner{
    display:none
  }

  .thirdWrapper{
    display: none;
  }

  .mobileAccordion{
    float: left;
  }

  .bullets{
    display: none;
  }


  .half{
    width: 50%;
    display: inline-block;
    float: left;
    height: 130px;
    color: #696969;
    font-size: 1rem;
    margin-top: 3px;
  }

  .half > li {
    color: #35DCB6;
  }

  .half > li > span {
    color: #696969;
  }

  .Collapsible__trigger{
    height: 41px;
    font-size: 1.2rem;
    line-height: 12px;
    background: none;
    background-color: #35DCB6;
    border: 1px solid white;
    border-radius: 0px;
    padding-left: 5.8%;
    width: 96%;
    margin: 0 auto;
    margin-bottom: 3px;
    border-radius: 10px;
    cursor: pointer;
  }
  

  .Collapsible__contentOuter p{
    padding-left: 1%;
    padding-right: 11%;
    width: 100%;
  }

  .Collapsible__contentOuter{
    border-radius: 10px;
    width: 96%;
    margin: 0 auto;
  }

  .Collapsible__contentOuter h3{
    padding-left: 5.8%;
    padding-right: 11%;
  
    width: 100%;
  }
}
  
`;
