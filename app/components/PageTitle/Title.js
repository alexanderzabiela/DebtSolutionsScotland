import styled from 'styled-components';

const PageTitle = styled.h2`
  @media screen and (min-width: 300px) {
    font-size: 2rem;
    display: block;
    margin: 15px 0 0;
  }
  @media screen and (min-width: 475px) {
    font-size: 2rem;
    margin: 15px 0;
  }
  @media screen and (min-width: 1025px) {
    margin: 15px 0 0;
  }
  @media screen and (min-width: 990px) {
    font-size: 2.6rem;
    margin: 20px 0 0;
    line-height: 1.3;
  }
  @media screen and (min-width: 1025px) {
    font-size: 2.6rem;
    margin: 35px 0 0;
  }

  & .trademark {
    font-size: 0.53em;
    display: inline;
    vertical-align: middle;
  }
`;

export default PageTitle;
