import React, { Component } from "react";

import "./css/DialogBox.css";

export default class DialogBox extends Component {
  state = {
    isOpen: false
  };
  render() {
    const style = {
      backgroundImage: `url(${this.props.image_url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "grayscale(30%)"
    };
    return (
      <div id="dialog-box" style={style}>
        <div id="dialog-box-box">
          {this.props.course_code}
          <br></br>
          {this.props.email}
          <br></br>
          {this.props.contact_no}
        </div>
        <div id="dialog-box-button" onClick={this.props.dialogBoxClose}>
          X
        </div>
      </div>
    );
  }
}
