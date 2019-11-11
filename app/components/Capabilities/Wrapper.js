import styled from 'styled-components';

const Wrapper = styled.div`
  @media only screen and (min-width: 20px) {
    display: none!important;
  }
  @media only screen and (min-width: 1025px) {
    display: block!important;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    clear: both;
  }

  & p, h3 {
    color: white;
  }

  & h3 {
    line-height: 60px;
  }

  & p {
    width: 100%;
    padding-left: 11%;
    padding-right: 11%;
  }
`;

export default Wrapper;
