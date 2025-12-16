import React from "react";
import "./css/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Manage Your Business
            <br className="hidden md:block" /> the Easy Way
          </h1>
          <p className="hero-subtitle">
            Track customers, credit (udhaar), and payments in one simple,
            powerful app built specifically for small business owners and local
            shopkeepers in India.
          </p>
          <div className="hero-buttons">
            <a href="#waitlist" className="btn-hero-primary">
              Join the Waitlist
            </a>
            {/* <a href="#features" className="btn-hero-secondary">
              Explore Features
            </a> */}
          </div>
        </div>

        {/* Floating Mockups - Replace URLs with your real screenshots later */}
        {/* <div className="hero-mockups">
          <img
            src="https://via.placeholder.com/800x600/111/fff?text=Dashboard+View"
            alt="VyaparSathi Dashboard Screenshot"
            className="mockup-main"
          />
          <img
            src="https://via.placeholder.com/400x800/111/fff?text=Mobile+App"
            alt="VyaparSathi Mobile App Screenshot"
            className="mockup-phone"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
