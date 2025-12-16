import React from "react";
import "./css/Testimonials.css";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Shop Owners Say</h2>
        <p className="testimonials-subtitle">
          Real stories from local business owners who transformed their
          operations with VyaparSathi.
        </p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
            <p className="testimonial-quote">
              "VyaparSathi saved me hours every week. Now I know exactly who
              owes what — no more forgotten udhaar!"
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <img
                  src="https://via.placeholder.com/60?text=RK"
                  alt="Ramesh Kumar"
                />
              </div>
              <div>
                <div className="testimonial-name">Ramesh Kumar</div>
                <div className="testimonial-role">
                  Kirana Store Owner, Jaipur
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
            <p className="testimonial-quote">
              "The WhatsApp reminders are a game-changer. My customers pay
              faster, and my cash flow has improved a lot."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <img
                  src="https://via.placeholder.com/60?text=SD"
                  alt="Sunita Devi"
                />
              </div>
              <div>
                <div className="testimonial-name">Sunita Devi</div>
                <div className="testimonial-role">General Store, Patna</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
            <p className="testimonial-quote">
              "Simple and easy to use. Even my father who doesn't know much
              about phones uses it daily now."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <img
                  src="https://via.placeholder.com/60?text=AS"
                  alt="Amit Sharma"
                />
              </div>
              <div>
                <div className="testimonial-name">Amit Sharma</div>
                <div className="testimonial-role">Hardware Shop, Lucknow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
