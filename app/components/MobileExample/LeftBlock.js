import styled from 'styled-components';

const LeftBlock = styled.div`
@media only screen and (min-width: 300px) {
  display: block;
  float: left;
  background-color: white;
  color: black;
  width: 86%;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 19px;
  font-size: 1rem;
  margin-left: 6%;
  line-height: 22px;
}
@media only screen and (min-width: 1025px) {
  display: block;
  float: left;
  background-color: white;
  color: black;
  width: 44%;
  height: 56px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 19px;
  font-size: 2rem;
  margin-left: 4%;
  line-height: 7px;
}
`;

export default LeftBlock;
