/**
*
* Capabilities
*
*/

import React from 'react';
// import styled from 'styled-components';
import PageSectionTitle from 'components/PageSectionTitle';
import Wrapper from './Wrapper';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';
import LeftParagraph from '../LeftParagraph';
import LeftTitle from '../LeftTitle';
import Button from './Button';
import Icon from './Icon';
import IconWrapper from './IconWrapper';
import TextWrapper from './TextWrapper';


import qualifyImg from '../../images/qualify.png';
import listenImg from '../../images/we_listen.png';
import decideImg from '../../images/you_decide.png';

class OptionBlocks extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.showCapabilities();
  }

  showCapabilities() {
    if (window.location.href.indexOf('client') > -1) {
      this.display = 'none';
    } else {
      this.display = 'block';
    }
  }

  contact = () => {
    const elmnt = document.getElementById("calculator");
    elmnt.scrollIntoView();

  };



  render() {
    return (
      <Wrapper display={this.display}>
        <LeftBlock>
          <IconWrapper><Icon alt="qualify_icon" src={qualifyImg} /></IconWrapper>
          <TextWrapper>
            <LeftTitle style={{ marginTop: '0px', fontSize: '1.4rem', width: '100%' }}>Check if you can <span style={{ color: "#35DCB6" }}>Qualify</span> Today</LeftTitle>
            <LeftParagraph>Our advisors have the knowledge and experience, so you can trust what we say making sure we put you first.</LeftParagraph>
          </TextWrapper>
        </LeftBlock>
        <RightBlock>
          <IconWrapper><Icon src={listenImg} /></IconWrapper>
          <TextWrapper>
            <LeftTitle style={{ marginTop: '0px', fontSize: '1.4rem', width: '100%' }}>Consultation - <span style={{ color: "#35DCB6" }}>We listen</span></LeftTitle>
            <LeftParagraph>Our expert advisor will always carry out a full assessment of your individual circumstances making sure we capture all information, so we can give you clear and ethical advice.</LeftParagraph>
          </TextWrapper>
        </RightBlock>
        <LeftBlock>
          <IconWrapper><Icon alt="brand_development_icon" src={qualifyImg} /></IconWrapper>
          <TextWrapper>
            <LeftTitle style={{ marginTop: '0px', fontSize: '1.4rem', width: '100%' }}>You <span style={{ color: "#35DCB6" }}>decide</span></LeftTitle>
            <LeftParagraph>Once you have been advised on your options, you decide what debt solution is best for you. All advice is free, confidential and under no obligation.</LeftParagraph>
          </TextWrapper>
        </LeftBlock>
      </Wrapper>
    );
  }
}

export default OptionBlocks;
