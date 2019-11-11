import React from 'react';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Banner from 'components/Banner';
import Button from 'components/Button';
import PageWrapper from 'components/PageWrapper';
import BluePageWrapper from 'components/BluePageWrapper';
import CenterTitle from 'components/CenterTitle';
import CenterParagraph from 'components/CenterParagraph';
import Capabilities from 'components/Capabilities/Loadable';
import OptionBlocks from 'components/OptionBlocks/Loadable';
import DebtBlocks from 'components/DebtBlocks/Loadable';
import BottomBanner from 'components/BottomBanner';
import bottomBannerImage from 'components/Banner/images/bottomBannerImage.png';
import mobileBottomBannerImage from 'components/Banner/images/mobile_bottom_banner.png';
import DebtAccordion from '../../components/Accordion';
import MobileAccordion from '../../components/MobileAccordion';
import Example from '../../components/Example';
import MobileExample from '../../components/MobileExample';

import './css/homePage.scss';
import LeftParagraph from '../../components/LeftParagraph';

import qualifyImg from '../../images/qualify.png';
import listenImg from '../../images/we_listen.png';
import decideImg from '../../images/you_decide.png';
import moneyAdvice from '../../images/money_advice.png';


const HeaderText = styled.p`
@media only screen and (min-width: 1025px) {
  color: black;
  position: relative;
  display: block;
  float: left;
  bottom: 130px;
  z-index: 5000;
  left: 41%;
  width: 15%;
}
`

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    window.scrollTo(0, 0);

    this.contact = () => {
      const elmnt = document.getElementById("calculator");
      elmnt.scrollIntoView();
    };

    return (
      <div>
        <Banner style={{ pageTitle: { desktop: '7em', tablet: '4.2em', tabletPlus: '5.7em', responsive: '3.2em' }, textTransform: 'uppercase', textAlign: 'center' }} image={'Home'} text={''} />
        <PageWrapper>
          <Helmet>
            <title>Home</title>
            <meta name="description" content="We build teams that become an integral part of your business. Combining just the right blend of skills and resource, we can help you overcome your key marketing challenges." />
            <meta name="author" content="AZ/RB" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Helmet>
          <MediaQuery minDeviceWidth={1025}>
            <div className="topHeading" style={{ paddingBottom: '15px' }}>
              <CenterTitle>What is a Protected Trust Deed?</CenterTitle>
              <CenterParagraph>
                A protected trust deed is a voluntary, but legally binding agreement between an individual (who is struggling to maintain their credit commitments and has more than £6000 of unsecured debt) and their creditors which can only be carried out through a licensed insolvency practitioner (IP), also known as a trustee and is also overseen by the accountant in bankruptcy (AIB). A protected trust deed will be in place for a specific period of time normally 4 years although a longer period can be considered depending on your individual circumstances (the duration will always be agreed at the start of the arrangement).
              </CenterParagraph>

              <CenterParagraph style={{ marginBottom: '0px' }}>
                Once the creditors reach an agreement with the individual the protected trust deed then becomes protected allowing the debtor to begin a monthly repayment schedule based on what they can realistically afford whilst all interest and charges are guaranteed to be frozen. At the stage of protection, it protects the individual from any legal enforcement and all creditor contact including letters and phone calls will stop which have been included in the protected trust deed. Once the agreed period of time is over and the final payment is made into the protected trust deed any remaining debts that the debtor owns will be legally written off, which will allow them to become debt free as long as the individual has met all conditions of the agreement subject to some exceptions. If for any reason the creditors don’t agree to your trust deed becoming protected, then other Scottish debt solutions can be explored including a debt arrangement scheme or sequestration.
              </CenterParagraph>

            </ div>
          </ MediaQuery>
          <div style={{ marginTop: '10px' }}>
            <MobileAccordion />
          </div>
          <Capabilities />
          <div>
            <CenterTitle id="otherDebtSolutions">Debts that can be <span style={{ color: "#35DCB6" }}>included</span> in a Trust Deed</CenterTitle>
            <CenterParagraph>Whatever your financial circumstances a trust deed can help with multiple debts, whether you have built up credit on cards or catalogues which have now become unmanageable or even fallen into a circle of taking payday loans to pay off your bills, a trust deed may be able to help simply fill in your details to see if you qualify. </CenterParagraph>
            <CenterParagraph>Here is a list of some of the following debts that can be included</CenterParagraph>
            <div className="thirdWrapper bullets">
              <ul className="third">
                <li><span>Credit Cards</span></li>
                <li><span>Store Cards</span></li>
                <li><span>Personal Loans</span></li>
              </ul>
              <ul className="third">
                <li><span>Overdrafts</span></li>
                <li><span>Pay Day Loans</span></li>
                <li><span>Old Council Tax</span></li>
              </ul>
              <ul className="third">
                <li><span>Old Utility Bills</span></li>
                <li><span>Catalogues</span></li>
                <li><span>Old HMRC Debts</span></li>
              </ul>
            </div>
          </div>
          <div className="mobileThirdWrapper">
            <ul className="half">
              <li><span>Credit Cards</span></li>
              <li><span>Store Cards</span></li>
              <li><span>Personal Loans</span></li>
              <li><span>Overdrafts</span></li>
              <li><span>Pay Day Loans</span></li>
            </ul>
            <ul className="half">
              <li><span>Old Council Tax</span></li>
              <li><span>Old Utility Bills</span></li>
              <li><span>Catalogues</span></li>
              <li><span>Old HMRC Debts</span></li>
            </ul>
          </div>
          <MobileExample />
          <MediaQuery minDeviceWidth={1025}>
            <div>
              <Example />
              <CenterTitle>How a Trust Deed works</CenterTitle>
              <div id="desktopAccordion">
                <DebtAccordion />
              </div>
            </div>
          </ MediaQuery>
          <CenterTitle style={{ marginTop: '20px' }}>How we can help</CenterTitle>
          <CenterParagraph>3 simple steps how we can help</CenterParagraph>
          <div className="thirdWrapper" style={{ textAlign: 'center', width: '100%' }}>
            <div className="third" style={{ marginLeft: '0px', width: '33%' }}>
              <CenterParagraph style={{ marginTop: '0px', fontSize: '1.6rem', height: '50px' }}>Check if you can <span style={{ color: "#35DCB6" }}>Qualify</span> today</CenterParagraph>
              <img style={{ width: '50%' }} src={qualifyImg} />
              <CenterParagraph>Simply fill in your details to see if you qualify and you will be contacted from an expert advisor from our FCA authorised partners.</CenterParagraph>
            </div>
            <div className="third" style={{ marginLeft: '0px', width: '33%' }}>
              <CenterParagraph style={{ marginTop: '0px', fontSize: '1.6rem', height: '50px' }}>Consultation - <span style={{ color: "#35DCB6" }}>We listen</span></CenterParagraph>
              <img style={{ width: '50%' }} src={listenImg} />
              <CenterParagraph>One of our friendly, expert’s advisors will be in touch to go through your options to find the right solution for you based on your individual circumstances.</CenterParagraph>
            </div>
            <div className="third" style={{ marginLeft: '0px', width: '33%' }}>
              <CenterParagraph style={{ marginTop: '0px', fontSize: '1.6rem', height: '50px' }}>You <span style={{ color: "#35DCB6" }}>Decide</span></CenterParagraph>
              <img style={{ width: '50%' }} src={decideImg} />
              <CenterParagraph>Once you have been advised on your options, you decide what debt solution is best for you. All advice is free, confidential and under no obligation.</CenterParagraph>
            </div>
          </div>
          <Button className="desktopButton" onClick={this.contact} style={{ backgroundColor: '#F8A761', color: 'white', lineHeight: '30px', float: 'none', listStyle: 'none', display: 'block', marginBottom: '30px', clear: 'both', cursor:'pointer'  }}><input type="submit" value="REQUEST HELP TODAY" /></Button>

          <OptionBlocks />
          <Button className="mobileButton" onClick={this.contact} style={{ backgroundColor: '#35DCB6', color: 'white', textAlign: 'center', float: 'none', listStyle: 'none', display: 'block', clear: 'both', margin: '0 auto', marginBottom: '20px', cursor:'pointer'  }}><input type="submit" value="REQUEST HELP TODAY" /></Button>
        </PageWrapper>
        <BluePageWrapper>
          <PageWrapper>
            <div className="bottomBannerWrapper">
              <img id="bottomBannerImg" src={moneyAdvice} />
              <p id="bottomBannerText">
                To find out more about managing your money and getting free advice, visit <a style={{color:'white'}} href="https://www.moneyadviceservice.org.uk/en" target="_blank">Money Advice Service</a>, independant service set up to help people manage
                their money
             </p>
            </div>
          </PageWrapper>
        </BluePageWrapper>
      </div >
    );
  }
}
