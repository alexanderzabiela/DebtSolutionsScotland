import styled from 'styled-components';

const LeftBlock = styled.div`
@media only screen and (min-width: 300px) {
  width: 100%;
  color: white;
  padding-bottom: 30px;
  border-radius: 30px;
}
@media only screen and (min-width: 1025px) {
  width: 68%;
  float: left;
  margin: 0 0 30px;
  padding-top: 30px;
  height: 350px;
  min-height: 350px;
  padding-bottom: 20px;
}
`;

export default LeftBlock;
