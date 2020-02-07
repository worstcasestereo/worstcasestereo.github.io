import React, { Component } from 'react';

class LatestVideo extends Component {
  render() {
    return (

      <div className="section new-video" id="latestVideo">
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12">
              <div className="voffset70"></div>
              <div className="title-wrapper">
                <h2 className="title inverse">VIDEOS</h2>
              </div>
              <div className="voffset70"></div>
              <iframe title="Worst Case Stereo - Bad Omens" src="https://www.youtube.com/embed/ZSlkZaVAWwg" width="1060" height="596" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div className="voffset70"></div>
              <iframe title="Lost Innocence - Live at New Morning (Paris)" src="https://www.youtube.com/embed/USn11G-L5sw" width="1060" height="596" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="voffset70"></div>
        </div>
      </div>

    );
  }
}

export default LatestVideo;

