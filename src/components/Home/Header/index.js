import React from 'react';
import './Header.css';

import Logo from './logo.png';

import Search from './Search/Search';

export default class Header extends React.Component {
  render() {
    return(
      <div className="header">
      <img src={Logo} alt="Park LookUp logo" />
      <Search parkName={this.props.parkName} setParkName={this.props.setParkName} />
    </div>
    )
  }
}