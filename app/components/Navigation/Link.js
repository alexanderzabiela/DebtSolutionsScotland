import styled from 'styled-components';

const Link = styled.li`
@media all and (min-width: 200px) {
  display: block;
  font-size: 22px;
  color: black;
  cursor: pointer;
  padding-left: 3%;
  border: 1px solid #C3C3C3;
  -webkit-text-decoration: none;
  text-decoration: none;
}
@media all and (min-width: 1025px) {
    float: right;
    text-align: right;
    font-size: 30px;
    font-weight: bold;
    color:white;
    margin-left: 4%;
    &:hover {
        color: #262736;
      };
    text-transform: none;
}


`;

export default Link;
