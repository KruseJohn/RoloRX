import React from "react";
//import axios from "axios";
import Logo from "../../components/Logo/logo";
import Field from "../../components/Field";
import { Message } from "../../components/Message/message";
import "./signup.css";

class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        redirect: false,
        error: false,
        errorMessage: ''
    }

    render() {

        return (
            <div>
                <div className="gradient-background">
                    <Logo />

                    <div className='signup bbstyle container'>
                        <h3 className="login-h3">SIGN UP</h3>
                        <br/>
                        <div className='row'>
                            <div className='col-md-6'>
                                <form className="signupFormField">
                                    <label htmlFor="firstName" className="signupFormLabel">First Name</label>
                                    <Field
                                        name='firstName'
                                        id='firstName'
                                        value={this.state.firstName}
                                        onChange={this.handleInput}
                                    />
                                </form>
                            </div>

                            <div className='col-md-6 last'>
                            <form className="signupFormField">
                                    <label htmlFor="lastName" className="signupFormLabel">Last Name</label>
                                    <Field
                                        name='lastName'
                                        id='lastName'
                                        value={this.state.lastName}
                                        onChange={this.handleInput}
                                    />
                                </form>
                            </div>

                        </div>

                        <br/>

                        <div className='row'>
                            <div className='col-md-12'>
                            <form className="signupFormField">
                                    <label htmlFor="username" className="signupFormLabel">User Name</label>
                                    <Field
                                        name='username'
                                        id='username'
                                        value={this.state.username}
                                        onChange={this.handleInput}
                                    />
                                </form>
                            </div>
                        </div>

                        <br/>

                        <div className='row'>
                            <div className='col-md-6'>
                            <form className="signupFormField">
                                    <label htmlFor="password" className="signupFormLabel">Password</label>
                                    <Field
                                        name='password'
                                        id='signupPassword'
                                        type='password'
                                        value={this.state.password}
                                        onChange={this.handleInput}
                                        placeholder='Password'
                                    />
                                </form>
                            </div>
                            <div className='col-md-6'>
                            <form className="signupFormField">
                                    <label htmlFor="confirmPassword" className="signupFormLabel">Confirm Password</label>
                                    <Field
                                        name='confirmPassword'
                                        id='confirmPassword'
                                        type='password'
                                        value={this.state.confirmPassword}
                                        onChange={this.handleInput}
                                        placeholder='Confirm Password'
                                    />
                                </form>
                            </div>
                                <input id='submit' type='submit' value='SUBMIT' onClick={this.registerUser} />
                                <a href="login">Already signed up? Log in!</a>
                                {this.state.error ? <Message key='1'> {this.state.errorMessage} </Message> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;