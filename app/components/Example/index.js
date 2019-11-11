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
import LeftTitle from '../LeftTitle';

class Example extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Wrapper id="capabilities">
        <CenterTitle style={{ color: '#35DCB6' }}>A Trust Deed Example</CenterTitle>
        <LeftBlock>
          <p style={{ display: 'inline-block', lineHeight: '7px', margin: '0px' }}>Amount of unsecured debt:</p><span style={{ float: 'right' }}>£30,000</span>
        </LeftBlock>
        <RightBlock>
        <p style={{ display: 'inline-block', lineHeight: '7px', margin: '0px' }}>New monthly payment:</p><span style={{ float: 'right' }}>£200</span>
        </RightBlock>
        <LeftBlock>
          <p style={{ display: 'inline-block', lineHeight: '7px', margin: '0px' }}>Number of unsecured creditors:</p><span style={{ float: 'right' }}>7</span>
        </LeftBlock>
        <RightBlock>
        <p style={{ display: 'inline-block', lineHeight: '7px', margin: '0px' }}>Monthly saving:</p><span style={{ float: 'right' }}>£650</span>
        </RightBlock>
        <LeftBlock style={{backgroundColor:'#B4B9FF'}}>
          <p style={{ display: 'inline-block', lineHeight: '7px', margin: '0px' }}>Current monthly payment:</p><span style={{ float: 'right' }}>£850</span>
        </LeftBlock>
        <RightBlock>
        <p style={{ display: 'inline-block', lineHeight: '7px', margin: '0px' }}>Total repaid over 48 months:</p><span style={{ float: 'right' }}>£9,600</span>
        </RightBlock>
        <LeftParagraph style={{color:'white', marginLeft:'4%'}}>* all trust deed fees are incorporated in your new monthly payment and are negotiated by the IP</LeftParagraph>
      </Wrapper>
    );
  }
}

export default Example;
