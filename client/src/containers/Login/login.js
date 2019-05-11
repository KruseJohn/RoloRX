import React from "react";
import axios from "axios";
import Field from "../../components/Field";
import Logo from "../../components/Logo/logo";
import { Message } from "../../components/Message/message";
import { Redirect } from "react-router-dom";
import swal from "@sweetalert/with-react";

class Login extends React.Component {
    initialState = {
        username: "",
        password: "",
        redirect: false,
        error: false,
        errorMessage: ""
    }
    
    state = this.initialState

    componentDidMount() {
        localStorage.removeItem("JWT")
    }

    handleInput = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.username === "" || this.state.password === "") {
            this.setState({
                showError: false,
                showNullError: true,
                loggedIn: false,
            });
        } else {
            axios.post("/loginUser",
                    {
                        username: this.state.username,
                        password: this.state.password
                    }
                ).then(response => {
                    if (response.data === "Login failed") {

                        swal({
                            icon: "error",
                            title: "Login Failed!",
                            text: "Please be sure to enter the correct username and password...",
                            timer: 4000,
                            buttons: false
                          }).then(
                              function () {},
                              function (dismiss) {
                                  if (dismiss === "timer") {
                                  }
                              }
                          ).then(showAlert => {
                        // console.log(response);
                        this.setState({
                            redirect: false,
                            error: false,
                            errorMessage: response.data,
                            username: "",
                            password: "" 
                        });
                    });
                    } else {
                        
                        swal({
                            icon: "success",
                            title: "Login Successful!",
                            text: " ",
                            timer: 1000,
                            buttons: false
                          }).then(
                              function () {},
                              function (dismiss) {
                                  if (dismiss === "timer") {
                                  }
                              }
                          ).then(showAlert => {
                            
                        console.log("successful login");
                      
                        this.setState({
                            loggedIn: true,
                            redirect: true
                        }); 
                    });  
                 localStorage.setItem("JWT", response.data.token);
                }        
             });    
        }
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/mainpage" />
            
        }

        return (
            <div>
                <div className="gradient-background">
                    <Logo />
                    <div className="login-div">
                        <div className="container bbstyle">
                            <h3 className="login-h3">LOG IN</h3>
                            <div className="row">
                                <div className="col-md-12">
                                    <form className="inputForm" >
                                        <Field
                                            name="username"
                                            id="nameArea"
                                            value={this.state.username}
                                            onChange={this.handleInput}
                                            placeholder="username"
                                        />
                                        <Field
                                            name="password"
                                            type="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={this.handleInput}
                                            placeholder="password"
                                        />
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto">
                            <input id="submit" type="submit" value="SUBMIT" onClick={this.handleSubmit} />
                            </div>
                            <span><a href="/signup">Don't have an account?  Sign up!</a></span> 
                            <br />
                            {this.state.error ? <Message key="1"> {this.state.errorMessage} </Message> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;