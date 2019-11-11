import styled from 'styled-components';

const CenterTitle = styled.h3`
  @media screen and (min-width: 300px) {
    color: #696969;
    max-width: 100%;
    font-size: 1.7rem;
    display: block;
    width: 90%;
    margin: 0px auto;
    padding-top: 14px!important;
    padding-bottom: 0px!important;
    -webkit-text-align: center;
    text-align: center;
    line-height: 30px;
    margin-bottom:10px;
    clear: both;
  }
  @media screen and (min-width: 1025px) {
    text-align: center;
    font-size: 2.6rem;
    width: 640px;
    margin: 20px auto;
    clear: both;
    margin-top: 50px;
    padding: ${(props) => props.padding.tablet};
    line-height: 50px;
    margin-top: 0;
    margin-bottom: 20px!important;
    
  }

`;

CenterTitle.defaultProps = {
  margin: {
    responsive: '10px 4% 10px',
    desktop: '20px auto',
  },
  padding: {
    tablet: '0',
  },
};


export default CenterTitle;
