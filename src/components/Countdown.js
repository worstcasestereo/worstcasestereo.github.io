import React, { Component } from 'react';

class Countdown extends Component {
  render() {
    return (
      <div className="row upcomming-events-list">
        <div className="col-xs-12 text-center">
          <div className="countdown" countdown="true" data-date={this.props.date}>
            <div className="countdown-container days">
              <span className="countdown-value days-bottom" data-days>0</span>
              <span className="countdown-heading days-top">days</span>
            </div>
            <div className="countdown-container hours">
              <span className="countdown-value hours-bottom" data-hours>0</span>
              <span className="countdown-heading hours-top">hours</span>
            </div>
            <div className="countdown-container minutes">
              <span className="countdown-value minutes-bottom" data-minutes>0</span>
              <span className="countdown-heading minutes-top">minutes</span>
            </div>
            <div className="countdown-container seconds">
              <span className="countdown-value seconds-bottom" data-seconds>0</span>
              <span className="countdown-heading seconds-top">seconds</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
