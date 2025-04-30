// src/pages/PrivacyPolicy.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function PrivacyPolicy() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Privacy Policy</h2>

          <Card className="mb-4">
            <Card.Body>
              <h4>Introduction</h4>
              <p>
                At Organic Glow, we respect your privacy and are committed to protecting the personal information you share with us.
                This Privacy Policy outlines how we collect, use, and protect your data when you use our services or make a purchase from our website.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Information We Collect</h4>
              <p>
                We collect personal information such as your name, email address, shipping address, and payment information when you place an order.
                We may also collect non-personal information, including browsing behavior and usage data, for analytical purposes.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>How We Use Your Information</h4>
              <p>
                The personal information we collect is used to process your orders, communicate with you about your orders, improve our website, and
                provide you with a personalized shopping experience. We may also use your data for marketing purposes, with your consent.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>How We Protect Your Information</h4>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. This includes using encryption and secure payment gateways.
                We do not store your payment information on our servers.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Sharing Your Information</h4>
              <p>
                We do not sell or rent your personal information to third parties. However, we may share your data with trusted third-party service providers
                who assist us in operating our website and processing payments.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Your Rights</h4>
              <p>
                You have the right to access, update, or delete your personal information. If you would like to exercise any of these rights, please contact us
                at support@organicglow.com.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Changes to This Policy</h4>
              <p>
                We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and the updated policy will be effective immediately.
              </p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h4>Contact Us</h4>
              <p>
                If you have any questions regarding this Privacy Policy or how we handle your personal data, please feel free to contact us at
                support@organicglow.com.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicy;
