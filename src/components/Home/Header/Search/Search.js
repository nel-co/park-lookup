import React from 'react';
import {Link} from 'react-router-dom';

import NationalParks from '../../../../NationalParks';

export default class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      parks: NationalParks,
      showError: false
    };
  }

  componentDidMount = () => {
    let input = document.getElementById('national-park-input');
    new Awesomplete(input, {list: '#national-parks-list', minChars: 1});
    this.getRandomPlaceHolder();
  }

  handleEnterPress = (e) => {
    if(e.key === 'Enter') {
      this.handleSearch(e);
    }
  }

  handleSearch = (e) => {
    let parkName = document.querySelector('.header-form input').value.trim();
    let parkExists = (NationalParks.find(park => park.name.toLowerCase() === parkName.toLowerCase())) !== undefined;
    if (parkExists && parkName.length > 0) {
      e.preventDefault();      
      let parkSearch = NationalParks.find(park => park.name.toLowerCase() === parkName.toLowerCase());
      window.location.href = parkSearch.link;
      this.props.setParkName(parkSearch.name);
      return;
    } else {
      e.preventDefault();
      this.showError();
    }
  }

  getRandomPlaceHolder = () => {
    let input = document.querySelector('.header-form input');
    input.placeholder = `Try "${NationalParks[Math.floor(Math.random() * NationalParks.length)].name}"`
  }

  showError = () => {
    this.setState({
      showError: true
    })
    setTimeout(() => {
      this.setState({
        showError: false
      })
    }, 3000);
  }

  render() {
    return (
      <div className="header-form">
        <input 
          type="text" 
          data-list={this.state.parks.map(park => {return park.name})}
          id="national-park-input"
          onKeyPress={this.handleEnterPress}
        />
        <Link exact="true" to={this.state.link ? `/${this.state.link}` : '#'} onClick={(e) => this.handleSearch(e)}><button type="submit">SEARCH</button></Link>
        {this.state.showError ? <SearchError /> : null }
      </div>
    );
  }
}

const SearchError = () => {
  return (
    <div className="header-search-error">Not a National Park. Try Again.</div>
  )
}