// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-custom py-4 mt-5 shadow-lg">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="fw-bold">Organic Glow</h5>
            <p className="text-muted">Natural beauty products for a glowing you.</p>
          </Col>

          <Col md={4}>
            <div className="buttery-yellow-bg">
              <h5 className="fw-bold">Quick Links</h5>
              <ListGroup variant="flush">
                <ListGroup.Item as={Link} to="/about" className="border-0 bg-transparent">About Us</ListGroup.Item>
                <ListGroup.Item as={Link} to="/faq" className="border-0 bg-transparent">FAQ</ListGroup.Item>
                <ListGroup.Item as={Link} to="/terms" className="border-0 bg-transparent">Terms & Conditions</ListGroup.Item>
                <ListGroup.Item as={Link} to="/privacy" className="border-0 bg-transparent">Privacy Policy</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>

          <Col md={4}>
            <div className="buttery-yellow-bg">
              <h5 className="fw-bold">Support</h5>
              <ListGroup variant="flush">
                <ListGroup.Item className="border-0 bg-transparent">Contact Us</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent">Customer Service</ListGroup.Item>
                <ListGroup.Item className="border-0 bg-transparent">Shipping & Returns</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-muted mb-0">© {new Date().getFullYear()} Organic Glow. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
