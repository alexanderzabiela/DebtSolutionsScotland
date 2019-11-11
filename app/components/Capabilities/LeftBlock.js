import styled from 'styled-components';

const LeftBlock = styled.div`
@media only screen and (min-width: 300px) {
  width: 100%;
  background-color: #262736;
  color: white;
  padding-top: 30px;
  border-radius: 30px;
}
@media only screen and (min-width: 1025px) {
  width: 48%;
  float: left;
  margin: 0 0 30px;
  padding-top: 30px;
  padding-bottom: 20px;
  height:460px;
}
`;

export default LeftBlock;
