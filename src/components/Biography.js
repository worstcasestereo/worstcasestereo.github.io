import React, { Component } from 'react';

class Biography extends Component {
  render() {
    return (
      <section className="section container-fluid full-width biography" id="about">
        <div className="row">
          <div className="col-xs-12 col-md-3 col-md-offset-1 biography-description">
            <h2 className="title inverse">biographie</h2>
            <div className="voffset40"></div>
              <blockquote className="cousine">
              &quot;Worst Case Stereo va droit au but.<br />
              Les premiers morceaux dévoilés affichent une efficacité à toute épreuve, fusionnant à loisir les mélodies du rock alternatif à une certaine furie qu’on pense héritée de l’emo.<br/>Une désinvolture notamment mise en avant par une voix polymorphe, n’hésitant pas à passer de lignes claires à saturées, allant même jusqu’à titiller le parler-chanter cher au post hardcore d’At The Drive In. Ajoutez-y des riffs largement inspirés par (et non pas copiés sur) le grunge, et vous obtiendrez une formation on ne peut plus prometteuse.<br />
              A surveiller, dans le meilleur des cas.&quot;<br />
              </blockquote>
              <p className="cousine bio-author">- Clément Duboscq (New Noise / FIP)</p>
              <p>&nbsp;</p>
              <h2>Lineup: <small className="info">(de gauche à droite)</small></h2>
              <p className="cousine">
                Mathilde (chant)<br />
                Nico (batterie)<br />
                Thomas (basse)<br />
                Julien (guitare)<br />
              </p>
              <p>&nbsp;</p>
              <p>
                <a href="https://drive.google.com/drive/folders/1WUy5cikcI-7bwWGLgQFBtIpk1i3EnjAM" className="btn square" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-file-pdf"></i> Media &amp; fiche technique
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


