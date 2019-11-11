/**
*
* Banner
*
*/
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import InputRange from 'react-input-range';


import BannerImage from './BannerImage';
import CenterTitle from '../CenterTitle';
import LeftParagraph from '../LeftParagraph';
import RightBlock from './RightBlock';
import LeftBlock from './LeftBlock';
import Button from '../Button';
import ValueBox from './ValueBox';

import PageWrapper from 'components/PageWrapper';



import 'react-input-range/lib/css/index.css';
import './css/slider.scss';

import headerBackgroundImg from './images/headerBackground.png';
import tick from './images/tick.png';
import LeftTitle from '../LeftTitle';
import CenterParagraph from '../CenterParagraph';

const Wrapper = styled.div`


color: white;
position: relative;
z-index: 1;
float: left;
width: 100%;
display: block;
float: left;
margin-top: -2px;

& .underline {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  border-bottom: 4px solid #ff682c;
}

& h3 {
  color: white;
  padding-top: 35px;
  margin-bottom: 10px!important;
}

& p {
  color: white;
}


@media only screen and (min-width: 1025px) {
  & .underline {
    border-bottom: 4px solid #ff682c;
  }
  margin-bottom: -130px;

}



`;


const HeaderBackground = styled.img`

display: block;
width: 100%;

`

const HeaderWrapper = styled.div`
position: absolute;
z-index: 10;
top: 0px;
padding-top: 2%;
left: 11%;
width: 40%;
line-height: 50px;

@media only screen and (min-width: 1025px) {
  left: 7%!important;
  width: 40%;
}

@media only screen and (min-width: 1600px) {
  left: 10%!important;
  width: 35%!important;
  top: 20px;
}
@media only screen and (min-width: 1800px) {!important;
  left: 16%!important;
}


&h3{
  font-size: 1.2rem;
}
`
const HeaderWrapperMobile = styled.div`
  position: absolute;
  line-height: 1;
  z-index: 10;
  top: 10px;
  width: 90%;


  `

const HeaderText = styled.p`
@media only screen and (max-width: 1024px) {
  margin-top: 5px;
}
@media only screen and (min-width: 1025px) {
  position: absolute;
  left: 9%;
  font-size: 2.1rem;
  width: 75%;
  -webkit-text-align: center;
  -webkit-text-align: center;
  text-align: center;
  top: 20px;
  line-height: 1;
  font-weight: 800;
}

@media only screen and (min-width: 1100px) {
  font-size: 2.rem;
}
@media only screen and (min-width: 1200px) {
  font-size: 2.6em;

}
@media only screen and (min-width: 1400px) {
  font-size: 3rem;
  padding-top: 20px;
}
@media only screen and (min-width: 1500px) {
  font-size: 3.2rem;
}
@media only screen and (min-width: 1600px) {
  font-size: 3.4rem;
}
@media only screen and (min-width: 1700px) {
  font-size: 3.6rem;
}
@media only screen and (min-width: 1800px) {
  font-size: 3.6rem;
    top: 30px;
}

@media only screen and (min-width: 1900px) {
  font-size: 3.8rem;
  top: 30px;
}
@media only screen and (min-width: 2100px) {
  font-size: 5.6rem;
  top: 30px;
}

`

const Calculator = styled.div`

@media only screen and (min-width: 1025px) {
color: white;
    background-color: #262736;
    position: relative;
    z-index: 10;
    bottom: 60px;
    height: 485px;
    margin: 0 auto;
    border-radius: 30px;

& .underline {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  border-bottom: 4px solid #ff682c;
}

}

@media only screen and (min-width: 990px) {
  max-width: 100%;
}

@media only screen and (min-width: 1025px) {
  max-width: 90%;
}

@media only screen and (min-width: 1600px) {
  max-width: 80%;
}
@media only screen and (min-width: 1800px) {
  max-width: 63%;
}

@media only screen and (min-width: 2000px) {
  max-width: 1200px;
  }

@media only screen and (min-width: 1025px) {
  & .underline {
    border-bottom: 4px solid #ff682c;
  }

  & p {
    margin-left: 7%!important;
    width: 90%!important;
    font-size: 1.35rem;
  }

  input[type="text"] {
    font-size: 1.35rem;
    margin-bottom: 20px;
  }

}

@media only screen and (max-width:1440px) {
  width: 90%;
}

@media only screen and (max-width: 1024px) {
  color: white;
  background-color: #262736;
  position: block;
  z-index: 10;
  bottom: 150px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3%;
  float: left;
  padding-bottom: 25px;

  & p, h3 {
    text-align:center;
    width: 90%!important;
  }

}


& p {
  width: 90%;
  margin-bottom: 15px;
}


`;

