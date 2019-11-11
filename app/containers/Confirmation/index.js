import React from 'react';
import MediaQuery from 'react-responsive';
import { Helmet } from 'react-helmet';

import PageWrapper from 'components/PageWrapper';
import CenterTitle from 'components/CenterTitle';
import CenterParagraph from 'components/CenterParagraph';
import LeftParagraph from 'components/LeftParagraph';
import Wrapper from './Wrapper';
import BluePageWrapper from 'components/BluePageWrapper';

import thanks1 from '../../images/thanks.png';
import call from '../../images/call.png';
import liveChat from '../../images/live_chat.png';
import moneyAdvice from '../../images/money_advice.png';

export class ConfirmationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    window.scrollTo(0, 0);

    return (
      <div>
        <Helmet>
          <title>Thank you for your enquiry</title>
          <meta name="description" />
        </Helmet>
        <PageWrapper>
          <CenterTitle style={{ marginTop: '20px' }}>
            Thank you for your enquiry
            </CenterTitle>
          <CenterParagraph>
            Thank you for your enquiry, your details have now been passed onto a expert advisor who will call shortly to see if you qualify.
          </CenterParagraph>
          <div style={{ width: '100%' }}>
            <img style={{ display: 'block', margin: '0 auto', width: '85%' }} src={thanks1} />
          </div>
          <div style={{ width: '100%' }}>
            <div className="thirdWrapper" style={{ textAlign: 'center', width: '70%' }}>
              <div className="third" style={{ marginLeft: '0px', width: '49%' }}>
                <img style={{ width: '50%' }} src={call} />
              </div>
              <div className="third" style={{ marginLeft: '0px', width: '49%' }}>
                <img style={{ width: '50%' }} src={liveChat} />
              </div>
            </div>
            <div className="thirdWrapper" style={{ textAlign: 'center', width: '70%', fontSize:'2.2rem', lineHeight:'38px' }}>
              <div className="third" style={{ marginLeft: '0px', width: '49%' }}>
                <CenterTitle className="noMargin">Simply Call Us On</CenterTitle>
                <a href="tel:0330 124 5590"><CenterTitle>0300 124 5590</CenterTitle></a>
              </div>
              <div className="third" style={{ marginLeft: '0px', width: '49%' }}>
                <CenterTitle className="noMargin">Live Chat</CenterTitle>
                <CenterTitle>Click the chat option to arrange</CenterTitle>
              </div>
            </div>
          </div>

           <CenterTitle style={{ marginTop: '20px', color:'#262736' }}>
            Take Action Today
            </CenterTitle>
            <CenterParagraph>An expert advisor will contact you very shortly by telephone from our authorised debt solution partners who will discuss your options in detail alternatively call our debt team now on <a style={{color:'#35DCB6'}} href="tel:0330 124 5590">0330 124 5590</a></CenterParagraph>
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
      </div>
    );
  }
}

export default ConfirmationPage;


