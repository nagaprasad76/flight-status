import React, { Component } from "react";
import moment from 'moment';
import { connect } from 'react-redux';

import Button from "../components/Button";
import CalendarInput from "../components/CalendarInput";
import InputWithAutocomplete from "../components/InputWithAutocomplete";
import "../styles/SearchBox.css";
import originicon from "../static/blackplace.png";
import {
  getAllDestinations,
  getFlights
} from "../actions";

const mapStateToProps = state => {
  const destinations = state.destinationReducer.destinations;
  return {
    destinations,
  }
};

const mapDispatchToProps = dispatch => ({
  getAirports: () => {
    getAllDestinations(dispatch)
  },
  getFlightsStatus: (originValue, destinationValue, dateValue) => {
    getFlights(dispatch, originValue, destinationValue, dateValue)
  }
});

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: {
        origin: false,
        dest: false
      },
      show: false,
      originValue : '',
      destinationValue: '',
      dateVal: ''
    }
  }

  componentDidMount() {
    this.props.getAirports();
  }

  onSearch = async() => {
    const { originValue, destinationValue, dateVal } = this.state;
    if (originValue && destinationValue && dateVal) {
      await this.props.getFlightsStatus(originValue, destinationValue, moment(dateVal).format('YYYY-MM-DD'));
      this.setState({show: false});
    } else {
      this.setState({show: true});
    }
  }


  handleOriginInput = (value) => {
    this.setState({
      originValue: value
    })
  }

  handleDestInput = (value) => {
    this.setState({
      destinationValue: value
    })
  }

  handleDeptInput = (value) => {
    this.setState({
      dateVal: value
    })
  }


  render() {
    const { position, destinations = [] } = this.props;
    let originData = [destinations];
    let destData = [destinations];
    const { dateVal } = this.state;

    return (
      <div className={"card " + position}>

        <div className="form">
          <InputWithAutocomplete label="Leaving From" placeholder="Origin" icon={originicon} results={originData[0]} onChange={this.handleOriginInput}/>
          <InputWithAutocomplete label="Departing To" placeholder="Destination" icon={originicon} results={destData[0]} onChange={this.handleDestInput}/>
          <CalendarInput label="Departing" date={dateVal} start={new Date()} onChange={this.handleDeptInput}/> 
          <Button label="View Details" onClick={this.onSearch}/>   
        </div>
        {
          this.state.show &&
          <div className="message">{"Select appropriate origin, destination & departure date"}</div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);