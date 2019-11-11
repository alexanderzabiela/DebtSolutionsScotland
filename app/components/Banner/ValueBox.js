import styled from 'styled-components';

const ValueBox = styled.div`
  @media only screen and (max-width: 1024px) {
    width: 80%;
    color: white;
    border-radius: 10px; 
    background-color: #CCCDCC;
    float: left;
    font-size: 24px;
    line-height: 4px;
    text-align: center;
    border-top-left-radius: 0px!important;
    border-top-right-radius: 0px!important;
    margin-left: 10%;
    margin-bottom: 3%;
    height: 33px;
    

    & p {
      margin: 0 auto;
      margin-bottom: 15px!important;
      margin-top: 15px!important;
    }
  }
  
  @media only screen and (min-width: 1025px) {
    width: 23%;
    height: 53px;
    color: white;
    border-radius: 10px;
    background-color: #CCCDCC;
    float: left;
    font-size: 24px;
    line-height: 7px;
    text-align: center;
    border-top-left-radius: 0px!important;
    border-bottom-left-radius: 0px!important;
  }
`;

export default ValueBox;
