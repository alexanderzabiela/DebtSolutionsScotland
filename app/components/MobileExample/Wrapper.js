import styled from 'styled-components';

const Wrapper = styled.div`
@media only screen and (min-width: 300px) {
  width: 100%;
  float: left;
  background-color: #262736;
  color: white;
  margin-bottom: 20px;
}
@media only screen and (min-width: 1025px) {
  display: none!important;
}
`;

export default Wrapper;
