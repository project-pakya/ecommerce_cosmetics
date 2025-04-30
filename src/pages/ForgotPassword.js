// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Please enter your email address.');
      setSuccess('');
    } else {
      // Handle password reset logic (e.g., API call to send reset link)
      setError('');
      setSuccess('A password reset link has been sent to your email!');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <h2 className="text-center mb-4">Reset Your Password</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 rounded-pill">
              Send Reset Link
            </Button>

            <div className="mt-3 text-center">
              <p>Remember your password? <Link to="/login">Login</Link></p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgotPassword;
