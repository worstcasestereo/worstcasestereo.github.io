import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="jHeader">
        <nav className="navbar navbar-default " role="navigation">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Open navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse navbar-ex1-collapse" id="navbar-muziq">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="#home">Home</a></li>
              <li><a href="#latestAlbum">LISTEN</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#upcomingEvents">EVENTS</a></li>
              <li><a href="#anchor08">GET IN TOUCH</a></li>
              <li className="social-logo"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/worstcasestereo"><i className="fab fa-facebook"></i></a></li>
              <li className="social-logo"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/worstcasestereo"><i className="fab fa-instagram"></i></a></li>
              <li className="social-logo"><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/worstcasestereo"><i className="fab fa-twitter"></i></a></li>
              <li className="social-logo"><a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/worstcasestereo"><i className="fab fa-soundcloud"></i></a></li>
            </ul>
          </div>

        </nav>
      </header>
    );
  }
}

export default Header;
