import styled from 'styled-components';

const ButtonWrapper = styled.ul`
  @media only screen and (min-width: 300px) {
    max-width: 100%;
    list-style: none;
    height: 15px;
    padding: 0;
    margin: 25px auto;
    text-align: center;
  }
  li {
    margin: 0 10px;
    cursor: pointer;
  }
  li:first-child {
    background-color: #ff682c;
  }
  @media only screen and (min-width: 1025px) {
    margin: 35px auto;
  }
  @media only screen and (min-width: 1025px) {
    margin: 50px auto;
  }
`;

export default ButtonWrapper;
