import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import RunnerlyLogo from '../assets/img/gallery/RunnerlyLogo.png';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      // Handle logout action
      setIsLoggedIn(false);
      // Redirect user to homepage or any other page
    } else {
      // Redirect user to login page
      // You can use the Link component to navigate to the /for-login route
    }
  };

  return (
    <Navbar style={{ backgroundColor: '#FF6A13', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }} expand="lg" className="d-flex align-items-center justify-content-between">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={RunnerlyLogo}
            width="160px"
            height="40px"
            className="d-inline-block align-top"
            alt="Runnerly Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link" style={{ marginRight: '20px' }}><h1>Home</h1></Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link"><h1>About</h1></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" className="nav-link" style={{marginLeft: 'auto', marginRight: 'auto'}} onClick={handleUserIconClick}>
              <i className="fas fa-user footer-user-icon"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
