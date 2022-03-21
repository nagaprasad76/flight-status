import React, { Component } from "react";
import "./FlightCard.css";
import moment from 'moment';
import sn from 'classnames';
const HOURS = 'HH:mm';
const SHORT_DATE_SHORT_DAY_FORMAT = 'ddd D MMM';

class FlightCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statusColor: '',
      statusText: '',
    };
  }

  getStatusColor = (statusCode) => {
    let className;
    switch (statusCode) {
      case 'ARVD':
        className = 'status-arrived';
        break;
      case 'PDEP':
        className = 'status-notarrived';
        break;
      default:
        className = 'status-others';
    }
    return className;
  }

  getStatusText = (statusCode) => {
    let text;
    switch (statusCode) {
      case 'ARVD':
        text = 'ARRIVED';
        break;
      case 'PDEP':
        text = 'Not yet arrived';
        break;
      default:
        text = 'Status Unknown'
    }
    return text;
  }

  render() {
    const { flightCode, from, to, statusCode, departureTime, arrivalTime, departureTimeScheduled, arrivalTimeScheduled } = this.props.data;
    const { statusColor, statusText } = this.state;
    return (
      <div className="flight-card">
        <div className="detail-container">
          <div className="flight-time-details">
            <div className="flight-departure">
              <div className="flight-place">{from}</div>
              <div className="flight-place">{to}</div>
            </div>
            <div className="flight-departure">
              <div className="flight-dest-label"><span>Departed:</span></div>
              <div className="flight-dest-label"><span>Arrival:</span></div>
            </div>
            <div className="flight-departure flight-line-arrrived flight-line-not-arrrived">
              <div className="flight-time">{moment.utc(departureTime).format(HOURS)}</div>
              <div className="flight-line"><span>•</span></div>
              <div className="flight-time">{moment.utc(arrivalTime).format(HOURS)}</div>
            </div>
            <div className="flight-departure">
              <div>{moment.utc(departureTime).format(SHORT_DATE_SHORT_DAY_FORMAT)}</div>
              <div>{moment.utc(arrivalTime).format(SHORT_DATE_SHORT_DAY_FORMAT)}</div>
            </div>
            <div className="flight-departure">
              <div>{`Scheduled Departure : ${moment.utc(departureTimeScheduled).format(HOURS)}`}</div>
              <div>{`Scheduled Arrival : ${moment.utc(arrivalTimeScheduled).format(HOURS)}`}</div>
            </div>
          </div>
          <div className="flight-number">
            <div className="flight-tail">
              <img src="ek-tail.png" />
            </div>
            <div className="flight-code">
              {flightCode}
            </div>
            <div className={sn(`flight-status-banner`, this.getStatusColor(statusCode))}>{this.getStatusText(statusCode)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightCard;