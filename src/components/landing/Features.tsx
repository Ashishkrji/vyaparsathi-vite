import React from "react";
import "./css/Features.css";

const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2 className="features-title">Powerful Features for Your Business</h2>
        <p className="features-subtitle">
          Everything you need to manage customers, credit, and payments —
          simple, fast, and secure.
        </p>

        <div className="features-grid">
          {/* 1. Customer Tracking */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            <h3 className="feature-card-title">Customer Tracking</h3>
            <p className="feature-card-text">
              Add and manage all customers with complete details and transaction
              history.
            </p>
          </div>

          {/* 2. Easy Credit Management */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            <h3 className="feature-card-title">Easy Credit Management</h3>
            <p className="feature-card-text">
              Track udhaar accurately — add, update, and clear balances
              instantly.
            </p>
          </div>

          {/* 3. Automatic Reminders */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            <h3 className="feature-card-title">Automatic Reminders</h3>
            <p className="feature-card-text">
              Send payment reminders via WhatsApp or SMS directly from the app.
            </p>
          </div>

          {/* 4. Detailed Reports */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
            </div>
            <h3 className="feature-card-title">Detailed Reports</h3>
            <p className="feature-card-text">
              Get clear insights into cash flow, outstanding payments, and
              growth.
            </p>
          </div>

          {/* 5. Offline Access */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            <h3 className="feature-card-title">Offline Access</h3>
            <p className="feature-card-text">
              Work without internet — add transactions offline and sync later.
            </p>
          </div>

          {/* 6. Multi-Device Sync */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                </svg>
              </div>
            </div>
            <h3 className="feature-card-title">Multi-Device Sync</h3>
            <p className="feature-card-text">
              Access your data from any phone — seamless sync across devices.
            </p>
          </div>

          {/* 7. Secure Data */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
            </div>
            <h3 className="feature-card-title">Secure Data</h3>
            <p className="feature-card-text">
              Your business data is encrypted and private — full security
              guaranteed.
            </p>
          </div>

          {/* 8. Easy Export */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
              </div>
            </div>
            <h3 className="feature-card-title">Easy Export</h3>
            <p className="feature-card-text">
              Export reports and data anytime in PDF or Excel format.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
