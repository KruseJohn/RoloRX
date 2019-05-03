import React from "react";
import "./navBar.css";

class NavLinks extends React.Component {

    removeToken = () => {
        console.log("removing JWT");
        localStorage.removeItem('JWT')
        let accessString = localStorage.getItem('JWT');
        console.log(accessString);
    }

    render() {
        return (
            <div className='topNav'>
                <div className='row'>
                    <div className='col-3 bar-cols'>
                        <a href='/mainPage' className="hvr-grow" data-toggle="tooltip" data-placement="top" title="Patient Records"><i className="fas fa-home fa-2x hvr-icon black"></i></a>
                    </div>
                    <div className='col-3 bar-cols'>
                        <a href='/addRx' className="hvr-grow" data-toggle="tooltip" data-placement="top" title="Add Rx"><i className="fas fa-prescription fa-2x hvr-icon maroon"></i></a>
                    </div>
                    <div className='col-3 bar-cols'>
                        <a href='/addpatient' className="hvr-grow" data-toggle="tooltip" data-placement="top" title="Add Patient"><i className="fas fa-female fa-2x hvr-icon pink"></i><i className="fas fa-male fa-2x hvr-icon blue"></i></a>
                    </div>
                    <div className='col-3 bar-cols'>
                        <a href='/signout' className="hvr-grow" data-toggle="tooltip" data-placement="top" title="Sign Out" onClick={this.removeToken}><i className="fas fa-sign-out-alt fa-2x hvr-icon blue"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NavLinks;