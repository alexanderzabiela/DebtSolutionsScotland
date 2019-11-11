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
import CenterParagraph from '../CenterParagraph';
import LeftTitle from '../LeftTitle';
import CenterTitle from '../CenterTitle';
import Button from './Button';
import Icon from './Icon';
import IconWrapper from './IconWrapper';
import TextWrapper from './TextWrapper';

class DebtBlocks extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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

  render() {
    return (
      <div>
        <CenterTitle style={{ marginTop: '40px' }}>MOST DEBTS WE DEAL WITH</CenterTitle>
        <CenterParagraph>We understand that a small change in people’s circumstances can make things more difficult to maintain your monthly outgoings. Here is just some examples of the debts we can help with.</CenterParagraph>
        <Wrapper display={this.display}>
          <LeftBlock>
            <IconWrapper><Icon src={require('./images/CREDIT-CARDS.png')} /></IconWrapper>
            <TextWrapper>
              <LeftTitle>CREDIT CARDS</LeftTitle>
              <LeftParagraph>Credit cards can easily build up and become unmanageable on a monthly basis, which in a result can possibly lead into missed payment and future charges being applied. If this sounds similar, then clear money could possible help reduce your monthly payments.</LeftParagraph>
            </TextWrapper>
          </LeftBlock>
          <RightBlock>
            <IconWrapper><Icon src={require('./images/STORE-CARDS.png')} /></IconWrapper>
            <TextWrapper>
              <LeftTitle>STORE CARDS</LeftTitle>
              <LeftParagraph>Store Cards can easily build up which results in higher monthly payments and more interest being applied If this sounds similar, then clear money could possible help reduce your monthly payments.</LeftParagraph>
            </TextWrapper>
          </RightBlock>
          <LeftBlock>
            <IconWrapper><Icon src={require('./images/PAYDAY-LOANS.png')} /></IconWrapper>
            <TextWrapper>
              <LeftTitle>LOANS</LeftTitle>
              <LeftParagraph>Weather you have an unsecured loan or a pay day loan, we can help as we know that interest rates can result to you falling into a circle of taking out a new loan to pay of an existing one. Let us look to see if we can help.</LeftParagraph>
            </TextWrapper>
          </LeftBlock>
          <RightBlock>
            <IconWrapper><Icon src={require('./images/OVERDUE-BILLS.png')} /></IconWrapper>
            <TextWrapper>
              <LeftTitle>OVERDUE BILLS</LeftTitle>
              <LeftParagraph>We can help with overdue bills whether it be previous council tax arrears, mortgage shortfalls, disconnected utility bills and disconnected mobile phone contracts, it is vital that you maintain your current household bills, and this becomes a priority.</LeftParagraph>
            </TextWrapper>
          </RightBlock>
        </Wrapper>
      </div>
    );
  }
}

export default DebtBlocks;
