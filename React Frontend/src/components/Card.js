import React, { Component } from "react";

import "./css/Card.css";

class Card extends Component {
  state = {
    classes: "card"
  };

  swipe = dir => {
    if (dir === "r") {
      this.setState({ classes: "card swiped-right" });
    } else if (dir === "l") {
      this.setState({ classes: "card swiped-left" });
    } else {
    }
  };

  componentWillReceiveProps() {
    this.swipe(this.props.dir);
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.state.classes}>{this.props.name}</div>
      </React.Fragment>
    );
  }
}

export default Card;
