import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./whole.css";

function Navigation() {
  

  return (
    <Navbar
      
      style={{
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
      }}
      expand="lg"
    >
      <Container>
        <Link to="/" className="navbar-brand" >
          <Navbar.Brand
            style={{
              color: "#d8d8d8ff",
              fontWeight: "bold",
              fontSize: "30px",
              fontFamily: "Acme, sans-serif",
            }}
          >
            <img
              src="/property.png"
              alt="logo"
              width="45"
              height="35"
              className="d-inline-block align-top me-2 mt-1"
            />
            EliteStay.com
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} to="/rooms"  className="nav-link-luxury">
              Rooms
            </Nav.Link>

            <Nav.Link as={Link} to="/staff" className="nav-link-luxury">
              Staff
            </Nav.Link>

            <Nav.Link as={Link} to="/service" className="nav-link-luxury">
              Services
            </Nav.Link>

            <Nav.Link as={Link} to="/book"  className="nav-link-luxury">
              Book Room
            </Nav.Link>

            <Nav.Link as={Link} to="/faq"  className="nav-link-luxury">
              FAQ
            </Nav.Link>

            <Nav.Link as={Link} to="/register"  className="nav-link-luxury">
              Account creation
            </Nav.Link>

            <Nav.Link as={Link} to="/signin"  className="nav-link-luxury">
              Sign In
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className="nav-link-luxury">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
