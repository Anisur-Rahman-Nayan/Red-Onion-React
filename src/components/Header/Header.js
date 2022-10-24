import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import './Header.css'

const Header = () => {
    return (
        <div >
    <Navbar>
      <Container>
        <Navbar.Brand href="/home" className='logo-title'>
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
       
    <Nav>
      <Nav.Item>
        <Nav.Link className='nav-color' href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className='nav-color' href="/orderreview">Order Review</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='nav-color' href="/about">About Us</Nav.Link>
      </Nav.Item>
      <Navbar.Text className='nav-color nav-space'>
            Signed in as: <a href="#login">Nayan</a>
          </Navbar.Text>
    </Nav>



        </Navbar.Collapse>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;