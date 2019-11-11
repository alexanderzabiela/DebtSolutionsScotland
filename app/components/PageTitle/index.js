import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import SubTitles from './SubTitles';
import Title from './Title';

export default class PageTitle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function 

  constructor(props) {
    super(props);
  }

  checkSubTitles() {
    if (this.props.subTitles) return (<SubTitles>{this.props.subTitles}</SubTitles>);
  }

  render() {
    return (
      <Wrapper>
        <Title>{this.props.header}</Title>
        {this.checkSubTitles()}
      </Wrapper>
    );
  }
}

PageTitle.propTypes = {
  header: PropTypes.object,
  subTitles: PropTypes.object,
}