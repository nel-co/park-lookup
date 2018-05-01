import React from 'react';

import Header from './Header';
import Colorado from './Featured/Colorado';
import Utah from './Featured/Utah';
import Cali from './Featured/Cali';
import Footer from '../Footer/Footer';

import './Featured.css';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <Header setParkName={this.props.setParkName} parkName={this.props.parkName} />
        <div className="featured container">
          <Colorado />
          <Utah />
          <Cali />
        </div>
        <Footer />
    </div>
    )
  }
}