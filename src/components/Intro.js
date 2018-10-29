import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <section className="intro full-width jIntro" id="home">
        <div id="intro-carousel" className="carousel slide carousel-fade" data-pause="true">
          <div className="carousel-inner" role="listbox">

            <div className="item active intro-fullscreen">
              <div className="fill" style={{ backgroundImage: "url('images/splash/worst-case-stereo-band-01.jpg')" }}></div>
              <div className="carousel-caption intro-center">
                <h1 data-animation="animated fadeIn" className="primary-title">
                  <span>Worst Case Stereo</span>
                </h1>
                <div id="chevron-scroll-down" className="row">
                  <div className="col-md-12">
                    <i className="fa fa-chevron-circle-down"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Intro;

