import styled from 'styled-components';

const Button = styled.li`
  @media only screen and (min-width: 300px) {
    background-color: #2962AF;
    color: white;
    width: 15px;
    height: 15px;
    border-radius: 10px;
  }
  @media only screen and (min-width: 1025px) {
    width: 100%;
    margin-right: 2.5%;
    padding-top: 1.5%;
    border-radius: 20px;
    font-size: 24px;
    display: inline-block;
    float: left;
    -webkit-text-align: center;
    text-align: left;
    height: 107px;
    margin-bottom: 2%;
    font-size: 1.5rem;
    /* padding-left: 24%; */
    padding: 6%;
    padding-left: 23px;
  }
`;

export default Button;
