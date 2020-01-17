import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegisForm from "./RegisForm";
import Cards from "./Cards";

import "./css/LoginPage.css";

class LoginPage extends Component {
  registration = () => {
    return (
      <div className="login-page">
        <div id="back-button">
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
        <RegisForm />
      </div>
    );
  };
  render() {
    return (
      <Router>
        <Route exact path="/" component={Cards} />
        <Route exact path="/registration" component={this.registration} />
      </Router>
    );
  }
}

export default LoginPage;
