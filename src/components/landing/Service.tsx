import React from "react";
import "./css/Service.css";

const Service: React.FC = () => {
  return (
    <section id="how-it-works" className="service-section">
      <div className="service-container">
        <h2 className="service-title">How VyaparSathi Works</h2>
        <p className="service-subtitle">
          Get started in minutes — simple steps to manage your business
          digitally.
        </p>

        <div className="service-grid">
          {/* Step 1 */}
          <div className="service-card">
            <div className="service-number">01</div>
            <div className="service-icon-wrapper">
              <div className="service-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
            </div>
            <h3 className="service-card-title">Sign Up Free</h3>
            <p className="service-card-text">
              Create your account in seconds — no credit card required. Start
              managing your business right away.
            </p>
          </div>

          {/* Step 2 */}
          <div className="service-card">
            <div className="service-number">02</div>
            <div className="service-icon-wrapper">
              <div className="service-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            <h3 className="service-card-title">Add Customers & Udhaar</h3>
            <p className="service-card-text">
              Easily add customers, record credit (udhaar), and track every
              transaction with full history.
            </p>
          </div>

          {/* Step 3 */}
          <div className="service-card">
            <div className="service-number">03</div>
            <div className="service-icon-wrapper">
              <div className="service-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            <h3 className="service-card-title">Send Reminders & Grow</h3>
            <p className="service-card-text">
              Send automatic payment reminders via WhatsApp and watch your cash
              flow improve instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
