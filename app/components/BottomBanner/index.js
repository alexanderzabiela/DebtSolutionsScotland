import styled from 'styled-components';

const BottomBanner = styled.img`
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    min-width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    float: left;
  }
  @media only screen and (min-width: 1025px) {
    max-width: 100%;
    min-width: 100%;
    margin-top: 50px;
    margin-bottom: -50px;
    float: left;
  }
`;

export default BottomBanner;
