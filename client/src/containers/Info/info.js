import React from "react";
import image from "../../components/Images/smiley.png";
import image2 from "../../components/Images/frustration.png";
import image3 from "../../components/Images/rolodex2.gif";
import image4 from "../../components/Images/bright.png";
import image5 from "../../components/Images/nerd.png";
import image6 from "../../components/Images/app.png";
import "./info.css";


class Info extends React.Component {
    render() {
        return (
            <div>
                <div className="gradient-background-info">
                    <a href="https://github.com/KruseJohn/RoloRX"><p className="git"><i className="fab fa-github"></i></p></a>
                    <div className="container bbstyle-info">
                        <div className="row align-items-center">
                            <div className="col-sm"></div>
                            <div className="col-sm-8 header">
                                <h1><p>Introducing Rolo-Rx!</p></h1>
                                <h4><p><i>The digital Rx aid</i></p></h4>
                            </div>
                            <div className="col-sm"></div>
                        </div>
                    </div>
                    <div className="container bbstyle-info">
                        <div className="row align-items-center">
                            <div className="col-sm" id="image">
                                <img id="logoImg" src={image} alt="hmmmm" />
                                <img id="logoImg" src={image2} alt="frustrated" />
                            </div>
                            <div className="col-sm" id="infoText">
                                <h4><p>Too many pills?</p></h4>  
                                <h4><p> Confused over which medication to take, how much, or when?</p></h4>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="container bbstyle-info">
                        <div className="row align-items-center">                
                            <div className="col-sm-12 " id="infoText">  
                                <h2><p>well... </p></h2>
                            </div>
                            <div className="col-sm-3 mx-auto" id="image">
                                <img id="logoImg" src={image4} alt="idea" />
                            </div>        
                        </div>
                    </div>
                    <br />
                    <div className="container bbstyle-info">
                        <div className="row align-items-center">
                            <div className="col-sm-8" id="infoText">  
                                <h5><p>Over half a century ago, a device called a "Rolodex" was born. Utilized to store the contact information of an individual or company, 
                                    this "rolling index" could be found at any work desk.  Because of it's simplicity, well-organized data, and always an arms-length 
                                    away, the Rolodex remained popular for many years, even into the digital age... </p></h5>
                            </div>
                            <div className="col-sm-4" id="image">
                                <img id="logoImg2" src={image3} alt="rolodex" />
                            </div>    
                        </div>
                    </div>
                    <br />
                    <div className="container bbstyle-info">
                        <div className="row align-items-center">  
                            <div className="col-sm-12" id="infoText">  
                                <h2><p>So...</p></h2>
                            </div>
                            <div className="col-sm-3 mx-auto" id="image">
                                <img id="logoImg" src={image5} alt="nerd" />
                            </div>                          
                        </div>
                    </div>
                    
                    <div className="container bbstyle-final">
                        <div className="row align-items-center">               
                            <div className="col-sm" id="logo">
                            <img id="logoImg4" src={image6} alt="phone-app//" />  
                            </div>
                            <div className="col-sm" id="infoText">           
                             <br />
                                <h5><p>With that in mind, Rolo-Rx was created out of the need to easily track, schedule, and organize prescriptions.  All at your fingertips!
                                    Whether you are an individual, a caregiver, or a nurse providing in-home care, Rolo-Rx was designed to help ease the stress of remembering 
                                    when and how to take medications.</p></h5>
                             <br />
                                <h1><p>The right pill, at the right time!</p></h1>
                            </div>
                        </div>
                    </div>
                    <br />   
                    <div className="container bbstyle-info">
                        <div className="row align-items-center">
                            <div className="col-sm-12" id="infoText">
                                <h4><p>Mobile friendly to meet today’s hectic, on-the-go atmosphere!</p></h4>  
                                <h4><p>Sign up and start using Rolo-Rx today!</p></h4>
                            </div>
                        </div>
                    </div>

                    <div className="container bottom">
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm">
                                <a href="/login"><h3 id="logIn2" className="startStyle" style={{ background: 'red' }}>Log-in</h3></a>
                            </div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm">
                                <a href="/signup"><h3 id="signUp2" className="startStyle" style={{ background: 'blue' }}>Sign-up</h3></a>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default Info;