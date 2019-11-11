import styled from 'styled-components';

const MobileMenuIcon = styled.img`
@media all and (min-width: 200px) {
  width: 50px;
    float:right;
    display: block;
    margin-top: 5px;
    margin-right: 2%;
}

@media all and (min-width: 400px) {
    width: 50px;
    float:right;
    display: block;
    margin-top: 10px;
    margin-right: 2%;
}
@media all and (min-width: 1025px) {
    display:none;
}
@media all and (min-width: 1280px) {
    display:none;
    width: 64px;
    margin-top: 10px;
    float: right;
}

`;

export default MobileMenuIcon;
