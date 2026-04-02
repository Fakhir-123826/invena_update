// pages/Industries.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaHospital, FaUniversity, FaShoppingCart, FaBuilding, FaSchool, FaChartBar } from "react-icons/fa";

const Industries = () => {
  const industries = [
    {
      id: "financial-services",
      name: "Financial Services",
      icon: <FaChartBar />,
      description: "Secure, compliant solutions for banking, insurance, and fintech",
      challenges: ["Regulatory Compliance", "Data Security", "Legacy Systems"],
      solutions: ["Secure Cloud Migration", "Compliance Automation", "Digital Banking Platforms"],
      image: "/assets/images/industries/financial.webp"
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <FaHospital />,
      description: "HIPAA-compliant technology solutions for healthcare providers",
      challenges: ["Patient Data Privacy", "Interoperability", "Telehealth Integration"],
      solutions: ["Secure EHR Systems", "Telemedicine Platforms", "Data Analytics"],
      image: "/assets/images/industries/healthcare.webp"
    },
    {
      id: "retail",
      name: "Retail & eCommerce",
      icon: <FaShoppingCart />,
      description: "Omnichannel solutions to enhance customer experience",
      challenges: ["Customer Experience", "Inventory Management", "Payment Security"],
      solutions: ["E-commerce Platforms", "CRM Integration", "Analytics Dashboards"],
      image: "/assets/images/industries/retail.webp"
    },
    {
      id: "government",
      name: "Government & Public Sector",
      icon: <FaBuilding />,
      description: "Secure, transparent solutions for government agencies",
      challenges: ["Security Compliance", "Citizen Engagement", "Legacy Modernization"],
      solutions: ["Digital Government Platforms", "Secure Portals", "Data Management"],
      image: "/assets/images/industries/government.webp"
    },
    {
      id: "education",
      name: "Education",
      icon: <FaSchool />,
      description: "Technology solutions for modern learning environments",
      challenges: ["Remote Learning", "Student Data Security", "Administrative Efficiency"],
      solutions: ["LMS Integration", "Secure Student Portals", "Analytics Tools"],
      image: "/assets/images/industries/education.webp"
    },
    {
      id: "smb",
      name: "Small & Medium Business",
      icon: <FaUniversity />,
      description: "Affordable, scalable solutions for growing businesses",
      challenges: ["Budget Constraints", "Scalability", "Digital Adoption"],
      solutions: ["Cloud Solutions", "Managed IT Services", "Digital Transformation"],
      image: "/assets/images/industries/smb.webp"
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="rts-breadcrumb-area bg_image" style={{ backgroundImage: "url('/assets/images/banner/industries-banner.webp')", height: "400px", display: "flex", alignItems: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left text-center">
                <h1 className="title">Industries We Serve</h1>
                <p className="disc">Specialized technology solutions for every industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row g-4">
            {industries.map((industry, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="industry-card h-100 border rounded-3 p-4 shadow-sm hover-shadow transition">
                  <div style={{ fontSize: "48px", color: "#09637E", marginBottom: "20px" }}>
                    {industry.icon}
                  </div>
                  <h3 className="mb-3">{industry.name}</h3>
                  <p className="disc mb-3">{industry.description}</p>
                  
                  <div className="mb-3">
                    <strong>Key Challenges:</strong>
                    <ul className="mt-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-3">
                    <strong>Our Solutions:</strong>
                    <ul className="mt-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={`/industries/${industry.id}`} className="rts-btn btn-primary mt-3 d-inline-flex align-items-center gap-2">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Expertise Section */}
      <div className="rts-section-gap bg-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center text-white">
                <span className="pre border-white text-white">Compliance Expertise</span>
                <h2 className="title text-white">Industry-Recognized Compliance</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 mt--20">
            <div className="col-md-3 col-6">
              <div className="text-center p-3 bg-white rounded-3">
                <h3>HIPAA</h3>
                <small>Healthcare Compliance</small>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="text-center p-3 bg-white rounded-3">
                <h3>PCI DSS</h3>
                <small>Payment Security</small>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="text-center p-3 bg-white rounded-3">
                <h3>GDPR</h3>
                <small>Data Protection</small>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="text-center p-3 bg-white rounded-3">
                <h3>ISO 27001</h3>
                <small>Information Security</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;