const BannerText = styled.h1`
color: #FFFFFF;
position: absolute;
bottom: 0px;
margin-bottom: 0px;
padding-bottom: 5%;
line-height: 1em;
width: 100%;
text-transform: ${(props) => props.textTransform};


background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.33) 25%, rgba(0,0,0,0.64) 60%, rgba(0,0,0,0.65) 100%);
background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.33) 25%,rgba(0,0,0,0.64) 60%,rgba(0,0,0,0.65) 100%);
background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.33) 25%,rgba(0,0,0,0.64) 60%,rgba(0,0,0,0.65) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );

& span {
  max-width: 1060px;
  margin: 0 auto;
  display: block;
  text-allign: left;

  @media only screen and (min-width: 200px){
    margin-bottom: 10px;
    max-width: 90%;
    text-align: ${(props) => props.textAlign};
  }

  @media only screen and (min-width: 1025px) {
    max-width: 640px;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 990px) {
    max-width: 870px;
  }
  @media only screen and (min-width: 1025px) {
    padding-top: 75px;
    max-width: 1060px;
  }
}

& .trademark {
  font-size: 0.53em;
  display: inline;
  vertical-align: middle;
}

@media only screen and (min-width: 300px) {
  font-size: ${(props) => props.pageTitle.responsive};
}
@media only screen and (min-width: 700px) {
  font-size: ${(props) => props.pageTitle.tablet};
}
@media only screen and (min-width: 990px) {
  font-size: ${(props) => props.pageTitle.tabletPlus};
}
@media only screen and (min-width: 1025px) {
  font-size: ${(props) => props.pageTitle.desktop};
}


`;

