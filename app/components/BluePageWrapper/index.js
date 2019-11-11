import styled from 'styled-components';

const BluePageWrapper = styled.div`

@media only screen and (min-width: 300px) {
  width: 100%;
  background-color: #35DCB6;
  float: left;
}
@media only screen and (min-width: 1025px) {
  // max-width: 1025px;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  clear: both;
  display: block;
  float: left;
  padding-bottom: 50px;
}
@media only screen and (min-width: 990px) {
  max-width: 100%;
  padding-left: 5%;
  padding-right: 5%;
}
@media only screen and (min-width: 1600px) {
  max-width: 100%;
  padding-left: 10%;
  padding-right: 10%;
}
@media only screen and (min-width: 1800px) {
  max-width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 1px;
}

// @media only screen and (min-width: 2000px) {
//   max-width: 100%;
//   padding-left: 17.5%;
//   padding-right: 17.5%;
//   padding-top: 1px;
// }



`;

export default BluePageWrapper;
