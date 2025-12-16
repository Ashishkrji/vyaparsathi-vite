import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!name || !email || !phone || !password) {
      setError("All fields are required");
      return;
    }

    // Simulate successful signup
    console.log("Signup successful:", { name, email, phone });
    setSuccess(true);
    setError("");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-header">
            <h1 className="signup-title">Create Your Account</h1>
            <p className="signup-subtitle">
              Join VyaparSathi and manage your business with ease
            </p>
          </div>

          {success ? (
            <div className="success-state">
              <div className="success-icon">✓</div>
              <h2 className="success-title">Account Created Successfully!</h2>
              <p className="success-message">Welcome to VyaparSathi</p>
              <Link to="/login" className="success-button">
                Continue to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="signup-form">
              {error && <div className="error-alert">{error}</div>}

              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="input-field"
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-field"
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="input-field"
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-field"
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-field"
                  required
                />
              </div>

              <button type="submit" className="signup-button">
                Create Account
              </button>
            </form>
          )}

          <p className="login-link-text">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
