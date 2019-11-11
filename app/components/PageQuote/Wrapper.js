import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Phenomena'
  width: 100%;
  float: left;
  background-color: #e3e3e3;
  margin-bottom: 20px;
  @media only screen and (min-width: 1025px) {
    width: 700px;
    margin-bottom: 60px
  }
  @media only screen and (min-width: 990px) {
    width: 930px;
    margin-bottom: 60px
  }
  @media only screen and (min-width: 1025px) {
    margin-bottom: 95px;
    width: 1140px;
  }
`;

export default Wrapper;
