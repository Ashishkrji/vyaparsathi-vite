import React from "react";
import "./css/Price.css";

const Price: React.FC = () => {
  return (
    <section id="pricing" className="price-section">
      <div className="price-container">
        <h2 className="price-title">Simple, Transparent Pricing</h2>
        <p className="price-subtitle">
          Choose the plan that fits your business. Start free and upgrade as you
          grow.
        </p>

        <div className="price-grid">
          {/* Free Plan */}
          <div className="price-card">
            <div className="price-header">
              <div className="price-plan">Free</div>
              <div className="price-amount">₹0</div>
              <div className="price-period">forever</div>
            </div>
            <ul className="price-features">
              <li>
                <strong>Up to 30 customers</strong>
              </li>
              <li>Basic udhaar tracking</li>
              <li>Manual reminders</li>
              <li>Basic reports</li>
              <li>Community support</li>
            </ul>
            <a href="/signup" className="price-button secondary">
              Get Started Free
            </a>
          </div>

          {/* Pro Plan - Highlighted */}
          <div className="price-card popular">
            <div className="price-header">
              <div className="price-plan">Pro</div>
              <div className="price-amount">₹499</div>
              <div className="price-period">per month</div>
            </div>
            <ul className="price-features">
              <li>
                <strong>Unlimited customers</strong>
              </li>
              <li>Advanced udhaar management</li>
              <li>Auto WhatsApp reminders</li>
              <li>Detailed reports & insights</li>
              <li>Priority support</li>
              <li>Export data</li>
            </ul>
            <a href="/signup" className="price-button primary">
              Start Pro Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
