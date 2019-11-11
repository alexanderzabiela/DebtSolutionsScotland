/**
*
* Capabilities
*
*/
import { NavLink } from 'react-router-dom';
import React from 'react';
import MediaQuery from 'react-responsive';
import PageSectionTitle from 'components/PageSectionTitle';
import Wrapper from './Wrapper';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';
import CenterParagraph from '../CenterParagraph';
import CenterTitle from '../CenterTitle';
import Button from './Button';
import LeftParagraph from '../LeftParagraph';

class Capabilities extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Wrapper id="capabilities">
        <LeftBlock>
          <CenterTitle className="CapabilitiesTitle" style={{ lineHeight: '1', width: '85%', color: '#35DCB6' }}>Some advantages of a Protected Trust Deed</CenterTitle>
          <LeftParagraph style={{ paddingTop: '0px' }}>
            <ul className="advantages">
              <li>No upfront fees or charges with a fixed affordable monthly payment.</li>
              <li>Potentially legally write off up to 85% of your debt.</li>
              <li>Creditor contact including legal action will be stopped once protected.</li>
              <li>All interest and charges guaranteed to be frozen.</li>
            </ul>
          </LeftParagraph>
        </LeftBlock>
        <RightBlock>
          <CenterTitle className="CapabilitiesTitle" style={{ lineHeight: '1', width: '85%', color: '#35DCB6' }}>Some disadvantages of a Protected Trust Deed</CenterTitle>
          <LeftParagraph style={{ paddingTop: '0px' }}>
          <ul className="disadvantages">
              <li>Your credit rating will be adversely affected.</li>
              <li>The trust deed will fail if you don’t maintain your monthly payments.</li>
              <li>Secured debts can’t be included into the arrangement.</li>
              <li>Creditors can vote against a trust deed becoming protected.</li>
            </ul>
          </LeftParagraph>
        </RightBlock>
      </Wrapper>
    );
  }
}

export default Capabilities;
