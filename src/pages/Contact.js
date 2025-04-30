// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setError('All fields are required.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Your message has been sent successfully!');
      // Handle form submission, e.g., API call to send the message
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="text-center mb-4">Contact Us</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <div className="border p-3 rounded">
            <h3>Get in Touch</h3>
            <p>If you have any questions or need assistance, feel free to reach out to us!</p>
            <p>
              <strong>Phone:</strong> (+91) 8610511020
            </p>
            <p>
              <strong>Email:</strong> support@organicglow.com
            </p>
            <p>
              <strong>Address:</strong> 123 Organic Glow Lane, Natural City, 12345
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
