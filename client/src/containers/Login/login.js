import React from "react";
//import axios from "axios";
import Field from "../../components/Field";
import Logo from "../../components/Logo/logo";
import { Message } from "../../components/Message/message";
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
            <div>
                <div className="gradient-background">
                    <Logo />
                    <div className="login-div">
                        <div className="bbstyle login-div container">
                            <h3 className="login-h3">LOG IN</h3>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <form className='inputForm' >
                                        <Field
                                            name='username'
                                            id='nameArea'
                                            value={this.state.username}
                                            onChange={this.handleInput}
                                            placeholder='username'
                                        />
                                        <Field
                                            name='password'
                                            type='password'
                                            id='password'
                                            value={this.state.password}
                                            onChange={this.handleInput}
                                            placeholder='password'
                                        />
                                    </form>
                                </div>
                            </div>
                            <input id='submit' type='submit' value='SUBMIT' onClick={this.handleSubmit} />
                            <span><a href='/signup'>Sign Up</a></span> 
                            <br />
                            {this.state.error ? <Message key='1'> {this.state.errorMessage} </Message> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;