import React from 'react';
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';

import RightBlock from './RightBlock';
import LeftTitle from '../../components/LeftTitle';
import Button from './Button';



class SideNavigation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function



  render() {
    return (
      <MediaQuery minDeviceWidth={1025}>
        <RightBlock>
          <LeftTitle id="otherDebtSolutions" className="otherSolutions" >OTHER DEBT SOLUTIONS</ LeftTitle>
          <ul>
            <NavLink exact to="/solutions/iva"><Button>INDIVIDUAL VOLUNTARY ARRANGEMENT (IVA)</Button></ NavLink>
            <NavLink exact to="/solutions/ptd"><Button>PROTECTED TRUST DEED (PTD)</Button></ NavLink>
            <NavLink exact to="/solutions/dmp"><Button>DEBT MANAGEMENT PLAN (DMP)</Button></ NavLink>
            <NavLink exact to="/solutions/dro"><Button>DEBT RELIEF ORDER (DRO)</Button></ NavLink>
            <NavLink exact to="/solutions/bankruptcy"><Button>BANKRUPTCY</Button></ NavLink>
            <NavLink exact to="/solutions/das"><Button>DEBT ARRANGEMENT SCHEME (DAS)</Button></ NavLink>
            <NavLink exact to="/solutions/map"><Button>MINIMAL ASSET PROCESS (MAP)</Button></ NavLink>
            <NavLink exact to="/solutions/sequestration"><Button>SEQUESTRATION (SCOTTISH BANKRUPTCY)</Button></ NavLink>
          </ul>
        </RightBlock>
      </MediaQuery>
    );
  }
}

export default SideNavigation;