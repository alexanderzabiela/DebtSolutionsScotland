import styled from 'styled-components';

const RightBlock = styled.div`
  @media only screen and (min-width: 300px) {
    width: 100%;
    background-color: #262736;
    color: white;
    border-radius: 30px;  
  }
  @media only screen and (min-width: 1025px) {
    width: 48%;
    float: right;
    margin: 0 0 30px;
    padding: 30px 0;
    padding-bottom: 20px;
    height:460px;
  }
`;

export default RightBlock;
