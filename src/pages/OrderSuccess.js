// src/pages/OrderSuccess.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';

function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <Alert variant="success">
            🎉 <strong>Order placed successfully!</strong> Redirecting to home page...
          </Alert>
          <Spinner animation="border" variant="success" />
        </Col>
      </Row>
    </Container>
  );
}

export default OrderSuccess;
