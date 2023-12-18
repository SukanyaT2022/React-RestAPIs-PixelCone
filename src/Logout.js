import React from 'react'
import NavBarComp from './NavBarComp.js';
import logo from './purpleLogoBG.png'
const Logout = () => {
  return (
    <div>
      <NavBarComp/>
      <div className='parentLogin'>
<div className='whiteBox'>
<img src={logo}/>
<h4>You sign out of your account</h4>
</div>
      </div>

    </div>
  )
}

export default Logout
