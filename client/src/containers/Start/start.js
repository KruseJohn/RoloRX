import React from "react";
import "./start.css";
import image from "../../components/Images/drugs.png";
import Logo from "../../components/Logo/logo";

var sectionStyle = {
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "40vh",
    backgroundImage: "url(" + image + ")",
    opacity: .6
  };

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
                    <section style={ sectionStyle }>
                    </section>
                    <div className="container start-div">
                        <div className="row">
                            <div className="col-sm-3">
                                <a href='/login'><h3 id="logIn" className='startStyle'>Log-in</h3></a>
                            </div>
                            <div className="col-sm"></div>
                            <div className="col-sm-3">
                                <a href='/signup'><h3 id="signUp" className='startStyle'>Sign-up</h3></a>
                            </div>
                            <div className="col-sm"></div>
                            <div className="col-sm-3">
                                <a href='/info'><h3 id="info" className='startStyle'>About</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Start;