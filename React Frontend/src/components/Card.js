import React, { Component } from "react";

import "./css/Card.css";

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">{this.props.name}</div>
      </React.Fragment>
    );
  }
}

export default Card;
