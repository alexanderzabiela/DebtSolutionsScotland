import styled from 'styled-components';

const Wrapper = styled.div`
@media only screen and (min-width: 300px) {
display:none!important
}
@media only screen and (min-width: 1025px) {
  display: block!important;
  width: 100%;
  float: left;
  margin: 0 0 30px;
  padding-top: 30px;
  padding-bottom: 20px;
  background-color: #262736;
  border-radius: 30px;
}
`;

export default Wrapper;
