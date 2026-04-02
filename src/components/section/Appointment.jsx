// components/Appointment.jsx (Enhanced with better field names)
import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="appoinment-area-seven bg_image ptb--100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="appoinment-main-wrapper-7">
              <form onSubmit={handleSubmit}>
                <span>Make an Appointment</span>
                <h4 className="title">Request a free quote</h4>
                
                {submitStatus === "success" && (
                  <div className="alert alert-success">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="alert alert-danger">
                    Something went wrong. Please try again.
                  </div>
                )}
                
                <div className="input-half-wrapper">
                  <div className="signle-input">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="signle-input">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="signle-input">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="signle-input">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type Your Message"
                    rows="4"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary rts-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;