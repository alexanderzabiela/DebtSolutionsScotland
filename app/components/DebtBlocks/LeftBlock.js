import styled from 'styled-components';

const LeftBlock = styled.div`
@media only screen and (min-width: 300px) {
  width: 100%;
  display: block;
  color: white;
  padding-bottom: 30px;
  border-radius: 30px;
  float: left;

}
@media only screen and (min-width: 1025px) {
  width: 48%;
  float: left;
  margin: 0 0 30px;
  padding-top: 30px;
  height: 300px;
  min-height: 300px;

  padding-bottom: 20px;
}
`;

export default LeftBlock;
