import React, { Component } from "react";
import Calendar from 'react-calendar';
import moment from 'moment';
import "./CalendarInput.css";

class CalendarInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  handleFocus = () => {
    this.setState({ focus: true });
  }

  handleBlur = () => {
    setTimeout(() => {
      this.setState({focus: false});
    }, 200);
  }

  onChange = (value) => {
    this.props.onChange(value);
    this.setState({ focus: false });
  }
 
  render() {
    let { label, date, start, icon } = this.props;
    if (date < start) {
      date = start;
    }

    return (
      <div className="container" onBlur={this.handleBlur}>
        <div className="label">{label}</div>
        {
          icon &&
          <div className="icon">
            <img alt="calendar" height={30} src={icon}/>
          </div>
        }
        <input className="input" value={moment(date).format("DD MMM YY")} onFocus={this.handleFocus} readOnly/>
        <div className={this.state.focus? "calendar-container": "hide"}>
          <Calendar
            minDate={start}
            onChange={this.onChange}
            value={date}
          />
        </div>
      </div>
    );
  }
}

export default CalendarInput;