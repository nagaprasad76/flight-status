import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    const { label, onClick } = this.props;

    return (
      <div className="button" onClick={onClick}>
        {label}
      </div>
    );
  }
}

export default Button;