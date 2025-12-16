import React, { useState } from "react";
import "./css/Waitlist.css";

const Waitlist: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState(""); // To show correct name in success

  // Your Google Apps Script URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw0e7JBmOg3tGP4S2k43HbOBtrOFaOaPO7AhtfpayU4ffiQUy5dY5oD3LvlE68qWj3kkA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic validation
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
        }),
      });

      // Capture name before clearing form
      setSubmittedName(name.trim() || "friend");

      // Success
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      setError("Failed to submit. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reset success message after 5 seconds
  React.useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setSubmittedName("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section id="waitlist" className="waitlist-section">
      <div className="waitlist-container">
        <h2 className="waitlist-title">Join the Waitlist Today</h2>
        <p className="waitlist-subtitle">
          Be the first to experience VyaparSathi when we launch. Limited early
          access spots available.
        </p>

        {submitted ? (
          <div className="waitlist-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="success-icon"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <p>
              Thank you, <strong>{submittedName}</strong>! 🎉
              <br />
              We'll contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="waitlist-form" noValidate>
            {error && <div className="error-alert">{error}</div>}

            {/* Name Field */}
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="waitlist-input"
              required
              disabled={loading}
            />

            {/* Email & Phone */}
            <div className="waitlist-input-group">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="waitlist-input"
                required
                disabled={loading}
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="waitlist-input"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="waitlist-button"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Join Waitlist"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Waitlist;
