import React, { Component } from "react";

import Card from "./Card";

import "./css/Card.css";

class Cards extends Component {
  state = {
    cards: [
      {
        name: "error",
        id: 2
      },
      {
        name: "error2",
        id: 3
      },
      {
        name: "error3",
        id: 4
      },
      {
        name: "error4",
        id: 5
      }
    ],
    currentId: 0
  };

  componentDidMount() {
    this.setState({
      currentId: this.state.cards[this.state.cards.length - 1].id
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
    this.setState(
      {
        cards: this.state.cards.filter(el => el.id !== this.state.currentId)
      },
      () => {
        try {
          this.setState({
            currentId: this.state.cards[this.state.cards.length - 1].id
          });
        } catch {
          this.setState({ cards: [{ name: "empty", id: 0 }] });
        }
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <div id="board">
          <div id="cards">
            {this.state.cards.map((el, i) => {
              return <Card key={el.id} name={el.name}></Card>;
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
      </React.Fragment>
    );
  }
}

export default Cards;
