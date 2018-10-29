import React, { Component } from 'react';
import Event from './Event';
import Countdown from './Countdown';
import jsonData from '../events.json';

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {

    var futureEvents = jsonData.filter(function (event) {
      var date = new Date(event.start_time);
      return (date >= Date.now());
    });

    var passedEvents = jsonData.filter(function (event) {
      var date = new Date(event.start_time);
      return (date <= Date.now());
    });


    this.setState({
      futureEvents: futureEvents,
      passedEvents: passedEvents,
      loaded: true
    });
  }

  render() {
    return (

      <section className="section container-fluid full-width upcomming-events-list" id="upcomingEvents">
        <div className="container">
          <div className="voffset70"></div>
          <div className="title-wrapper">
            <h2 className="title">UPCOMING EVENTS</h2>
          </div>
          <div className="voffset80"></div>
          { this.state.loaded && this.state.futureEvents.length > 0 &&
          <div>
            <div className="row next-show">
              <div className="col-xs-12">
                <div className="title-wrapper">
                  <h2 className="next-show-title">Next Show in</h2>
                </div>
              </div>
            </div>
            <div className="voffset20"></div>
            <Countdown date={this.state.futureEvents[0].start_time} />
          </div>
          }
          { this.state.loaded && this.state.futureEvents.length === 0 &&
            <div className="center-block">No event if currently scheduled...</div>
          }
          <div className="voffset50"></div>
          <div id="events">
            { !this.state.loaded &&
              <p>Loading events...</p>
            }
            { this.state.loaded &&
              this.state.futureEvents.map((event, index) => <Event data={(event)} key={index} />)
            }
          </div>
          <div className="voffset80"></div>
        </div>
      </section>
    );
  }
}

export default Events;
