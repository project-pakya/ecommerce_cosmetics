// src/pages/FAQ.js
import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

function FAQ() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Organic Glow?</Accordion.Header>
              <Accordion.Body>
                Organic Glow is a skincare brand that offers 100% natural and organic cosmetics. Our products are designed to nourish your skin with eco-friendly ingredients.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Are your products cruelty-free?</Accordion.Header>
              <Accordion.Body>
                Yes, all our products are cruelty-free. We never test on animals and ensure our ingredients are ethically sourced.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>How can I place an order?</Accordion.Header>
              <Accordion.Body>
                You can place an order directly on our website. Simply browse through our products, add them to your cart, and proceed to checkout to complete the purchase.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Do you offer international shipping?</Accordion.Header>
              <Accordion.Body>
                Yes, we do offer international shipping to select countries. Please check our shipping policy for more details.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Can I return a product?</Accordion.Header>
              <Accordion.Body>
                We accept returns within 30 days of purchase. Please refer to our return policy for more details on how to process a return.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>How can I contact customer support?</Accordion.Header>
              <Accordion.Body>
                You can reach out to our customer support team through the "Contact Us" page on our website or email us at support@organicglow.com.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;
