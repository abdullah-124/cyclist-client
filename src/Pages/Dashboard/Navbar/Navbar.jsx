import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../dashboard.css";
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { faHome, faShop } from "@fortawesome/free-solid-svg-icons"

const DashNav = () => {
  return (
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand href="#home">Cyclist</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
            <Link to='/'><FontAwesomeIcon icon={faHome} /> <span className="side-text">Home</span></Link>
            <Link to='/products'><FontAwesomeIcon icon={faShop} /> <span className="side-text">Products</span></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashNav;
