import React from 'react';
import { Container } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigationbar = () => {
    return (
        <Navbar bg="primary" expand="lg" >
         
         <div className='d-flex  me-auto container'>
        
          <div>
            <Navbar.Brand href="#home">
            <img
              src="images/logo.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          
          
          </div>
          <Navbar.Brand href="/" className=''>Quiz? Master</Navbar.Brand>
       
     
                     
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
        

       
        
         </div>
       
  
       
 
      </Navbar>
    );
};

export default Navigationbar;