BannerText.defaultProps = {
  pageTitle: {
    desktop: '5.5em',
    tabletPlus: '4.5em',
    tablet: '3em',
    responsive: '2em',
  },
  textTransform: 'none',
  textAlign: 'left',
};

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 7500,
      value2: 500,
      value3: 1000,
      value4: 'default',
    };
  }

  render() {
    this.url = window.location.href;
    this.submit = function () {
      document.getElementById("submitForm").click();
    }

    this.debtLevelChange = function (event) {
      this.setState({ value1: event.target.value });
    };
    this.howManyDebtsChange = function (event) {
      this.setState({ value2: event.target.value });
    };
    this.employmentStatusChange = function (event) {
      this.setState({ value3: event.target.value });
    };

    return (
      <Wrapper>
        <MediaQuery maxWidth={1024}>
          <div>
            <BannerImage alt={`${this.props.image} banner`} title={`${this.props.image} banner`} src={require(`./images/mobile_banner.jpg`)} />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1280} minWidth={1025}>
          <div>
            <BannerImage alt={`${this.props.image} banner`} title={`${this.props.image} banner`} src={require(`./images/${this.props.image}_Banner_medium.jpg`)} />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={1281}>
          <div>
            <BannerImage alt={`${this.props.image} banner`} title={`${this.props.image} banner`} src={require(`./images/${this.props.image}_Banner_large.jpg`)} />
          </div>
        </MediaQuery>
        <MediaQuery minWidth={1025}>
          <PageWrapper>
            <HeaderWrapper>
              <ul className="headerWrapper">
                <li style={{ paddingTop: '0px', color: 'black', backgroundImage: 'unset', fontSize: '2.4vw', paddingLeft: '0px' }}>Struggling with debt? Potentially write off up to 80% of debt with a trust deed </li>
                <li style={{ paddingTop: '0px', color: 'black' }}>One fixed affordable monthly payment</li>
                <li style={{ paddingTop: '0px', color: 'black' }}>Legislated government scheme</li>
                <li style={{ paddingTop: '0px', color: 'black' }}>No set up fees</li>
                <li style={{ paddingTop: '0px', color: 'black' }}>Creditor pressure stopped</li>
              </ul>
            </ HeaderWrapper>
          </PageWrapper>
        </MediaQuery>
        <Calculator className="calulator" id="calculator">
          <CenterTitle>Do I Qualify?</CenterTitle>
          <form style={{float:'left'}} method="post" action="https://www.formstack.com/forms/index.php" id="fsForm3084807">
            <LeftBlock style={{ marginTop: '20px' }}>
              <div>
                <input type="hidden" name="form" value="3084807" />
                <input type="hidden" name="viewkey" value="VMUjLrZbeM" />
                <input type="text" id="field65089322" required name="field65089322" placeholder="First Name" />
                <input type="text" required id="field65089323" name="field65089323" placeholder="Second Name" />
                <input type="tel" required id="field65089333" name="field65089333" placeholder="Phone Number" />
                <input style={{ marginBottom: '30px' }} required type="email" id="field65089324" name="field65089324" placeholder="Email Address" />
                <input type="hidden" id="field65089325" name="field65089325" value={this.state.value1} />
                <input type="hidden" id="field65089332" name="field65089332" value={this.state.value2} />
                <input type="hidden" id="field65089327" name="field65089327" value={this.state.value3} />
                <input type="hidden" name="_submit" value="1" />
                <input type="hidden" name="referrer" id="referrer3084807" value={this.url} />
                <input type="hidden" name="referrer_type" id="referrer_type3084807" value="link" />
                <Button style={{ display: 'none' }}><input type="submit" id="submitForm" /></Button>
              </div>
            </LeftBlock>
            <RightBlock style={{ marginTop: '20px' }}>
              <div>
                <select onChange={(e) => this.debtLevelChange(e)} value={this.props.value1}>
                  <option disabled selected>What is your debt level? </option>
                  <option value="£1 - £2999">£1 - £2,999 </option>
                  <option value="£3000 - £4999">£3,000 - £4,999</option>
                  <option value="£5000 - £7999">£5,000 - £7,999</option>
                  <option value="£5000 - £7999">£8,000 - £9,999</option>
                  <option value="£10000">£10,000+</option>
                </select>
              </div>
              <div>
                <select onChange={(e) => this.howManyDebtsChange(e)} value={this.props.value2}>
                  <option disabled selected>How many debts do you have?</option>
                  <option value="1-2">1-2</option>
                  <option value="3-4">3-4</option>
                  <option value="5-6">5-6</option>
                  <option value="7-8">7-8</option>
                  <option value="9-10">9-10</option>
                  <option value="10+">10+</option>
                </select>
              </div>
              <div>
                <select onChange={(e) => this.employmentStatusChange(e)} value={this.props.value3}>
                  <option disabled selected>Employment status?</option>
                  <option value="Employed">Employed</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Benefits">Benefits</option>
                  <option value="Retired">Retired</option>
                </select>
                <Button onClick={this.submit} style={{ color: 'black', backgroundColor: '#35DCB6', lineHeight: '30px', width: '93%', cursor:'pointer' }}>CHECK IF I QUALIFY</Button>
              </div>
            </RightBlock>
            <div className="checkWrapper">
              <label style={{ color: 'white' }} htmlFor="acceptTerms">We will use your personal information to submit your application to a suitable FCA authorised
              provider to conduct your debt help application. We will not store your information after it
                  has been passed over to that provider, this will take no more than 24 hrs. <b>By ticking
        this box</b> you understand and accept the use of your data for this purpose.</label>
              <input type="checkbox" required id="acceptTerms" name="accept" />
            </div>
          </form>
        </ Calculator>
        <MediaQuery maxWidth={1024}>
          <HeaderWrapperMobile>
            <ul className="mobileHeaderWrapper">
              <li style={{ paddingTop: '0px', color: 'black', backgroundImage: 'unset', fontSize: '7vw', paddingLeft: '0px', marginBottom: '10px' }}>Struggling with debt? Potentially write off up to 80% of debt with a trust deed </li>
              <li style={{ paddingTop: '0px', color: 'black' }}>One fixed affordable monthly payment</li>
              <li style={{ paddingTop: '0px', color: 'black' }}>Legislated government scheme</li>
              <li style={{ paddingTop: '0px', color: 'black' }}>No set up fees</li>
              <li style={{ paddingTop: '0px', color: 'black' }}>Creditor pressure stopped</li>
            </ul>
          </ HeaderWrapperMobile>
        </MediaQuery>
      </Wrapper>
    );
  }
}

Banner.propTypes = {
  image: React.PropTypes.string.isRequired,
  text: React.PropTypes.object.isRequired,
  style: React.PropTypes.object,
};

export default Banner;