import React, { useState } from "react";
import "./css/FAQ.css";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Is VyaparSathi really free to start?",
      a: "Yes! The Free plan is completely free forever with basic features. You can upgrade anytime for advanced tools.",
    },
    {
      q: "Do I need internet to use the app?",
      a: "You need internet to send reminders or sync data, but you can add transactions offline and they will sync when you're back online.",
    },
    {
      q: "Can I send reminders via WhatsApp?",
      a: "Yes! In the Pro plan, you can send automatic payment reminders directly via WhatsApp with one tap.",
    },
    {
      q: "Is my data safe and private?",
      a: "Absolutely. Your business data is encrypted and never shared. We take privacy very seriously.",
    },
    {
      q: "Can I use it on multiple phones?",
      a: "Yes, your account works on any phone. Just log in with your number.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.q}
              </button>
              <div
                className={`faq-answer ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
