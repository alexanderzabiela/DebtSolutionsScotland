import styled from 'styled-components';

const Map = styled.a`
  display: block;
  color: white;
  max-width: 100%;
  border-bottom: 3px solid #ff682c;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  &:hover {
    color: #ff682c;
  }
  @media only screen and (min-width: 480px) {
    width: 50%;
  }
  @media only screen and (min-width: 1025px) {
    float: left;
    width: 50%;
  }
  @media only screen and (min-width: 1025px) {
    width: 40%;
  }
`;

export default Map;
