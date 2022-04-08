import { faBicycle, faDashboard,  faHome, faSignIn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth"
import "./header.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <div  className="">
        <Navbar className="header" fixed="top" expand="lg">
          <Container fluid>
            <Navbar.Brand className="nav-logo">Cyclist
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              
              <Nav
                className="ms-auto my- my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link>
                <Link to="/products"><FontAwesomeIcon icon={faBicycle}/> Products</Link>
                
                {user.email && (
                  
                  <NavDropdown title="User" id="navbarScrollingDropdown">
                    
                    <NavDropdown.Item href="#action3">{

                     user.photoURL && <img className="user-img mx-auto" src={user.photoURL} alt="user" />
                    }
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item>{user.displayName}</NavDropdown.Item>
                    <NavDropdown.Item>
                      <button
                        className="btn-main"
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </button>
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>

              {user.email ? (
                <div>
                  <Link to='/dashboard'>
                    <button className="btn-main">
                    <FontAwesomeIcon icon={faDashboard} /> Dashborad
                    </button>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn-main">
                    <FontAwesomeIcon icon={faSignIn} /> Login
                  </button>
                </Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <br />
        <br />
        
      </div>
    </>
  );
};

export default Header;
