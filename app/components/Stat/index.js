import styled from 'styled-components';

const Stat = styled.p`
  @media only screen and (min-width: 300px) {
    color: #ff682c;
    font-size: 2em;
    font-weight: bold;
    margin: 0 5%;
  }
  @media only screen and (min-width: 475px) {
    font-size: 2em;
  }
  @media only screen and (min-width: 1025px) {
    max-width: 640px;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    line-height: 1.2em;
  }
  @media only screen and (min-width: 990px) {
    max-width: 930px;
  }
  @media only screen and (min-width: 1025px) {
    max-width: 1140px;
    display: inline-block;
  }
`;

export default Stat;
