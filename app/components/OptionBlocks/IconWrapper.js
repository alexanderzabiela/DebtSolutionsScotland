import styled from 'styled-components';

const IconWrapper = styled.div`
  @media only screen and (min-width: 300px) {
    display: block;
    width: 10%;
    margin-right: 5%;
    margin-left: 5%;
    float: left;
    font-size: 16px;
  }
  @media only screen and (min-width: 1025px) {
      display: block;
      margin-right: 8%;
      height: 75px;
      float: left;
  }
  @media only screen and (min-width: 990px) {
    margin-bottom: 10px;
  }
`;

export default IconWrapper;
