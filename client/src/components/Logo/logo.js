import React from 'react';
import { Navbar } from 'react-bootstrap';
import './logo.css';

class Logo extends React.Component {
  render() {
    return (
      <div className="nav">
        <Navbar>
          <Navbar.Brand>
          <div className="col-sm mx-auto">
            <a className="logo" href='/'><h1><i className="fas fa-mortar-pestle fa-xs pestle" style={{ color: 'white'}}></i><i className="rolo">Rolo</i> - <i className="fas fa-prescription rx" style={{ color: 'white' }}></i></h1></a>
          </div>
          <div className="divider2"></div>
          </Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}

export default Logo;