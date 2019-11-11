/**
*
* AccordionTitle
*
*/

import React from 'react';
import styled from 'styled-components';


const AccordionTitle = styled.div`
color: white;
background: linear-gradient(#2962AF, #00AEEF);
position: relative;
z-index: 1;
float: left;
width: 100%;

& .underline {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  border-bottom: 4px solid #ff682c;
}


@media only screen and (min-width: 1025px) {
  & .underline {
    border-bottom: 4px solid #ff682c;
  }

}


`;


export default AccordionTitle;
