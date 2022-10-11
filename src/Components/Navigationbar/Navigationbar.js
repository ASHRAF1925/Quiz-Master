import React from "react";
import { Container } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import './Navigationbar.css'

const Navigationbar = () => {
  return (
    <Navbar expand="lg" id='backgroundColor'>
      <div className="d-flex  me-auto container">
        <div>
          <Navbar.Brand href="/">
            <img
              src="images/logo.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        </div>
        <Navbar.Brand href="/"  className="title">
          Quiz? Master
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" defaultActiveKey="/" className="ms-auto">
          <Nav.Item>
              <Nav.Link eventKey="/"><Link to='/' className="noDecoration"> Topics</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/statistics"><Link to='/statistics' className="noDecoration"> Statistics</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/blogs"><Link to='/blogs' className="noDecoration"> Blogs</Link></Nav.Link>
            </Nav.Item>
            
            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigationbar;
