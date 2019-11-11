import styled from 'styled-components';

const Reference = styled.p`
  @media screen and (min-width: 300px) {
    max-width: 100%;
    width: 90%;
    color: bloack;
    margin: 5% 5%;
    font-size: 1em;
    font-weight: bold;
  }
  @media screen and (min-width: 460px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 1025px) {
    width: 640px;
    margin: 15px auto 40px;
    font-size: 1.1em;
  }
  @media screen and (min-width: 990px) {
    width: 870px;
  }
  @media only screen and (min-width: 1025px) {
    width: 1060px;
  }
`;

export default Reference;
