// components/Footer.jsx
import React from "react";
// import { Link } from "react-router-dom"; // If using React Router
// If not using React Router, use <a> tags instead
import {
  FaAngleRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    { id: 1, name: "Business planning", link: "/service-details" },
    { id: 2, name: "Tax strategy", link: "/service-details" },
    { id: 3, name: "Financial advices", link: "/service-details" },
    { id: 4, name: "Insurance strategy", link: "/service-details" },
    { id: 5, name: "Manage investment", link: "/service-details" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div
      id="contact"
      className="rts-footer-area pt--100 pb--100 pt_sm--50 pb_sm--40 footer-two footer-bg-two"
    >
      <div className="container">
        <div className="row">
          {/* Left Section - Ready to Work */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="footer-two-single-wized left">
              <h3 className="title animated fadeIn">
                <span>Ready To</span> <br />
                Work With Us?
              </h3>
              <p className="disc">
                Felis consequat magnis est fames sagittis ultrices placerat
                sodales porttitor quisque.
              </p>
              <a className="rts-btn btn-primary" href="/quote">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--50">
            <div className="footer-two-single-wized two">
              <div className="wized-title-area">
                <h5 className="wized-title">Our Services</h5>
                <img src="/assets/images/footer/01.png" alt="Invena_Footer" />
              </div>
              <div className="wized-2-body">
                <ul>
                  {services.map((service) => (
                    <li key={service.id}>
                      <a href={service.link}>
                        <FaAngleRight className="footer-icon" />
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--30 mt_md--30">
            <div className="footer-two-single-wized">
              <div className="wized-title-area">
                <h5 className="wized-title">Contact Us</h5>
                <img src="/assets/images/footer/01.png" alt="Invena_Footer" />
              </div>
              <div className="wized-2-body">
                <div className="contact-info-1">
                  <div className="icon bg-white px-3 py-2 rounded-circle">
                    <FaMapMarkerAlt
                      style={{
                        color: "#09637E",
                      }}
                    />
                  </div>
                  <div className="disc">
                    <span>Call Us 24/7</span>
                    <a href="tel:+25621452156">(+256) 2145.2156</a>
                  </div>
                </div>
                <div className="contact-info-1">
                  <div className="icon bg-white px-3 py-2 rounded-circle">
                    <FaMapMarkerAlt
                      style={{
                        color: "#09637E",
                      }}
                    />
                  </div>
                  <div className="disc">
                    <span>Work with us</span>
                    <a href="mailto:info@Invena.com">info@Invena.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="footer-two-single-wized right">
              <div className="wized-2-body">
                <div className="contact-info-1">
                  <div className="icon bg-white px-3 py-2 rounded-circle">
                    <FaMapMarkerAlt
                      style={{
                        color: "#09637E",
                      }}
                    />
                  </div>
                  <div className="disc">
                    <span>Our Location</span>
                    <a
                      href="https://maps.google.com/?q=XYZ+Hilton+Street,+125+Town+United+State"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      XYZ Hilton Street, 125 Town <br />
                      United State
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Copyright Section */}
        {/* <div className="row mt--50">
          <div className="col-12">
            <div className="copyright-area text-center">
              <p className="copyright-text">
                &copy; {currentYear} Invena. All rights reserved.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
