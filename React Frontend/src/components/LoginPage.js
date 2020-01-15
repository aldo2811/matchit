import React, { Component } from "react";
import LoginForm from "./LoginForm";

import "./css/LoginPage.css"

class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                <LoginForm/>
            </div>
        )
    }
}

export default LoginPage;