import React, { Component } from 'react';
import Events from './components/Events';
import Header from './components/Header';
import Intro from './components/Intro';
import APlaceToCallYourOwn from './components/APlaceToCallYourOwn';
import Biography from './components/Biography';
import Contact from './components/Contact';
import LatestVideo from './components/LatestVideo';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <LatestVideo />
        <APlaceToCallYourOwn />
        <Biography />
        <Events />
        <Contact />
      </div>
    );
  }
}

export default App;
