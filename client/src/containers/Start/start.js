import React from "react";
import "./start.css";
import Logo from "../../components/Logo/logo";


class Start extends React.Component {

    removeToken = () => {
        console.log("removing JWT");
        localStorage.removeItem('JWT')
        let accessString = localStorage.getItem('JWT');
        console.log(accessString);
    }

    render() {
        return (
            <div>
                <div className="gradient-background">
                    <Logo />
                <div className="container start-div">
                    <div className="row">
                        <div className="col-sm">
                            <a href='/login'><h3 id="logIn" className='startStyle'>Log-in</h3></a>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm">
                            <a href='/signup'><h3 id="signUp" className='startStyle'>Sign-up</h3></a>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm">
                            <a href='/info'><h3 id="info" className='startStyle'>About</h3></a>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}

export default Start;