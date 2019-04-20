import React from "react";
//import axios from "axios";
import "./login.css";



class Login extends React.Component {
    state = {
        username: '',
        password: '',
        redirect: false,
        error: false,
        errorMessage: ''
    }

    render() {
        return (
            <div><h1>Hello!</h1></div>
        )
    }
}

export default Login;