import styled from 'styled-components';

const Wrapper = styled.footer`
  position: relative;
  z-index: 20;

  @media only screen and (min-width: 300px) {
    display: block;
    background-color: #262736;
    max-width: 100%;
    width: 100%;
    padding: 14px 0;
    float: left;
  }
  @media only screen and (min-width: 480px) {
    padding: 26.7px 0;
    margin-top: 0px;
  }
  @media only screen and (min-width: 1025px) {
    padding: 22px 0;
  }
  @media only screen and (min-width: 990px) {
    padding: 24px 0;
  }
`;

export default Wrapper;
