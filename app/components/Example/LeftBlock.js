import styled from 'styled-components';

const LeftBlock = styled.div`
@media only screen and (min-width: 300px) {
  width: 100%;
}
@media only screen and (min-width: 1025px) {
  display: block;
  float: left;
  background-color: white;
  color: black;
  width: 44%;
  height: 56px;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 19px;
  font-size: 24px;
  margin-left: 4%;
  line-height: 7px;
}
`;

export default LeftBlock;
