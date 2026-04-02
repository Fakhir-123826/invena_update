// components/CTABottom.jsx
import React, { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ type: "error", text: "Please enter your email address" });
      return;
    }

    if (!isValidEmail(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    // Simulate API call
    setTimeout(() => {
      console.log("Newsletter subscription:", email);
      setMessage({ 
        type: "success", 
        text: "Successfully subscribed to newsletter!" 
      });
      setEmail("");
      setIsSubmitting(false);

      // Clear success message after 3 seconds
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }, 1000);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="rts-cta-area-one rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-main-area-wrapper-one bg_image">
              <div className="left-areas">
                <span className="pre">Latest Business Ideas</span>
                <h3 className="title">Sign Up Newsletter</h3>
              </div>
              
              <div className="right-area">
                <form onSubmit={handleSubmit} className="inpur-area-main">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    disabled={isSubmitting}
                    className={message.type === "error" ? "error" : ""}
                  />
                  <button 
                    type="submit" 
                    className="rts-btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                  </button>
                </form>
                
                {message.text && (
                  <div className={`cta-message ${message.type}`}>
                    {message.text}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;