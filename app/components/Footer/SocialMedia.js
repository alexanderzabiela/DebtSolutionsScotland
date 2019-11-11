import styled from 'styled-components';

const SocialMedia = styled.ul`
  @media only screen and (min-width: 300px) {
    max-width: 100%;
    width: 80%;
    margin: 9px auto 14px;
    padding: 0;
    float: left;
  }
  @media only screen and (min-width: 480px) {
    margin: 15px auto 10px;
  }
  @media only screen and (min-width: 1025px) {
    float: right;
    width: 100%;
    margin-top: 0px;
  }
  @media only screen and (min-width: 992px) {
    float: right;
    margin-bottom: 0;
  }
  @media only screen and (min-width: 1025px) {

  }
`;

export default SocialMedia;
