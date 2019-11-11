import styled from 'styled-components';

const Wrapper = styled.div`
  @media only screen and (min-width: 300px) {
    width: 100%;
    display: block;
    float: left;
    margin-top: 5px;

    & h3 {
      margin: 0 0; 
      margin-bottom: 5px;
      padding: 0 0;
      line-height: 30px;
    }

    & p {
      margin: 0 0; 
      padding: 0 0;
      width: 100%;
    }
    
  }
  @media only screen and (min-width: 1025px) {
    display: none;


`;


Wrapper.defaultProps = {
  display: 'none',
};

export default Wrapper;
