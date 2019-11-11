import styled from 'styled-components';

const IconWrapper = styled.div`
  @media only screen and (min-width: 300px) {
    display: block;
    width: 100%;
    float: left
    clear: both;
  }
  @media only screen and (min-width: 1025px) {
      display: block;
      width: 94%;
      margin: 0 auto;
      height: 75px;
      clear: both;
  }
  @media only screen and (min-width: 990px) {
    margin-bottom: 10px;
  }
`;

export default IconWrapper;
