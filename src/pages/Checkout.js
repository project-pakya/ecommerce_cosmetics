// src/pages/Checkout.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Checkout({ cart }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !address) {
      setError('All fields are required.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Your order has been placed successfully!');
      
      // Redirect to OrderForm (payment page) after successful form submission
      setTimeout(() => {
        navigate('/orderform'); // Navigate to the orderform page
      }, 2000);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="text-center mb-4">Checkout</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <h4>Shipping Information</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>

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

            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your shipping address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Place Order
            </Button>
          </Form>
        </Col>

        <Col md={4}>
          <div className="border p-3 rounded">
            <h3>Order Summary</h3>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.quantity} x {item.name} - ₹{item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p>
              <strong>Total:</strong> ₹{calculateTotal().toFixed(2)}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
