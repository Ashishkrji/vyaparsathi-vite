import React from "react";
import "./css/About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About VyaparSathi</h2>
          <p className="about-subtitle">
            We are on a mission to empower small business owners and local
            shopkeepers across India with simple, affordable, and reliable
            digital tools to manage their daily operations.
          </p>
        </div>

        <div className="about-grid">
          {/* Our Mission */}
          <div className="about-card">
            <div className="about-icon-wrapper">
              <div className="about-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
            </div>
            <h3 className="about-card-title">Our Mission</h3>
            <p className="about-card-text">
              To make digital business management accessible to every small shop
              owner — no tech skills required, just simple and reliable tools
              they can trust.
            </p>
          </div>

          {/* Our Vision */}
          <div className="about-card">
            <div className="about-icon-wrapper">
              <div className="about-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
            </div>
            <h3 className="about-card-title">Our Vision</h3>
            <p className="about-card-text">
              A future where every local business in India thrives with
              confidence using digital tools tailored specifically for their
              unique needs.
            </p>
          </div>

          {/* Our Values */}
          <div className="about-card">
            <div className="about-icon-wrapper">
              <div className="about-icon-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
            <h3 className="about-card-title">Our Values</h3>
            <p className="about-card-text">
              Simplicity, Trust, and Empowerment — we build tools that respect
              your time, protect your data, and grow with your business.
            </p>
          </div>
        </div>

        <p className="about-closing">
          VyaparSathi is built by people who understand the real challenges of
          running a small business in India. We're here to make your journey
          easier — one transaction at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
