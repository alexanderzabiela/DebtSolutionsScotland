import styled from 'styled-components';

const Button = styled.li`
  @media only screen and (max-width: 1024px) {
    background-color: #262736;
    color: white;
    border-radius: 10px;
    display: block;
    float: left;
    width: 87%!important;
    height: 45px;
    font-size: 1.4rem;
    line-height: 44px!important;
    background-color: #F8A761!IMPORTANT;
  }
  @media only screen and (min-width: 1025px) {
    background-color: #262736;
    width: 45.2%;
    margin-right: 2.5%;
    height: 56px;
    padding-top: 13px;
    border-radius: 10px;
    font-size: 24px;
    display: inline-block;
    // float: left;
    text-align: center;
    margin: 0 auto;
  }
`;

export default Button;
