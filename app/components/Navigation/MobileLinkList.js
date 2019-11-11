import styled from 'styled-components';

const MobileLinkList = styled.ul`
@media all and (min-width: 200px) {
    display:none;
    color:black;
    margin-top: 10px;
}
@media all and (min-width: 1025px) {
    display: block;
    float: right;
    width: 65%;
    list-style: none;
    margin-top: 10px
}
@media all and (min-width: 1280px) {
    display: block;
    float: right;
    width: 65%;
    list-style: none;
}
`;

export default MobileLinkList;
