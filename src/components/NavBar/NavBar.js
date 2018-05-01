import React from 'react';
import {Link} from 'react-router-dom';

import logo from './logo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar container">
      <Link exact="true" to="/"><div className="logo-wrapper"><img src={logo} alt="logo" /></div></Link>
      <Link exact="true" to="/"><span>{'<'}</span></Link>
    </div>
  )
}

export default NavBar;