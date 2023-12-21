import React from 'react'
import NavBarComp from './NavBarComp.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
  <>
      <NavBarComp/>
      <div className='parentLogin'>
      <h2 className='text-center pt-5 pb-3'>Good to see you again</h2>
      <Form className='targetForm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me"  />
      </Form.Group>
      <Button className='loginButton' type="submit">
       Login
      </Button>
     <h4 className='text-center noAccountH2'>Don't have an account yet?<Link to='/register' className="register ms-2">Sign Up</Link></h4>
    </Form>
    </div>
    </>

  )
}

export default Login


