import styled from 'styled-components';

const Text = styled.div`
  @media only screen and (min-width: 300px) {
    display: inline-block;
    vertical-align: middle;
    width: 80%;
    font-size: 16px;
    font-weight: 1000;
  }
  @media only screen and (min-width: 1025px) {
    width: 76%;
    margin: 0;
    margin-left: 4%;
    display: inline-block;
    height: 50px;
    float: left;
    line-height: 50px;
    font-weight: bold;
    font-size: 0.84em;
  }
  @media only screen and (min-width: 990px) {
    width: 75%;
    margin: 0;
    height: 50px;
    line-height: 60px;
    font-weight: bold;
    font-size: 1.1em;
  }
  @media only screen and (min-width: 1025px) {
    margin: 0;
    vertical-align: middle;
    display: inline-block;
    line-height: 60px;
    font-weight: bold;
    font-size: 20px;
  }
`;

export default Text;
