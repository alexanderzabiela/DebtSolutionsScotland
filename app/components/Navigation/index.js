/**
*
* Navigation
*
*/

import React from 'react';
import { NavLink } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import Links from './Links';
import Link from './Link';
import Logo from '../Logo';
import DropdownFooter from './DropdownFooter';
import MobileMenuIcon from './MobileMenuIcon';
import MobileLinkList from './MobileLinkList';
import DropdownMenu from './DropdownMenu';
import logoImage from '../../images/logo_full_colour.png';
import mobileMenu from '../../images/mobile_menu.png';
import Footer from '../Footer/index';
import Button from '../Button';

class Navigation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isMobileOpen: false,
    };
  }

  shouldComponentUpdate() {
    return true;
  }


  toggleDropdown = () => {
    const x = document.getElementById('DropdownMenu');
    const y = document.getElementById('dropdownMobileFooter');
    if (!this.state.isMobileOpen) {
      x.style.display = 'block';
      y.style.display = 'none';
    } else x.style.display = 'none';
    this.state.isMobileOpen = !this.state.isMobileOpen;
  };


  otherDebtSolutions = () => {
    this.toggleDropdown();
    const elmnt = document.getElementById("otherDebtSolutions");
    elmnt.scrollIntoView();
  };

  whatIsATrustDeed = () => {
    this.toggleDropdown();
    const elmnt = document.getElementById("whatIsATrustDeed");
    elmnt.scrollIntoView();
  }

  howTrustDeedWorks = () => {
    this.toggleDropdown();
    const elmnt = document.getElementById("whatIsATrustDeed");
    elmnt.scrollIntoView();
  }

  contact = () => {
    this.toggleDropdown();
    const elmnt = document.getElementById("calculator");
    elmnt.scrollIntoView();

  };


  render() {
    return (
      <div style={{ backgroundColor: '#35DCB6' }}>
        <Wrapper>
          <NavLink to="/"><Logo src={logoImage}></Logo></NavLink>
          <MobileMenuIcon src={mobileMenu} onClick={this.toggleDropdown} />
          <Links style={{ marginTop: '30px' }}>
            <Button onClick={this.contact} className="requestHelp" style={{ color: 'white', width: '27%!', fontSize: '28px', lineHeight: '20px', cursor:'pointer' }}>Request Help Today</Button>
            <Link href="tel:0300 124 5590" style={{ marginRight: '3%', lineHeight: '44px', border: 'none' }}>0300 124 5590</Link>
          </Links>
        </Wrapper>
        <DropdownFooter id="dropdownDesktopFooter">
          <Footer id="DropdownFooter" displayLogo="none" />
        </DropdownFooter>
        <DropdownMenu id="DropdownMenu">
          <MobileLinkList />
          <Link onClick={this.contact}>Do I Qualify</Link>
          <Link onClick={this.whatIsATrustDeed}>What is a Trust Deed</Link>
          <Link onClick={this.otherDebtSolutions} >Debts included in a Trust Deed</Link>
          <Link onClick={this.howTrustDeedWorks}>How a Trust Deed Works</Link>
          <MobileLinkList />
          <DropdownFooter id="dropdownMobileFooter">
            <Footer id="Footer" displayLogo="none" />
          </DropdownFooter>
        </DropdownMenu>
      </div >
    );
  }
}

Navigation.propTypes = {

};

export default Navigation;
