import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Home.css"; // Add updated CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6} className="text-section">
            <h1 className="headline">Simplify Payments with Fast-Pay</h1>
            <p className="tagline">Your one-stop solution for secure, fast, and global online payments.</p>
            <ul className="features-list">
              <li>💳 Instant payment processing</li>
              <li>🌍 Accept payments globally</li>
              <li>📊 Real-time analytics and insights</li>
              <li>🔒 End-to-end security and fraud protection</li>
            </ul>
            <Button variant="primary" size="lg" className="cta-button">
              Get Started Now
            </Button>
          </Col>

          {/* Illustration Section */}
          <Col md={6}>
            <Image
              src="https://media.istockphoto.com/id/1365553267/vector/online-payment-security-transaction-mobile-banking-and-internet-banking-concept-vector.jpg?s=612x612&w=0&k=20&c=PyU8dVlDBqETmBmXK1W_vqBLWr5Jd-4XMVWZ1FLO4No="
              alt="Fast-Pay Illustration"
              className="illustration"
              fluid
            />
          </Col>
        </Row>

        {/* Additional Info Section */}
        <Row className="info-section mt-5">
          <Col md={4} className="info-card">
            <Image
              src="https://www.shutterstock.com/image-vector/illustration-icon-global-reach-260nw-2360945805.jpg"
              alt="Feature 1"
              className="info-icon"
              fluid
            />
            <h3>Global Reach</h3>
            <p>Expand your business by accepting payments from anywhere in the world.</p>
          </Col>
          <Col md={4} className="info-card">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/026/392/790/non_2x/generate-real-time-insights-blue-gradient-concept-icon-improve-business-strategy-provide-ideas-abstract-idea-thin-line-illustration-isolated-outline-drawing-vector.jpg"
              alt="Feature 2"
              className="info-icon"
              fluid
            />
            <h3>Real-Time Insights</h3>
            <p>Monitor transactions and track your growth with powerful analytics.</p>
          </Col>
          <Col md={4} className="info-card">
            <Image
              src="https://c8.alamy.com/comp/2G344YR/secure-payment-icon-vector-illustration-payment-security-and-safety-with-shield-icon-vector-design-concept-for-online-payment-finance-and-mobile-ba-2G344YR.jpg"
              alt="Feature 3"
              className="info-icon"
              fluid
            />
            <h3>Secure Payments</h3>
            <p>Benefit from cutting-edge security measures to protect your transactions.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
