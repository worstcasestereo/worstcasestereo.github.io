import React, { Component } from 'react';
import Events from './components/Events';
import Header from './components/Header';
import Intro from './components/Intro';
import Video from './components/Video';
import LatestAlbum from './components/LatestAlbum';
import Biography from './components/Biography';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <LatestAlbum />
        <Biography />
        <Events />
        <Contact />
      </div>
    );
  }
}

export default App;
