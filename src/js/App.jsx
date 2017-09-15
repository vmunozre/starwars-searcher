import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import '../css/App.css';
import Searcher from './Searcher.jsx';
import Historic from './Historic.jsx';
import Carousel from './Carousel.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Searcher />
        <Historic />
        <Carousel />
      </div>
    );
  }
}

export default App;
