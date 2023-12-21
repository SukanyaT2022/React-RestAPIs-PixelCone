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
  <h2>Sign Up</h2>
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
  <div className='makeInputBoxSidebySide'>
    <input type='checkbox' />
<span>I agree with term</span>
  </div>
  <input type="submit" value="Sign Up"/>
</form>
   </div>
   
   </div>
   </div>
  )
}

export default Register;
