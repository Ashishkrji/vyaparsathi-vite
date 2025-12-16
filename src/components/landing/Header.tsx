import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header: React.FC = () => {
  return (
    <header className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top border-bottom">
      <div className="container-fluid px-4 px-md-5">
        {/* Left: Logo */}
        <a className="navbar-brand fw-bold fs-3" href="/">
          VyaparSathi
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right: Navigation & Buttons */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="ms-auto d-flex gap-3 flex-column flex-md-row align-items-center">
            {/* Join Waitlist - Scrolls to section */}
            <a
              href="#waitlist"
              className="join-waitlist-btn px-0 text-decoration-none"
            >
              Join Waitlist
            </a>

            {/* Sign Up Button - Now Links to Signup Page */}
            <Link
              to="/signup"
              className="btn btn-primary text-black px-2 py-2 fw-medium rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
