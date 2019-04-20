import React from 'react';
import { Navbar } from 'react-bootstrap';
import './logo.css';

class Logo extends React.Component {
  render() {
    return (
      <div className="nav">
        <Navbar>
          <Navbar.Brand>
            <a className="logo" href='/'><h1><strong><b className="rolo">rolo</b></strong> : <i className="fas fa-prescription fa-lg red" aria-hidden='true'></i></h1></a>
          </Navbar.Brand>
        </Navbar>
      </div>

    )
  }
}

export default Logo;