import styled from 'styled-components';

const LeftTitle = styled.h3`
  @media screen and (min-width: 300px) {
    color: #696969;
    max-width: 100%;
    font-size: 1.7rem;
    display: block;
    width: 92%;
    line-height: 30px;
    margin: ${(props) => props.margin.responsive};
  }
  @media screen and (min-width: 1025px) {
    text-align: left;
    font-size: 2.6rem;
    width: 640px;
    margin: 20px auto;
    clear: both;
    padding: ${(props) => props.padding.tablet};
    line-height: 50px;
    margin-top: 0;
    margin-bottom: 20px!important;
  }
  @media screen and (min-width: 990px) {
    width: 870px;
  }
  @media only screen and (min-width: 1140px) {
    width: 1060px;

  }
`;

LeftTitle.defaultProps = {
  margin: {
    responsive: '0px 0% 10px',
    desktop: '20px auto',
  },
  padding: {
    tablet: '0',
  },
};


export default LeftTitle;
