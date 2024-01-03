import React from 'react'
import NavBarComp from './NavBarComp.js';

const Register = () => {
  return (
    <div >
         <NavBarComp/>

   <div className='mainBox'>
<div className='bg-side'>

</div>
<div className='signUpForm'>
  <h3>Sign Up</h3>
  <p>Create an account to access millions of pictures.</p>
<form >
  <div className='makeInputBoxSidebySide'>
    <input type='text'placeholder='First Name' />
    <input type='text' placeholder='Last Name' />
  </div>
  <div className='makeInputBoxSidebySide'>
    <input type='email'placeholder='Email' />
    <input type='tel' placeholder='Phone' />
  </div>
  <div className='makeInputBoxSidebySide'>
    <input type='text'placeholder='User Name' />
    <input type='password' placeholder='Password' />
  </div>
  <div className='agreeBox'>
    <input type='checkbox' />
<span>I've read and agree with the terms of service and our privacy policy.</span>
  </div>
  <input type="submit" value="Sign Up"/>
</form>
   </div>
   
   </div>
   </div>
  )
}

export default Register;
