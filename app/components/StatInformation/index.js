import styled from 'styled-components';

const StatInformation = styled.p`
  @media screen and (min-width: 300px) {
    font-size: 1em;
    margin: 0 5% 1.75em;
    font-weight: 400;
  }
  @media screen and (min-width: 1025px) {
    width: 100%;
    margin: 0 0 0.7em;
    line-height: 1.2em;
  }
  @media screen and (min-width: 990px) {
    font-size: 1.5em;
  }
`;

export default StatInformation;
