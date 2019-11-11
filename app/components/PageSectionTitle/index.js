import styled from 'styled-components';

const PageSectionTitle = styled.h3`
  @media screen and (min-width: 300px) {
    max-width: 100%;
    font-size: 2rem;
    display: block;
    border-bottom: 3px solid #ff682c;
    width: 92%;
    margin: ${(props) => props.margin.responsive};
  }
  @media screen and (min-width: 1025px) {
    font-size: 2rem;
    width: 640px;
    margin: 20px auto;
    clear: both;
    padding: ${(props) => props.padding.tablet};
    line-height: 1.4;
    border-bottom: 3px solid #ff682c;
  }
  @media screen and (min-width: 990px) {
    font-size: 2.6rem;
    width: 870px;
  }
  @media only screen and (min-width: 1140px) {
    width: 1060px;
    margin: ${(props) => props.margin.desktop};

  }
`;

PageSectionTitle.defaultProps = {
  margin: {
    responsive: '10px 4% 20px',
    desktop: '20px auto',
  },
  padding: {
    tablet: '0',
  },
};


export default PageSectionTitle;
