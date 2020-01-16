import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Card from "./Card";

import "./css/Card.css";

class Cards extends Component {
  state = {
    cards: [],
    currentId: 0,
    isSwiped: ""
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
            this.setState({
              currentId: this.state.cards[this.state.cards.length - 1].pk
            });
          }
        );
      });
  }

  noBut = () => {
    console.log(`no ${this.state.currentId}`);
    this.setState({ isSwiped: "l" }, () => {
      setTimeout(() => {
        this.updateCards();
      }, 1000);
    });
  };

  yesBut = () => {
    console.log(`yes ${this.state.currentId}`);
    this.setState({ isSwiped: "r" }, () => {
      setTimeout(() => {
        this.updateCards();
      }, 1000);
    });
  };

  updateCards = () => {
    this.setState(
      {
        cards: this.state.cards.filter(el => el.pk !== this.state.currentId)
      },
      () => {
        try {
          this.setState({
            currentId: this.state.cards[this.state.cards.length - 1].pk
          });
        } catch {
          this.setState({
            cards: [
              {
                name: "empty",
                pk: 0,
                fields: {
                  course_code: "empty"
                }
              }
            ]
          });
        }
      }
    );
  };

  render() {
    return (
      <div id="board">
        <div id="register">
          <button>Register as Tutor</button>
        </div>
        <div id="cards">
          {this.state.cards.map((el, i) => {
            if (this.state.isSwiped && el.pk === this.state.currentId) {
              return (
                <Card
                  key={el.pk}
                  name={el.fields.course_code}
                  dir={this.state.isSwiped}
                ></Card>
              );
            } else {
              return <Card key={el.pk} name={el.fields.course_code}></Card>;
            }
          })}
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
