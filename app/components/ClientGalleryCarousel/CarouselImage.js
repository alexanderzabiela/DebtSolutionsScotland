import styled from 'styled-components';

const CarouselImage = styled.li`
  @media only screen and (min-width: 300px) {
    width: 100%;
    max-width: 100%;
    background-image: url(${(props) => props.image});
    list-style: none;
    height: 230px;
    background-size: 100% 100%;
    display: block;
    transition: width 2s;
  }
  @media only screen and (min-width: 360px) {
    height: 240px;
  }
  @media only screen and (min-width: 410px) {
    height: 273.3px;
  }
  @media only screen and (min-width: 568px) {
    height: 378.6px;
  }
  @media only screen and (min-width: 1025px) {
    height: 466.7px
  }
  @media only screen and (min-width: 990px) {
    height: 620px
  }
  @media only screen and (min-width: 1025px) {
    height: 1025px;
  }
`;

export default CarouselImage;
