import styled from 'styled-components';

const RightBlock = styled.div`
  @media only screen and (min-width: 300px) {
    width: 100%;
    background-color: #262736;
    color: white;
    border-radius: 30px;  
  }
  @media only screen and (min-width: 1025px) {
    background-color: #35DCB6;
    color: white;
    width: 44%;
    height: 56px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 19px;
    font-size: 24px;
    float: left;
    margin-left: 4%;
    line-height: 7px;
  }
`;

export default RightBlock;
