import React from "react";
import NavLinks from "../../components/Nav/navBar";
import Logo from "../../components/Logo/logo";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./addPatient.css";


class AddPatient extends React.Component {

    state = {
        patients: [],
        firstName: "",
        lastName: "",
        userId: "",
        redirect: false,
        isLoggedIn: ''
    };

    async componentDidMount() {

        let accessString = localStorage.getItem('JWT');
        // console.log(accessString);
        if (accessString == null) {
            this.setState({
                isLoggedIn: false,
                error: true,
            });
        } else {
            await axios
                .get('/findUser', {
                    params: {
                        username: this.props.match.params.username,
                    },
                    headers: { Authorization: `JWT ${accessString}` },
                })
                .then(response => {
                    this.setState({
                        userId: response.data.id,
                        isLoggedIn: true,
                        error: false,
                    });
                    console.log(response)
                    console.log(this.state.userId)
                })
                .catch(error => {
                    console.log(error.data);
                });
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        //console.log("CLICK")
        axios.post('/api/patients', {
            name_first: this.state.firstName,
            name_last: this.state.lastName,
            UserId: this.state.userId
        }).then(response => {

            if (response !== null) {
                console.log("patient inserted");
                this.setState({ redirect: true })
            } else {
                console.log("patient NOT inserted");
            }
        })
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/mainpage' />
        }

        if (this.state.isLoggedIn === false) {
            window.location.href = '/login'
        }

        return (
            <div className="dashboard-body gradient-background">
                <NavLinks />
                <Logo />
                <div className="container">
                    <div className='row'>
                        <div className='col-md-12'>
                        <div className="bbstyle">
                            <h3 className="login-h3">ADD A NEW PATIENT</h3>
                            <br/>
                            <div className="form-group">
                                <input type="text" className="form-control formFieldsStyle"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                    placeholder="First Name"
                                />
                                <input type="text" className="form-control formFieldsStyle"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    name="lastName"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="col-md-4 mx-auto">
                            <button onClick={this.handleFormSubmit} className="btn standard-btn getPatientData">SUBMIT</button>
                        </div >
                        </div>
                    </div >
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPatient;