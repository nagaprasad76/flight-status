import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-input-range/lib/css/index.css';
import '../styles/Main.css';
import SearchBox from './SearchBox';
import FlightCard from '../components/FlightCard';


const mapStateToProps = state => {
  const flights = state.flightsReducer.flights;
  return {
    flights,
  }
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { flights = [] } = this.props;
    
    return (
      <div>
        <SearchBox position={'top'}/>
        <div className="result-container">
        {
        flights !== null
          ?
            flights
              .map(flight => {
                const {airlineDesignator, flightNumber, flightRoute} = flight;
                const {originActualAirportCode, destinationActualAirportCode, statusCode, departureTime, arrivalTime} = flightRoute[0];

                const data = {
                  flightCode: airlineDesignator + flightNumber,
                  from: originActualAirportCode,
                  to: destinationActualAirportCode,
                  statusCode,
                  departureTimeScheduled : departureTime.schedule,
                  departureTime : departureTime.estimated,
                  arrivalTimeScheduled : arrivalTime.schedule,
                  arrivalTime : arrivalTime.estimated,
                }
                
                return (<FlightCard key={data.flightCode} data={data} />)
              })
          :
            (
              <div className="message-container">
                Oops! Looks like you have to choose another day for your trip!
              </div>
            )
        }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);