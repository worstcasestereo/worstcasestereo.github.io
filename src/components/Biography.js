import React, { Component } from 'react';

class Biography extends Component {
  render() {
    return (
      <section className="section container-fluid full-width biography" id="about">
        <div className="row">
          <div className="col-xs-12 col-md-3 col-md-offset-1 biography-description">
            <h2 className="title inverse">about</h2>
            <div className="voffset40"></div>
              <p className="cousine">
                Worst Case Stereo, French rock band from Paris, plays music inspired by 90s grunge (Foo Fighters, Hole, The Smashing Pumpkins) and the return of garage rock in the 2000s (The Vines, Klaxons, Yeah Yeah Yeahs).
              </p>
              <p>&nbsp;</p>
              <p className="cousine">
                To create their distinctive rock, Mathilde, the vocalist, captivates the audience with a voice that goes from clean to screams.
              </p>
              <p>&nbsp;</p>
              <h2>Lineup: <small className="info">(left to right)</small></h2>
              <p className="cousine">
                Mathilde (lead singer)<br />
                Nico (drums)<br />
                Thomas (bass)<br />
                Julien (guitar)<br />
              </p>
              <p>&nbsp;</p>
              <p>
                <a href="https://drive.google.com/open?id=12jTm5UpCcwEIvmL6z26e5jl-JmWjd38g" className="btn square" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-file-pdf"></i> Download Tech Rider
                </a>
              </p>
          </div>
          <div className="col-xs-12 col-md-7 col-sm-offset-1 biography-image">
          </div>
        </div>
      </section>
    );
  }
}

export default Biography;


