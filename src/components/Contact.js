import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (

      <section className="section inverse-color contact" id="anchor08">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="voffset70"></div>
              <div className="title-wrapper">
                <h2 className="title inverse">CONTACT</h2>
              </div>
              <div className="voffset80"></div>
            </div>
          </div>

          <hr className="hidden-xs" />
          <div className="row no-gutter">
            <div className="col-xs-12 col-md-4 text-center">
              <div className="voffset40"></div>
              <h2 className="title-follow">LOCALISATION</h2>
              <div className="voffset40"></div>
              <p className="name"><i className="fa fa-location-arrow"></i> Paris, France</p>
              <p className="phone"><i className="fa fa-globe-americas"></i> Travel worldwide</p>
              <div className="voffset40"></div>
            </div>
            <div className="col-xs-12 col-md-4 text-center">
              <div className="voffset40"></div>
              <h2 className="title-follow">TELEPHONE</h2>
              <div className="voffset40"></div>
              <p className="name">Nicolas</p>
              <p className="phone"><a href="tel:+33683196902"><i className="fa fa-mobile-alt"></i> +33 6 83 19 69 02</a></p>
              <div className="voffset20"></div>
              <p className="name">Thomas</p>
              <p className="phone"><a href="tel:+33687256091"><i className="fa fa-mobile-alt"></i> +33 6 87 25 60 91</a></p>        
              <div className="voffset40"></div>
            </div>
            <div className="col-xs-12 col-md-4 text-center">
              <div className="voffset40"></div>
              <h2 className="title-follow">EMAIL</h2>
              <div className="voffset40"></div>
              <p className="email">
                <a href="https://www.messenger.com/t/worstcasestereo" target="_blank" rel="noopener noreferrer" className="btn square icon"><i className="fab fa-facebook-messenger"></i> Contactez-nous</a>
              </p>
              <div className="voffset40"></div>
            </div>
            <div className="voffset40"></div>
          </div>
          <hr className="hidden-xs" />

          <div className="row social">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/worstcasestereo"><i className="fab fa-facebook"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/worstcasestereo"><i className="fab fa-instagram"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/worstcasestereo"><i className="fab fa-twitter"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/worstcasestereo"><i className="fab fa-soundcloud"></i></a>
          </div>
        </div>
      </section>

    );
  }
}

export default Contact;




