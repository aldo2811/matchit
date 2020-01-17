import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Card from "./Card";

import "./css/Card.css";
import RegisForm from "./RegisForm";

class Cards extends Component {
  state = {
    cards: [],
    curCard: {
      fields: {
        person: "empty",
        course_code: "empty",
        email: "empty",
        contact_no: "empty"
      }
    },
    swipe: "",
    currentId: ""
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/matchit/request/")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState(
          {
            cards: res
          },
          () => {
            console.log(this.state.cards[this.state.cards.length - 1]);
            this.setState({
              curCard: this.state.cards[this.state.cards.length - 1],
              cards: this.state.cards.slice(0, this.state.cards.length - 1)
            });
          }
        );
      });
  }

  noBut = () => {
    console.log(`no ${this.state.currentId}`);
    this.updateCards();
  };

  yesBut = () => {
    console.log(`yes ${this.state.currentId}`);
    this.updateCards();
  };

  updateCards = () => {
    this.setState({
      curCard: this.state.cards[this.state.cards.length - 1]
        ? this.state.cards[this.state.cards.length - 1]
        : { fields: { course_code: "empty" } },
      cards: this.state.cards.slice(0, this.state.cards.length - 1)
    });
  };

  cards = () => {
    return (
      <div id="board">
        <div id="register">
          <Link to="/registration">
            <button>Register as Tutor</button>
          </Link>
        </div>
        <div id="cards">
          <Card
            course_code={this.state.curCard.fields.course_code}
            image_url={this.state.curCard.fields.image_url}
            content={this.state.curCard}
            dir={this.state.swipe}
          ></Card>
        </div>
        <div id="buttons">
          <div className="theButton noBut" onClick={this.noBut}>
            No
          </div>
          <div className="theButton yesBut" onClick={this.yesBut}>
            Yes
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Router>
        <Route exact path="/" component={this.cards} />
        <Route exact path="/registration" component={RegisForm} />
      </Router>
    );
  }
}

export default Cards;
