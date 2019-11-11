import styled from 'styled-components';

const Quote = styled.p`
  @media screen and (min-width: 300px) {
    max-width: 100%;
    width: 90%;
    color: #ff682c;
    margin: 5% 5%;
    font-size: 0.875em;
    font-weight: bold;
  }
  @media screen and (min-width: 460px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 1025px) {
    width: 640px;
    margin: 0 auto;
    margin-top: 40px;
    line-height: 1.4;
  }
  @media screen and (min-width: 990px) {
    width: 870px;
  }
  @media only screen and (min-width: 1025px) {
    width: 1060px;
  }
`;

export default Quote;
