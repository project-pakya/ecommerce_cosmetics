import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clean up timer
  }, [navigate]);

  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h2 className="text-success">🎉 Your Order Has Been Successfully Placed!</h2>
          <p className="lead">
            Thank you for shopping with us. A confirmation email will be sent shortly.
          </p>
          <p>You will be redirected to the home page shortly.</p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Go to Home Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderSuccess;
