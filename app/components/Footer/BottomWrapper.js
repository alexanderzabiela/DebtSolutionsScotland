import styled from 'styled-components';

const Wrapper = styled.div`
  @media only screen and (min-width: 300px) {
    width: 92%;
    margin: 0 5%;
    // height: 350px;
  }
  @media only screen and (min-width: 480px) {
    width: 90%;
    margin: 0 5%;
  }
  @media only screen and (min-width: 1025px) {
    margin: 0 auto;
    height: auto;
  }
`;

export default Wrapper;
