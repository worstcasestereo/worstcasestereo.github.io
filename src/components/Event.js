import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    super(props)
    this.event_timestamp = new Date(props.data.start_time)
    this.readable_date = this.event_timestamp.toLocaleString("en-us", { month: "short" }) + ". " + new Date(props.data.start_time).getDate()
    this.is_passed = this.event_timestamp < Date.now() ? 1 : 0
    this.is_passed_class = this.is_passed ? "passed" : ""
  }

  render() {
    return (
      <div className={"row event " + this.is_passed_class}>
        <div className="col-xs-12 col-md-2 date-event ">
          { this.readable_date }
        </div>
        <div className="col-xs-12 col-md-4 venue">
          <p className="event-name">{this.props.data.title}</p>
          <p className="event-description" dangerouslySetInnerHTML={ {__html: this.props.data.venue.name} }></p>
          <p className="event-description" dangerouslySetInnerHTML={ {__html: this.props.data.venue.address} }></p>
        </div>
        <div className="col-xs-12 col-md-2 city">
          {this.props.data.venue.city}
        </div>
        <div className="col-xs-12 col-md-2">
        {this.props.data.ticket_url && !this.is_passed &&
          <p className="buy">
            <a href={this.props.data.ticket_url} target="_blank" rel="noopener noreferrer" className="btn square inverse icon"><i className="fa fa-ticket-alt"></i> buy ticket</a>
          </p>
        }
        </div>
        <div className="col-xs-12 col-md-2">
        {this.props.data.fb_event_url && !this.is_passed &&
          <p className="buy">
            <a href={this.props.data.fb_event_url} target="_blank" rel="noopener noreferrer" className="btn square inverse icon"><i className="fab fa-facebook-square"></i> RSVP</a>
          </p>
        }
        </div>
      </div>
    );


  }
}

export default Event;
