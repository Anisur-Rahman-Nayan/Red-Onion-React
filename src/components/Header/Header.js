import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        <Link className='nav-color' to="/home">Home</Link>
      </Nav.Item>
      <Nav.Item >
        <Link className='nav-color' to="/orderreview">Order Review</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-color' to="/about">About Us</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-color' to="/login">Signed in as: Nayan</Link>
      </Nav.Item>
    </Nav>



        </Navbar.Collapse>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;