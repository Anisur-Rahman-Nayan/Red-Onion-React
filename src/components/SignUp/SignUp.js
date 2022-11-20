import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword,useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.config'
import { useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {

    const [validated, setValidated] = useState(false);

      const [name,setName] = useState('')
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const [error, setError] = useState('')
      const [registerd, setRegistered] = useState(false)

      const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
      const [user] = useAuthState(auth);

      const handleUserName =(e)=>{
        setName(e.target.value)
      }
      const handleUserEmail=(e)=>{
            setEmail(e.target.value)
      }

      const handleUserPassword=(e)=>{
        setPassword(e.target.value)
      }


    const clicked=(e)=>{
        setRegistered(e.target.checked)
    }

      

      const handleSubmitForm=(event)=>{
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }
      setValidated(true);

      if(registerd){
        console.log(registerd)
        signInWithEmailAndPassword(email,password)
      }
      else{
        createUserWithEmailAndPassword(email, password)
      }
    }

    

    const navigate = useNavigate() 
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }

      
    return (

        <div className='w-50 mx-auto form-border'>
            <h2 style={{color:'red',textAlign:'center'}}>Please {registerd ?"Login !":"Register !"}</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmitForm} >
      
      {
        !registerd && <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"  onBlur={handleUserName} required/>
        <Form.Text className="text-muted">Please ! Enter Your Name.</Form.Text>
        <Form.Control.Feedback type="invalid">Please provide your Name.</Form.Control.Feedback>
      </Form.Group>
      }

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onBlur={handleUserEmail} required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Control.Feedback type="invalid">Please provide your Email.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onBlur={handleUserPassword}  required/>
        <Form.Control.Feedback type="invalid">Please provide your Password.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={registerd ? <span></span> : "Already Registerd ?"} onChange={clicked} />
      </Form.Group>
      <Button variant="primary" type="submit"> {registerd ? "Login" :"Register" }</Button>
    
    </Form>
        </div>
    );
};

export default SignUp;