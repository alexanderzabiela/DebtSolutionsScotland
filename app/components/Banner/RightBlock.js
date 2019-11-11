import styled from 'styled-components';

const RightBlock = styled.div`
  @media only screen and (max-width: 1024px) {
    width: 100%;
    color: white;
    border-radius: 30px;  

    & div {
      margin-left: 9.5%;
      text-align: center!important;
      margin-right: -2%;
      margin-top: 25px;
    }
  }
  @media only screen and (min-width: 1025px) {
    width: 48%;
    float: right;
    margin: 0 0 30px;
    padding-bottom: 20px;
    margin-top: 45px;
  }

`;

export default RightBlock;
