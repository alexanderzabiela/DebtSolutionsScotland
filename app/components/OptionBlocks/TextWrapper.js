import styled from 'styled-components';

const TextWrapper = styled.div`
  @media only screen and (min-width: 300px) {
    display: block;
    width: 70%;
    float: left;
    margin-left: 3%;
    
  }
  @media only screen and (min-width: 1025px) {
      display: block;
      margin: 0 auto;
      height: 75px;

  }
  @media only screen and (min-width: 990px) {
    margin-bottom: 10px;
  }
`;

export default TextWrapper;
