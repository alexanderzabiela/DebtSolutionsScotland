import styled from 'styled-components';

const Wrapper = styled.div`
  @media screen and (min-width: 300px) {
    display: block;
    margin-bottom: 0.25em;
    border-bottom: 3px solid #ff682c;
    margin: 0 5% 20px;
  }
  @media screen and (min-width: 475px) {
    font-size: 3.5em;
  }
  @media screen and (min-width: 1025px) {
    font-size: 2.75em;
    width: 640px;
    margin: 0 auto;
    margin-bottom: 15px;
    border-bottom: 3px solid #ff682c;

  }
  @media screen and (min-width: 990px) {
    font-size: 2.75em;
    width: 870px;
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1025px) {
    font-size: 2.75em;
    width: 1060px;
  }
`;

export default Wrapper;
