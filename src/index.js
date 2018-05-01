import React from 'react';
import {render} from 'react-dom';
import './style/index.css';
import NationalParks from './NationalParks';
import Home from './components/Home/Home';
import InnerPage from './components/InnerPage/InnerPage';


import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parkName: '',
    }
  }
  
  setParkName = (parkName) => {
    this.setState({
      parkName: parkName
    })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={() => <Home parkName={this.state.parkName} setParkName={this.setParkName} />} />
          {NationalParks.map(park => <Route path={`/${park.link}`} render={props => <InnerPage parkName={this.state.parkName} />} key={park} />)}
        </Switch>
      </div>
    )
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.querySelector('.app'));