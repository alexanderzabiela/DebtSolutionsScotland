import styled from 'styled-components';

const Wrapper = styled.div`
@media all and (min-width: 200px) {
    max-width: 90%;
    width: 90%;
    list-style: none;
    display: block;
    margin: 0 auto;
    height: 80px;
    padding-top: 16px;
}

@media all and (min-width: 1025px) {
    list-style: none;
}
@media all and (min-width: 990px) {
    list-style: none;
}
@media all and (min-width: 1025px) {
    list-style: none;
    margin: 0px auto 0px;
    height: 130px;
}

@media only screen and (min-width: 990px) {
  max-width: 100%;
}

@media only screen and (min-width: 1025px) {
  max-width: 90%;
}

@media only screen and (min-width: 1600px) {
  max-width: 80%;
}
@media only screen and (min-width: 1800px) {
  max-width: 63%;
}

@media only screen and (min-width: 2000px) {
  max-width: 1200px;
  }


`;

export default Wrapper;
