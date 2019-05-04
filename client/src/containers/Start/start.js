import React from "react";
import "./start.css";
import image from "../../components/Images/pills.jpg";
import image2 from "../../components/Images/logo.PNG";

var sectionStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "110vh",
    backgroundImage: "url(" + image + ")"
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
                <section style={ sectionStyle }>
                <a href="https://github.com/KruseJohn/RoloRX"><p className="git"><i className="fab fa-github"></i></p></a>  
                <div className="container start-div">
                    <div className="row">
                        <div className="col-sm-5">
                        <img id="brand" src={image2} alt="Rolo-Rx" />
                        </div> 
                        <div className="col-sm-7"></div>
                    </div>
                    <br />
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
                
                </section>
            </div>
            
        );
    }
}

export default Start;