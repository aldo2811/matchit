import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Card from "./Card";

import "./css/Card.css";

class Cards extends Component {
  state = {
    cards: [],
    curCard: { fields: { course_code: "empty" } },
    swipedCard: { fields: { course_code: "empty" } }
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

  render() {
    return (
      <div id="board">
        <div id="register">
          <button>Register as Tutor</button>
        </div>
        <div id="cards">
          <Card name={this.state.curCard.fields.course_code}></Card>
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
  }
}

export default Cards;
