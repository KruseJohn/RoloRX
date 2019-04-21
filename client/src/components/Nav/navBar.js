import React from "react";
import "./navBar.css";

class NavLinks extends React.Component {

    render() {
        return (
            <div className='topNav'>
                <div className='row'>
                    <div className='col-3 bar-cols'>
                        <a href='/mainPage' data-toggle="tooltip" data-placement="top" title="Patient Records"><i className="fas fa-file-medical fa-2x"></i></a>
                    </div>
                    <div className='col-3 bar-cols'>
                        <a href='/addRx' data-toggle="tooltip" data-placement="top" title="Add Rx"><i className="fas fa-prescription fa-2x"></i></a>
                    </div>
                    <div className='col-3 bar-cols'>
                        <a href='/addpatient' data-toggle="tooltip" data-placement="top" title="Add Patient"><i className="fas fa-female fa-2x"></i><i className="fas fa-male fa-2x"></i></a>
                    </div>
                    <div className='col-3 bar-cols'>
                        <a href='/signout' data-toggle="tooltip" data-placement="top" title="Sign Out" onClick={this.removeToken}><i className="fas fa-sign-out-alt fa-2x"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NavLinks;