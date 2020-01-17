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
    const style = {
      backgroundImage: `url(${this.props.image_url})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
    return (
      <React.Fragment>
        <div className={this.state.classes} style={style}>
          <div className="course-code">{this.props.course_code}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
