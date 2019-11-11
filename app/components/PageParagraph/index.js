import styled from 'styled-components';

const PageParagraph = styled.p`
  @media screen and (min-width: 300px) {
    font-size: 1em;
    margin: ${(props) => props.margin};
    font-weight: ${(props) => props.weight};
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1025px) {
    width: 640px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 990px) {
    width: 870px;
    font-size: 1.25em;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1025px) {
    width: 1060px;
  }
`;

PageParagraph.defaultProps = {
  margin: '0 5% 1.75em',
  weight: '400',
};


export default PageParagraph;
