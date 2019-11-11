import styled from 'styled-components';

const RightBlock = styled.div`
  @media only screen and (min-width: 300px) {
    width: 95%;
  display: block;
  color: white;
  padding-bottom: 10px;
  border-radius: 30px;
  float: left;
  margin-left: 4%;

  }
  @media only screen and (min-width: 1025px) {
    width: 48%;
    float: right;
    margin: 0 0 30px;
    padding: 30px 0;
    padding-bottom: 20px;
    height: 300px;
    min-height: 300px;
  }
`;

export default RightBlock;
