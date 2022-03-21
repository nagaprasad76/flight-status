import React, { Component } from "react";
import "./InputWithAutocomplete.css";

class InputWithAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      focus: false,
      isSelected: false,
      shortName : ''
    };
  }

  handleFocus =() => {
    this.setState({ focus: true });
  }

  handleBlur = ()=> {
    setTimeout(() => {
      this.setState({focus: false});
    }, 200);
  }

  selectItem(item) {
    this.setState({ value: `${item.shortName}${' ('}${item.iataCode}${')'}`, shortName: item.shortName,  isSelected: true, focus: false});
    this.props.onChange(item.iataCode);
  }

  escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
  }
 
  render() {
    const {
      label = "",
      placeholder = "",
      results = [],
      onChange,
      icon
    } = this.props;
    return (
      <div className="container" onBlur={this.handleBlur}>
        <div className="label">{label}</div>
        {
          icon &&
          <div className="icon">
            <img height={30} src={icon}/>
          </div>
        }
        <input
          className="input"
          placeholder={placeholder}
          value={this.state.value}
          onChange={(e) => { this.setState({ value: e.target.value, shortName: e.target.value, isSelected: false});onChange(false)}}
          onFocus={this.handleFocus}/>
          {/* type="search"/> */}
        <div className={this.state.focus? "list-container": "hide"}>
          <ul className="list">
            {
                Object.keys(results)
                .map(val => results[val])
                .filter((item) => {
                  let query = this.escapeRegExp(this.state.shortName)
                  let q = new RegExp(query, 'i');
                  return q.test(item.shortName);
                })
                .map((item) => (
                  <li key={item.iataCode} className="list-item" onClick={() => this.selectItem(item)}>{`${item.shortName}${' ('}${item.iataCode}${')'}`}</li>
                ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default InputWithAutocomplete;