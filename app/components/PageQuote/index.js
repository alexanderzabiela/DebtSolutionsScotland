import React from 'react';
import PropTypes from 'prop-types';

import Quote from './Quote';
import Reference from './Reference';
import Wrapper from './Wrapper';

function PageQuote({ quote, reference }) {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Reference>{reference}</Reference>
    </Wrapper>
  );
}

PageQuote.propTypes = {
  quote: PropTypes.object,
  reference: PropTypes.object,
};

export default PageQuote;
