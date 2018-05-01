import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './InnerPage.css';

export default class InnerPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parkData: {},
      location: '',
      imgData: [],
      isLoading: true
    }
  }

  componentDidMount = () => {
    let currentLocation = location.pathname;
    let searchString = this.formatString(currentLocation);
    let parkUrl = `https://developer.nps.gov/api/v1/parks?q=${searchString}&api_key=vR2TZ6DvE9VFvcVnswQ01iP0lkV8vtU2RW7k3nS6`
    let imgUrl = `https://pixabay.com/api/?key=8870417-e04c25e6b68a564ff95bad804&q=${searchString}%20national%20park&image_type=photo`;
    console.log(parkUrl)
    
    fetch(parkUrl).then(response => {
      return response.json();
    }).then(results => {
      for(let i = 0; i < results.data.length; i++) {
        if(results.data[i].designation == 'National Park') {
          this.setState({
            parkData: results.data[i],
            location: results.data[i].latLong
          });
          return;
        } else {
          this.setState({
            parkData: results.data[0],
            location: results.data[0].latLong
          });
        }
      }
    });
    fetch(imgUrl).then(response => {
      return response.json();
    }).then(results => {
      this.setState({
        imgData: results.hits
      });
      this.changeLoading();
    });
  }

  formatString = (str) => {
    return str.replace('/', '').replace(/-/g, '%20');
  }

  getLocation = () => {
    const regex = /[a-z]+:/g;
    let parkCoords = this.state.location.replace(regex, '').replace(' ', '');
    return parkCoords;
  }

  changeLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }

  render() {
    let parkPage = (
      <span>
      <div className="container park-hero">
      <h1>{this.state.parkData.name}</h1>
      <p>{this.state.parkData.description}</p>
      <a href={this.state.parkData.directionsUrl} target="_blank"><button>Learn more</button></a>
    </div>
    <div className="park-images">
      <h3>Recent Images</h3>
      <div className="park-images-container">
        {this.state.imgData.slice(0, 6).map((img, index) => {
          return <div className="park-image" style={{backgroundImage:`url(${img.webformatURL})`}} key={index}></div>
        })}
      </div>
    </div>
    <div className="park-location">
      <div className="container">
        <h3>Location</h3>
        <p>{this.state.parkData.directionsInfo}</p>
      </div>
      <div className="google-maps">
        <iframe src={`https://maps.google.com/maps?q=${this.getLocation()}&z=9&output=embed`} width="600" height="450" frameBorder="0" style={{border:0}}></iframe>
      </div>
    </div>
    </span>
    );
    return(
      <div className="park-inner">
        <NavBar />
        {!this.state.isLoading ? parkPage : <PlaceHolder />}
        <Footer />
    </div>
    )
  }
}


const PlaceHolder = () => {
  return (
    <span>
      <div className="container park-hero placeholder">
        <h1 className="placeholder">LOADING</h1>
        <div className="p-placeholder">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button className="placeholder">Learn more</button>
      </div>
      <div className="park-images">
        <h3 className="placeholder">Recent Images</h3>
        <div className="park-images-container image-placeholder">
          <div className="park-image"></div>
          <div className="park-image"></div>
          <div className="park-image"></div>
          <div className="park-image"></div>
          <div className="park-image"></div>
          <div className="park-image"></div>
        </div>
      </div>
      <div className="park-location">
        <div className="container">
          <h3 className="placeholder">Location</h3>
          <p></p>
        </div>
        <div className="google-maps placeholder">
        </div>
      </div>
    </span>
  );
}