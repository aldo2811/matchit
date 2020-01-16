import React, { Component } from "react";
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom'

import Card from "./Card";

import "./css/Card.css";

class Cards extends Component {
  state = {
    cards: [],
    currentId: 0
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/matchit/request/")
      .then(res => res.json())
      .then(res=>{
        console.log(res)
        this.setState({
          cards:res
        }, () => {      
        this.setState({
          currentId: this.state.cards[this.state.cards.length - 1].id
        });
        });
      })
    
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
      
        <div id="board">
          
          
          
          <div id="register">
            <button>Register as Tutor</button>
          </div>
          <div id="cards">
            {this.state.cards.map((el, i) => {
              return <Card key={el.id} name={el.fields.course_code}></Card>;
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
