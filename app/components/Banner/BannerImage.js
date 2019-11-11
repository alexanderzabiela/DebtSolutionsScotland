import styled from 'styled-components';

const BannerImage = styled.img`
  @media only screen and (min-width: 300px) {
    max-width: 100%;
    min-width: 100%;
  }
  @media only screen and (min-width: 700px) {
    max-width: 100%;
  }
  @media only screen and (min-width: 1025px) {
    max-width: 100%;
    width: 100%;
  }
`;

export default BannerImage;
