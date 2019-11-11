import styled from 'styled-components';

const Wrapper = styled.div`
  @media only screen and (min-width: 300px) {
    width: 100%;
    display: block;
    float: left;
    margin-top: 20px;

    & h3 {
      margin: 0 0; 
      margin-bottom: 20px;
      padding: 0 0;
      line-height: 40px;
    }
    
  }
  @media only screen and (min-width: 480px) {
    width: 100%;
  }
  @media only screen and (min-width: 1025px) {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    clear: both;
    display: block;


  & h3 {
    margin: 0 0; 
    padding: 0 0;
    line-height: 50px;
  }
  
  }

  & p, h3 {
    color: #696969;
  }

  & p {
    margin: 0 0; 
    padding: 0 0;
    width: 100%;
  }
`;


Wrapper.defaultProps = {
  display: 'none',
};

export default Wrapper;
