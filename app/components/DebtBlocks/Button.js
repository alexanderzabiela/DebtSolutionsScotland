import styled from 'styled-components';

const Button = styled.button`
  @media only screen and (min-width: 300px) {
    background-color: ##FFFFFF;
    font-size: 1.4em;
    width: 250px;
    height: 54px;
    display: block;
    border-radius: 10px;
    margin: 0 auto;

  }
  @media only screen and (min-width: 1025px) {
    width: 250px;
    height: 54px;
    margin-top: 20px;
  }
`;

export default Button;
