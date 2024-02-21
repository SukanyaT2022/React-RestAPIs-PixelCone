import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './purpleLogoBG.png'
import './NavBarComp.css'
import { Link,BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import Search from './Search'
import Toggle from './Toggle'
import {useState} from 'react'

function NavBarComp() {
  const [titleColor,setTitleColor] = useState('black');

  const titleHandler = (val)=>{
     val?setTitleColor('black'):setTitleColor('white'); 
  }
    return (
    <div className='wrapAll'>
    <MyRoutes/>
       {/* dark and white mode */}
       {/* <div className='targetSwitchToggle'><Toggle/></div> */}
   
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container className='targetWholeNavBar'>
        <Navbar.Brand href="/" className='targetLogoText'>
            <img src={logo} className='targetLogo'/>
          <b className='targetB' style={{color:titleColor}}>Photo Search</b></Navbar.Brand>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <div className='targetT'>T</div>
          <NavDropdown title="" id="collapsible-nav-dropdown">
         
              <NavDropdown.Item>
                <Link to='/login' className='targetLogInLogout'>Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to='/logout'className='targetLogInLogout'>Logout</Link>
              </NavDropdown.Item>
          
             
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
         <button className='uploadButton'>Upload</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
      </Container>
      <div className='targetSwitchToggle'><Toggle titleHandler = {titleHandler}/></div>
    </Navbar>


    </div>
  );
}

export default NavBarComp;