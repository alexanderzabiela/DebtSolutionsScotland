import styled from 'styled-components';

const Icon = styled.img`
@media only screen and (min-width: 300px) {
  display: inline-block;
  vertical-align: middle;
  width: 20%;
  height: 50px;
}
@media only screen and (min-width: 1025px) {
    width: 20%;
    float: left;
    height: 50px;
    display: inline-block;
}
@media only screen and (min-width: 990px) {
    width: 25%;
    float: left;
    height: 60px;
    display: inline-block;
}
@media only screen and (min-width: 1025px) {
    width: 20%;
    float: left;
    height: 60px;
    display: inline-block;
}
`;

export default Icon;
