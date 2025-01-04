import React from 'react';
import './Home.css';

const Home = () => {
  const features = [
    "Real-time transacion updates",
    "Spending Insights",
    "No-Frauds Guarantee",
    "24/7 customer support",
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h2 className="home-title">Patel Paymet System</h2>
        <p className="home-welcome">Experience Seamless Aand Secure Payments</p>
      </header>
      <main className="home-main">
        <section className="home-about">
          <h3>About Us</h3>
          <p>
            Patel Paymet System is a  payment solution  to make your
            transactions easy and secure. Join  and experience the
            future of digital payments.
          </p>
        </section>
        <section className="home-features">
          <h3>Features</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
        <section className="home-call-to-action">
          <button className="cta-button">Get Started</button>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2025 Patel Payment. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
