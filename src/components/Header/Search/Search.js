import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const NationalParks = [
  'Acadia',
  'American Samoa',
  'Arches',
  'Badlands',
  'Big Bend',
  'Biscayne',
  'Black Canyon of the Gunnison',
  'Bryce Canyon',
  'Canyonlands',
  'Capitol Reef',
  'Carlsbad Caverns',
  'Channel Islands',
  'Congaree',
  'Crater Lake',
  'Cuyahoga Valley',
  'Death Valley',
  'Denali',
  'Dry Tortugas',
  'Everglades',
  'Gates of the Artic',
  'Glacier',
  'Glacier Bay',
  'Grand Canyon',
  'Grand Teton',
  'Great Basin',
  'Great Sand Dunes',
  'Great Smoky Mountains',
  'Guadalupe Mountains',
  'Haleakalā',
  'Hawaiʻi Volcanoes',
  'Hot Springs',
  'Isle Royale',
  'Joshua Tree',
  'Katmai',
  'Kenai Fjords',
  'Kings Canyon',
  'Kobuk Valley',
  'Lake Clark',
  'Lassen Volcanic',
  'Mammoth Cave',
  'Mesa Verde',
  'Mount Rainier',
  'North Cascades',
  'Olympic',
  'Petrified Forest',
  'Pinnacles',
  'Redwood',
  'Rocky Mountain',
  'Saguaro',
  'Sequoia',
  'Shenandoah',
  'Theodore Roosevelt',
  'Virgin Islands',
  'Voyageurs',
  'Wind Cave',
  'Wrangell-St. Elias',
  'Yellowstone',
  'Yosemite',
  'Zion'
];

export default class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      parks: NationalParks
    };
  }

  componentDidMount = () => {
    let input = document.getElementById('national-park-input');
    new Awesomplete(input, {list: '#national-parks-list', minChars: 1});
    this.getRandomPlaceHolder();
  }

  handleSearch = (e) => {
    e.preventDefault();
    let parkName = document.querySelector('.header-form input').value;
    if (NationalParks.includes(parkName)) {
      console.log(`Change to page about ${parkName}`);
      this.props.setParkName(parkName);
      return;
    } else {
      console.log('Not a national park');
    }
  }

  getRandomPlaceHolder = () => {
    let input = document.querySelector('.header-form input');
    input.placeholder = `Try "${NationalParks[Math.floor(Math.random() * NationalParks.length)]}"`
  }

  render() {
    return (
      <div className="header-form">
        <input 
          type="text" 
          data-list={this.state.parks.map(park => {return park})}
          id="national-park-input"
        />
        <Router>
          <Link to={`/parks/${this.props.parkName}`}><button type="submit" onClick={this.handleSearch}>SEARCH</button></Link>
        </Router>
      </div>
    );
  }
}