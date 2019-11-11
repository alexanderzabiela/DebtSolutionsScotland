import styled from 'styled-components';

const SubTitle = styled.h4`
  @media screen and (min-width: 300px) {
    font-size: 1em;
    display: block;
    margin: 0 0 6px;
    font-weight: 400;
  }
  @media screen and (min-width: 475px) {
    font-size: 0.5em;
  }
  @media screen and (min-width: 1025px) {
    font-size: 0.75em;
    line-height: 1.2em;
  }
`;

export default SubTitle;
