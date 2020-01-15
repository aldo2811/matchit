import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./css/LoginForm.css";

class LoginForm extends Component {
    state = {
        username: "",
        password : ""
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return(
            <div className="form-wrapper">
                <h2>Tutor Login</h2>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            placeholder="Username"
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LoginForm;