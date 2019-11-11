import styled from 'styled-components';

const Button = styled.button`
  @media only screen and (min-width: 300px) {
    background-color: ##FFFFFF;
    width: 15px;
    height: 15px;
    display: block;
    border-radius: 10px;
    margin: 0 auto;
    background-color: white;
    color: #2962AF;
  }
  @media only screen and (min-width: 1025px) {
    width: 250px;
    height: 54px;
    font-size: 1.5em;
    margin-top: 20px;
  }
`;

export default Button;
