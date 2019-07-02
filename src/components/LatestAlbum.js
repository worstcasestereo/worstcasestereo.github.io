import React, { Component } from 'react';

class LatestAlbum extends Component {
  render() {
    return (
      <section className="section latest-album" id="latestAlbum">
        <div className="container">
          <div className="">
            <div className="voffset70"></div>
            <div className="title-wrapper">
              <h2 className="title">A L&rsquo;ECOUTE</h2>
            </div>
            <div className="voffset80"></div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe title="Bad Omens" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/605463216&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
          </div>
          <div className="voffset40"></div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe title="Pills" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/534429711&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
          </div>
          <div className="voffset40"></div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe title="Aim for the Heart" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/497003118&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
          </div>
          <div className="voffset40"></div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe title="Hello" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/433091274&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> 
            </div>
          </div>
          <div className="voffset70"></div>
        </div>
      </section>
    );
  }
}

export default LatestAlbum;
