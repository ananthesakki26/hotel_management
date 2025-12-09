import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; 
import HotelLogo from "../assets/property.png"; 

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-5">
      <Container>
        <Row className="align-items-center">
          
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <img
              src={HotelLogo}
              alt="Hotel Logo"
              style={{ height: "30px" }}
              className="mb-2"
            />
            <p className="mb-0">&copy; {new Date().getFullYear()} EliteStay. All rights reserved.</p>
          </Col>

          {/* Quick navigation links */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="/service" className="text-white text-decoration-none">Services</a>
              </li>
              <li>
                <a href="/book" className="text-white text-decoration-none">Booking</a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>

          
          <Col md={4} className="text-center text-md-end">
            <h6 className="fw-bold">Follow Us</h6>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
