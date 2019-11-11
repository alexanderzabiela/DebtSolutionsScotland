import styled from 'styled-components';

const LeftParagraph = styled.p`
  @media screen and (min-width: 300px) {
    text-align: left;
    color: #696969;
    font-size: 1rem!important;
    line-height: 25px;
    margin: 0 5% 1.75em;
    font-weight: 400;
    margin-bottom: 10px;
    padding-top: 15px;
  }
  @media screen and (min-width: 1025px) {
    width: 85%;
    margin: 0 auto;
    font-size: 1.2rem!important;
    margin-bottom: 15px;
    line-height: 25px;
  }
`;

LeftParagraph.defaultProps = {
  margin: '0 5% 1.75em',
  weight: '400',
};


export default LeftParagraph;
