import React, { Component } from 'react';
import Event from './Event';
import Countdown from 'react-countdown-now';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    fetch('/wcs-events.json', { })
      .then(response => response.json())
      .then(data => this.setState({
        jsonData: data,
        loaded: true
      })
    );
  }

  renderCountdown({ days, hours, minutes, seconds }) {
    return(
      <div className="row upcomming-events-list">
        <div className="col-xs-12 text-center">
          <div className="countdown" countdown="true">
            <div className="countdown-container days">
              <span className="countdown-value days-bottom" data-days>{days}</span>
              <span className="countdown-heading days-top">days</span>
            </div>
            <div className="countdown-container hours">
              <span className="countdown-value hours-bottom" data-hours>{hours}</span>
              <span className="countdown-heading hours-top">hours</span>
            </div>
            <div className="countdown-container minutes">
              <span className="countdown-value minutes-bottom" data-minutes>{minutes}</span>
              <span className="countdown-heading minutes-top">minutes</span>
            </div>
            <div className="countdown-container seconds">
              <span className="countdown-value seconds-bottom" data-seconds>{seconds}</span>
              <span className="countdown-heading seconds-top">seconds</span>
            </div>
          </div>
        </div>
      </div>
    )
  };

  getFutureEvents(json) {
    var now = Date.now()
    return json.filter(function (event) {
      var date = Date.parse(event.start_time)
      return (date >= now)
    });
  }

  getPastEvents(json) {
    var now = Date.now()
    return json.filter(function (event) {
      var date = Date.parse(event.start_time)
      return (date < now)
    });
  }

  render() {

    if (this.state.loaded) {
      var futureEvents = this.getFutureEvents(this.state.jsonData)
      var pastEvents = this.getPastEvents(this.state.jsonData)
    };

    return (

      <section className="section container-fluid full-width upcomming-events-list" id="upcomingEvents">
        <div className="container">
          <div className="voffset70"></div>
          <div className="title-wrapper">
            <h2 className="title">CONCERTS</h2>
          </div>
          <div className="voffset80"></div>
          { this.state.loaded && futureEvents.length > 0 &&
          <div>
            <div className="row next-show">
              <div className="col-xs-12">
                <div className="title-wrapper">
                  <h2 className="next-show-title">Next Show in</h2>
                </div>
              </div>
            </div>
            <div className="voffset20"></div>
            <Countdown date={futureEvents[0].start_time} renderer={this.renderCountdown}/>
          </div>
          }
          { this.state.loaded && futureEvents.length === 0 &&
            <div className="text-center">Aucun concert n'est pour le moment planifié...</div>
          }
          <div className="voffset50"></div>
          <div id="events">
            { !this.state.loaded &&
              <p>Chargement des concerts...</p>
            }
            { this.state.loaded &&
              futureEvents.map((event, index) => <Event data={(event)} key={index} />)
            }
          </div>
          <div className="voffset80"></div>
          <div className="text-center">
            <a href="https://www.messenger.com/t/worstcasestereo" target="_blank" rel="noopener noreferrer" className="btn square inverse">Voir les concerts passés</a>
          </div>

          <div id="events" className="hidden">
            { !this.state.loaded &&
              <p>Chargement des concerts...</p>
            }
            { this.state.loaded &&
              pastEvents.map((event, index) => <Event data={(event)} key={index} />)
            }
          </div>


          <div className="voffset50"></div>
        </div>
      </section>
    );
  }
}

export default Events;
