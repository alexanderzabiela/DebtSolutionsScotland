import styled from 'styled-components';

const Gallery = styled.ul`
  @media only screen and (min-width: 300px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
    display: block;
    li:nth-child(n + 2) {
      display: none;
    }
  }
  @media only screen and (min-width: 1025px) {
    width: 700px;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 70px;
  }
  @media only screen and (min-width: 990px) {
    width: 930px;
    max-width: 930px;
  }
  @media only screen and (min-width: 1025px) {
    width: 1140px;
    max-width: 1140px;
    margin-top: 87px;
  }
`;

export default Gallery;
