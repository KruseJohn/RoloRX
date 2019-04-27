import React from "react";
import Logo from "../../components/Logo/logo";
import NavLinks from "../../components/Nav/navBar";
import "./profile.css";


class Profile extends React.Component {
    render() {

        return (
            <div className="main-body gradient-background">
                <Logo />
                <div className="container">
                    <div className='row mainpage'>
                        <div className='col-md-12 patient-cards'>
                            {this.state.patients.map(patient => (
                                <h1>Patient Name</h1>
                            ))}
                        </div>
                    </div>
                </div>
                <NavLinks />
            </div>

        )
    }
}

export default Profile;