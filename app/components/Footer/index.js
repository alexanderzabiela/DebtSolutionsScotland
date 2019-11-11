import React from 'react';
import { NavLink } from 'react-router-dom';

import MediaQuery from 'react-responsive';


// import LocaleToggle from 'containers/LocaleToggle';
import Container from './Footer';
import Wrapper from './Wrapper';
import SocialMedia from './SocialMedia';
import AdditonalReading from './AdditonalReading';
import Logo from '../Logo';

import whiteLogo from '../../images/logo_full_colour.png';

import navWrapper from '../Navigation/Wrapper';
import Links from '../Navigation/Links';
import Link from '../Navigation/Link';
import LeftParagraph from '../LeftParagraph';
import LeftTitle from '../LeftTitle';
import CenterTitle from '../CenterTitle';


import './css/footer.scss';


function Footer(props) {
  let displayStyle = props.displayLogo;
  if (!props.displayLogo) displayStyle = 'block';
  const theme = {
    display: displayStyle,
  };


  const otherDebtSolutions = () => {
    const elmnt = document.getElementById("otherDebtSolutions");
    elmnt.scrollIntoView();
  };

  const contact = () => {

    const elmnt = document.getElementById("calculator");
    elmnt.scrollIntoView();
  };

  return (
    <Container id="footerContainer">
      <Wrapper style={{ paddingBottom: '90px' }}>
        <navWrapper>
          <Logo id="footerLogo" src={whiteLogo} theme={theme} style={{ marginTop: '0px', maxWidth: '340px' }} />
          <div id='mobileFooter' style={{ display: 'block', float: 'left', width: '100%' }}>
            <div className="thirdWrapper" style={{ width: '100%', display: 'inline-block', marginTop: '15px' }}>
              <div className="third" style={{ marginLeft: '0px', width: '100%' }}>
                <h3 className="footerHeadings">LEGAL</h3>
                <Links style={{ display: 'block', listStyle: 'none', float: 'left', paddingLeft: '0px', marginTop: '0px', width: '50%' }}>
                  <NavLink exact to="/privacy" ><li style={{ color: 'white', float: 'left' }}>Privacy Policy</li></NavLink>
                  <NavLink exact to="/cookies"><li style={{ color: 'white', float: 'left' }}>Cookies Policy</li></NavLink>
                </Links>
              </div>
            </div>
            <Links style={{ width: '100%', paddingLeft: '0px', display: 'block' }}>
              <p className="registrationRight">At debtsolutionsscotland.com we do not give advice. On completion of your enquiry form, we will introduce you to an FCA authorised company. We will use the contact details you have provided to us on the form to make this introduction so they can conduct your debt help application. We will not store your information after it has been passed over to that provider, this will take no more than 24 hrs. A senior advisor will contact you by phone who will go through your options in detail.</p>
            </Links>
            <Links style={{ width: '100%', paddingLeft: '0px', display: 'block', color: '#35DCB6', textAlign: 'center', fontSize: '10vw', marginTop: '0px', marginBottom: '0px' }}>
              <a style={{ color: 'inherit' }} href="tel:0300 124 5590">0300 124 5590</a>
            </Links>

          </div>
          <div id='desktopFooter'>
            <div className="thirdWrapper" style={{ width: '70%', display: 'inline-block', marginTop: '0px', marginBottom: '0px' }}>
              <div className="third" style={{ marginLeft: '0px', width: '70%', display: 'block', height: '2px' }}>
                {/* <Links style={{ display: 'block', listStyle: 'none', paddingLeft: '0px' }}>
                  <h3 className="footerHeadings">ADDITIONAL READING</h3>
                  <NavLink exact to="/privacy"><li style={{ color: 'white', float: 'left', marginLeft: '2%' }}>Accountant in Bankruptcy debt advice & Information package</li></NavLink>
                  <NavLink exact to="/cookies"><li style={{ color: 'white', float: 'left', marginLeft: '2%' }}>Accountant in Bankruptcy Trust deed guide</li></NavLink>
                </Links> */}
              </div>
              <div className="third" style={{ marginLeft: '0px', width: '30%' }}>
                <Links style={{ display: 'block', listStyle: 'none', paddingLeft: '0px' }}>
                  <h3 className="footerHeadings">LEGAL</h3>
                  <NavLink exact to="/privacy" style={{ color: 'white', float: 'left', marginLeft: '2%' }}>Privacy Policy</NavLink>
                  <br />
                  <NavLink exact to="/cookies" style={{ color: 'white', float: 'left', marginLeft: '2%' }}>Cookies Policy</NavLink>
                </Links>
              </div>
            </div>
            <Links style={{ width: '100%', paddingLeft: '0px' }}>
              <p className="registrationRight">At debtsolutionsscotland.com we do not give advice. On completion of your enquiry form, we will introduce you to an FCA authorised company. We will use the contact details you have provided to us on the form to make this introduction so they can conduct your debt help application. We will not store your information after it has been passed over to that provider, this will take no more than 24 hrs. A senior advisor will contact you by phone who will go through your options in detail.</p>
            </Links>
          </div>
        </navWrapper>
      </Wrapper>
    </Container>
  );
}

Footer.propTypes = {
  displayLogo: React.PropTypes.string,
};

export default Footer;
