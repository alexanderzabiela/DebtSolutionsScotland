import styled from 'styled-components';

const DropdownMenu = styled.div`
@media all and (min-width: 200px) {
  width: 100%;
  background-color: white;
  display: none;
  position: absolute;
  top: 78px;
  z-index: 2;
  font-weight: bold;
  border: 1px solid #C3C3C3;
}
@media all and (min-width: 1025px) {
    display:none!important;
}
@media all and (min-width: 1280px) {
    display:none!important;
    width: 64px;
    margin-top: 10px;
    float: right;
}

`;

export default DropdownMenu;
