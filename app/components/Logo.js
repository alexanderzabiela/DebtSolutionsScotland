import styled from 'styled-components';

const Logo = styled.img`
@media only screen and (min-width: 300px) {
  display: block;
  float: left;
  width: 200px
}

@media only screen and (min-width: 375px) {
  display: block;
  float: left;
  width: 240px
}

@media only screen and (min-width: 420px) {
  display: block;
  float: left;
  width: 280px
}

@media only screen and (min-width: 1025px) {
  width: 350px;
  margin-top: 16px;
}

`;

export default Logo;
