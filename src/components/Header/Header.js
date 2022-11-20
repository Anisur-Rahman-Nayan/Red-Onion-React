import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignOut } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import auth from '../../firebase.config';

const Header = ({cart}) => {
let totalQuantity =0;
  for(let reviewItems of cart){
    totalQuantity = totalQuantity +  reviewItems.quantity;
}
const [user] = useAuthState(auth);
console.log(user)

const [signOut] = useSignOut(auth);

    return (
        <div >
    <Navbar>
      <Container>
        <Navbar.Brand className='logo-title'>
           <Link to={'/'}> <img src={logo} alt="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
       
    <Nav>
      <Nav.Item>
        <CustomLink className='nav-color' to="/home">Home</CustomLink>
      </Nav.Item>
      <Nav.Item>
        <Link to='/orderreview'><p className='nav-color'><FontAwesomeIcon icon={faCoffee} /> <sup>{totalQuantity}</sup> </p></Link>
        {/* <Link className='nav-color' to="/revieworder"><FontAwesomeIcon icon={faCoffee} /> {totalQuantity} </Link> */}
      </Nav.Item>
      <Nav.Item>
        <CustomLink className='nav-color' to="/about">About Us</CustomLink>
      </Nav.Item>
      <Nav.Item>
        {/* <CustomLink className='nav-color' to="/login">Signed in as: <p>{user?.email}</p></CustomLink> */}
        <CustomLink className='nav-color'> {user ? <div><span> {user?.email}</span><button onClick={()=>signOut()} >Sign Out</button> </div> : <link to='/signup'></link> }</CustomLink>
      </Nav.Item>
    </Nav>



        </Navbar.Collapse>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;