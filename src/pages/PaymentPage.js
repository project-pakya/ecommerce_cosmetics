import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!cardNumber || !cardName || !expiryDate || !cvv || !billingAddress) {
      setError('All fields are required.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Payment successful! Redirecting to confirmation page...');
      localStorage.removeItem('cartItems');

      setTimeout(() => {
        navigate('/order-success');
      }, 3000); // Increased to 3 seconds for smoother UX
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="mb-4 text-center">Payment Details</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handlePayment}>
            <Form.Group controlId="cardNumber" className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="cardName" className="mb-3">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group controlId="expiryDate" className="mb-3">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="cvv" className="mb-3">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="billingAddress" className="mb-3">
              <Form.Label>Billing Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="123 Main Street, City"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Pay ₹{calculateTotal().toFixed(2)}
            </Button>
          </Form>
        </Col>

        <Col md={4}>
          <div className="border p-3 rounded">
            <h3>Order Summary</h3>
            {cartItems.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              <ul className="list-unstyled">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.quantity} x {item.name} - ₹{item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            )}
            <p>
              <strong>Total: ₹{calculateTotal().toFixed(2)}</strong>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentPage;
