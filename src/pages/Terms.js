// src/pages/Terms.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Terms() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Terms and Conditions</h2>

          <Card className="mb-4">
            <Card.Body>
              <h4>Introduction</h4>
              <p>
                These terms and conditions govern your use of our website and the services provided by Organic Glow. By accessing and using this website, you agree to comply with these terms. If you do not agree with these terms, please do not use our website.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Use of Website</h4>
              <p>
                You may use this website for personal, non-commercial purposes. You agree not to engage in any activity that could harm the website or interfere with other users’ experience. Unauthorized use of this website may result in termination of your account or legal action.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Product Information</h4>
              <p>
                We make every effort to ensure that product information, pricing, and availability are accurate on our website. However, we do not guarantee that all information is error-free. We reserve the right to change or update product details at any time without prior notice.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Orders and Payment</h4>
              <p>
                By placing an order on our website, you agree to purchase the products at the listed price, including any applicable taxes and shipping fees. Payments are processed securely, and we accept various payment methods. Orders are subject to availability.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Shipping and Delivery</h4>
              <p>
                We aim to deliver all orders within the estimated time frame provided. However, delays may occur due to unforeseen circumstances. We are not responsible for any delays caused by shipping carriers or customs.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Returns and Refunds</h4>
              <p>
                We accept returns within 30 days of purchase, provided the products are unused and in their original condition. Refunds will be processed to the original payment method once the returned items are received and inspected.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Limitation of Liability</h4>
              <p>
                Organic Glow is not liable for any indirect, incidental, or consequential damages arising from your use of the website or the products purchased. Our liability is limited to the amount paid for the product(s) in question.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Changes to Terms</h4>
              <p>
                We reserve the right to modify these terms and conditions at any time. Any changes will be posted on this page, and the updated terms will be effective immediately upon publication. Please review this page regularly to stay informed.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Contact Us</h4>
              <p>
                If you have any questions about these terms and conditions or our services, please contact us at support@organicglow.com.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Terms;
