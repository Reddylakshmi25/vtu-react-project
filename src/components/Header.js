import React from "react";
import { Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

    return(
        <header>
        <Navbar className="navbar-style" expand="lg">
              <Container>
              
              <LinkContainer to='/'>
                <Navbar.Brand href="/">
                <Image className="logo-img-style" src='images/logo.jpg' alt="VTU" roundedCircle/>
                <h6 className="logo-text-style">Visvesvaraya Technological University, Belagavi</h6>
                </Navbar.Brand>
              </LinkContainer>
              
              <Navbar.Toggle aria-controls="basic-navbar-Scroll" />
              <Navbar.Collapse id="basic-navbar-Scroll">
              <Nav className="ml-auto">

                <LinkContainer to='/'>
                  <Nav.Link href="#">Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to ='/about'>
                    <Nav.Link href="#link">About us</Nav.Link>
                </LinkContainer>

      <NavDropdown title="Academic" id="collasible-nav-dropdown">
        <LinkContainer to='/admission'>
           <NavDropdown.Item href="#">Admission</NavDropdown.Item>
        </LinkContainer>

        <LinkContainer to='/circular/notification'>
           <NavDropdown.Item href="#">Circulars & Notification</NavDropdown.Item>
        </LinkContainer>

        <LinkContainer to='/certificates'>
           <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>

      <NavDropdown title="Examination" id="collasible-nav-dropdown">
        <LinkContainer to ='/guidelines'>
            <NavDropdown.Item href="#">Examination Guidelines</NavDropdown.Item>
        </LinkContainer>

        <LinkContainer to='/application'>
            <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
        </LinkContainer>
        
        <LinkContainer to ='/result'>
           <NavDropdown.Item href="#">Results</NavDropdown.Item>
        </LinkContainer>

      </NavDropdown>

      <NavDropdown title="VTU Departments" id="collasible-nav-dropdown">
        <LinkContainer to='/civil'>
           <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
        </LinkContainer>

        <LinkContainer to='cse'>
           <NavDropdown.Item href="#">Computer Science Engg</NavDropdown.Item>
        </LinkContainer>

        <LinkContainer to='/ece'>
           <NavDropdown.Item href="#">Electronics & Communication Engg</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>

      <NavDropdown title="Staff Login" id="collasible-nav-dropdown">
        <LinkContainer to='/admin'>
           <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>

    </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}
export default Header;