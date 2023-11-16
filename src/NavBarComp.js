import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './purpleLogoBG.png'
import './NavBarComp.css'

function NavBarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className='targetLogo'/><b className='targetB'>Photo Search</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
       
          
          </Nav>
          <Nav>
            <div className='targetT'>T</div>
          <NavDropdown title="" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Sign Out
              </NavDropdown.Item>
            
             
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
         <button className='uploadButton'>Upload</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;