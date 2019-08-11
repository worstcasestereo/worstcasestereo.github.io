import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <section className="intro full-width jIntro" id="home">
        <div id="intro-carousel" className="carousel slide carousel-fade" data-pause="true">
          <div className="carousel-inner" role="listbox">

            <div className="item active intro-fullscreen">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zqsZen2KiBs?autoplay=1&controls=0&loop=1&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="Worst Case Stereo - Lost Innocence" allowfullscreen></iframe>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Video;

