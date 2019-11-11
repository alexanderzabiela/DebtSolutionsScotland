import styled from 'styled-components';

const CenterParagraph = styled.p`
  @media screen and (min-width: 300px) {
    text-align: center;
    color: #696969;
    font-size: 1rem;
    margin: ${(props) => props.margin};
    font-weight: ${(props) => props.weight};
    margin-bottom: 10px;
    line-height: 23px;
  }
  @media screen and (min-width: 1025px) {
    width: 88%;
    font-size: 1.2rem;
    margin: 30px auto;
    line-height: 25px;
  }
`;

CenterParagraph.defaultProps = {
  margin: '0 5% 1.75em',
  weight: '400',
};


export default CenterParagraph;
