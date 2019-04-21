import React from "react";
import NavLinks from "../../components/Nav/navBar";
//import axios from "axios";
import Logo from "../../components/Logo/logo";
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
    };

    render() {

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
                            <button onClick={this.handleFormSubmit} className="btn standard-btn gePatientData">SUBMIT</button>
                        </div >
                    </div >
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPatient;