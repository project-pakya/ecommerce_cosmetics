// src/pages/AboutUs.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
          <h1 className="display-4 fw-bold text-success">About Organic Glow</h1>
          <p className="lead text-muted">
            At Organic Glow, we are committed to offering the finest organic cosmetics to help you achieve natural beauty with eco-friendly ingredients.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src="/assets/images/aboutus.jpg" // Replace with your image path
            alt="About Us"
            fluid
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6}>
          <h3 className="fw-bold text-success">Our Mission</h3>
          <p className="text-muted">
            We aim to provide customers with high-quality, 100% natural cosmetics that nourish the skin and promote well-being. Our products are cruelty-free and made with love for both you and the planet.
          </p>

          <h3 className="fw-bold text-success">Our Promise</h3>
          <p className="text-muted">
            We promise transparency in our ingredients, and a commitment to sustainability. With Organic Glow, you can trust that you’re choosing products that are both effective and ethical.
          </p>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
        <Col>
          <h2 className="text-success">Join Us on the Journey to Natural Beauty</h2>
          <p className="text-muted">Discover the difference with Organic Glow and let your natural beauty shine through!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
