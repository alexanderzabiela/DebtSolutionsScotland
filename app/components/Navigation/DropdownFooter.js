import styled from 'styled-components';

const DropdownFooter = styled.div`
@media only screen and (min-width: 300px) {
  display: none;
  position: absolute;
  top: 175px;
  left: 0px;
  width: 100%;
}
@media only screen and (min-width: 700px) {
  display: none;
  position: absolute;
  top: 100px;
  width: 100%;
}

`;

export default DropdownFooter;
