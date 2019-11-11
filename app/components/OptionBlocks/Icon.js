import styled from 'styled-components';

const Icon = styled.img`
@media only screen and (min-width: 300px) {
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  margin-top: 5px;
}
@media only screen and (min-width: 1025px) {
    width: 70px;
    float: left;
    height: 70px;
    display: inline-block;
    margin-top: 14%;
}
`;

export default Icon;
