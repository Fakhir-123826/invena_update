// pages/IndustryDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";

const IndustryDetail = () => {
  const { industryId } = useParams();

  const industryData = {
    "financial-services": {
      title: "Financial Services",
      description: "Secure, compliant solutions for banking, insurance, and fintech",
      longDescription: "The financial services industry faces unique challenges around security, compliance, and legacy system modernization. Nex7 delivers tailored technology solutions that help financial institutions innovate while maintaining the highest standards of security and regulatory compliance.",
      challenges: [
        "Stringent regulatory requirements (SOX, Basel III, Dodd-Frank)",
        "Legacy core banking systems",
        "Cybersecurity threats and fraud prevention",
        "Customer experience expectations",
        "Data privacy and protection"
      ],
      solutions: [
        "Secure cloud migration for financial workloads",
        "Compliance automation and monitoring",
        "Digital banking and payment platforms",
        "AI-powered fraud detection",
        "Customer data platforms"
      ],
      caseStudies: [
        { title: "Cloud Migration for Global Bank", result: "40% cost reduction" },
        { title: "Digital Banking Platform", result: "2M+ active users" }
      ],
      image: "/assets/images/industries/financial-detail.webp",
      compliance: ["SOC 2", "PCI DSS", "GDPR", "SOX"]
    },
    "healthcare": {
      title: "Healthcare",
      description: "HIPAA-compliant technology solutions for healthcare providers",
      longDescription: "Transform patient care with secure, interoperable healthcare technology. Nex7 helps healthcare organizations modernize their IT infrastructure while maintaining strict HIPAA compliance and protecting sensitive patient data.",
      challenges: [
        "HIPAA and HITECH compliance",
        "Interoperability between systems",
        "Patient data security and privacy",
        "Telehealth integration",
        "Legacy EHR systems"
      ],
      solutions: [
        "HIPAA-compliant cloud infrastructure",
        "Secure EHR and EMR systems",
        "Telemedicine platforms",
        "Healthcare analytics and reporting",
        "Patient engagement portals"
      ],
      caseStudies: [
        { title: "Hospital Network Security", result: "Zero breaches in 2 years" },
        { title: "Telehealth Platform", result: "500% increase in virtual visits" }
      ],
      image: "/assets/images/industries/healthcare-detail.webp",
      compliance: ["HIPAA", "HITECH", "GDPR"]
    },
    "retail": {
      title: "Retail & eCommerce",
      description: "Omnichannel solutions to enhance customer experience",
      longDescription: "Deliver exceptional shopping experiences across all channels with our retail technology solutions. From e-commerce platforms to inventory management systems, we help retailers thrive in the digital economy.",
      challenges: [
        "Omnichannel integration",
        "Inventory management",
        "Payment security (PCI DSS)",
        "Personalized customer experiences",
        "Scalability during peak seasons"
      ],
      solutions: [
        "Headless e-commerce platforms",
        "Unified commerce solutions",
        "Inventory and order management",
        "Customer analytics and personalization",
        "Mobile commerce apps"
      ],
      caseStudies: [
        { title: "E-commerce Transformation", result: "200% sales increase" },
        { title: "Omnichannel Integration", result: "30% higher customer retention" }
      ],
      image: "/assets/images/industries/retail-detail.webp",
      compliance: ["PCI DSS", "GDPR", "CCPA"]
    }
  };

  const industry = industryData[industryId] || industryData["financial-services"];

  return (
    <>
      {/* Banner */}
      <div className="rts-breadcrumb-area bg_image" style={{ backgroundImage: `url(${industry.image})`, height: "400px", display: "flex", alignItems: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left text-center">
                <h1 className="title">{industry.title}</h1>
                <p className="disc">{industry.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Content */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="industry-content">
                <h2>Overview</h2>
                <p>{industry.longDescription}</p>

                <div className="row mt--40">
                  <div className="col-md-6">
                    <h3>Key Challenges</h3>
                    <ul className="list-unstyled mt-3">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="mb-2">
                          <FaCheckCircle className="text-primary me-2" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h3>Our Solutions</h3>
                    <ul className="list-unstyled mt-3">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="mb-2">
                          <FaCheckCircle className="text-primary me-2" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Compliance Expertise */}
                <div className="mt--40">
                  <h3>Compliance Expertise</h3>
                  <div className="d-flex flex-wrap gap-3 mt-3">
                    {industry.compliance.map((item, idx) => (
                      <span key={idx} className="badge bg-primary px-3 py-2">{item}</span>
                    ))}
                  </div>
                </div>

                {/* Case Studies */}
                <div className="mt--40">
                  <h3>Success Stories</h3>
                  <div className="row g-4 mt-2">
                    {industry.caseStudies.map((cs, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="case-card p-3 bg-light rounded-3">
                          <h5>{cs.title}</h5>
                          <p className="mb-0 text-primary">{cs.result}</p>
                          <Link to="/case-studies" className="rts-read-more mt-2 d-inline-block">
                            Read Case Study <FaArrowRight />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Sidebar Widgets */}
              <div className="rts-single-wized service">
                <div className="wized-header">
                  <h4 className="title">Industries We Serve</h4>
                </div>
                <div className="wized-body">
                  <ul className="single-categories">
                    <li><Link to="/industries/financial-services">Financial Services <FaArrowRight /></Link></li>
                    <li><Link to="/industries/healthcare">Healthcare <FaArrowRight /></Link></li>
                    <li><Link to="/industries/retail">Retail & eCommerce <FaArrowRight /></Link></li>
                    <li><Link to="/industries/government">Government <FaArrowRight /></Link></li>
                    <li><Link to="/industries/education">Education <FaArrowRight /></Link></li>
                    <li><Link to="/industries/smb">Small & Medium Business <FaArrowRight /></Link></li>
                  </ul>
                </div>
              </div>

              <div className="rts-single-wized contact">
                <div className="wized-body">
                  <h4 className="title">Ready to Transform Your Business?</h4>
                  <Link to="/contact" className="rts-btn btn-primary mt-3">Schedule a Consultation</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Icons */}
      <div className="rts-section-gap bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="value-prop text-center">
                <FaRocket style={{ fontSize: "48px", color: "#09637E", marginBottom: "15px" }} />
                <h4>Faster Time-to-Market</h4>
                <p>Accelerate your digital initiatives with our agile methodology</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-prop text-center">
                <FaShieldAlt style={{ fontSize: "48px", color: "#09637E", marginBottom: "15px" }} />
                <h4>Enterprise Security</h4>
                <p>Bank-grade security for all your business data</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-prop text-center">
                <FaChartLine style={{ fontSize: "48px", color: "#09637E", marginBottom: "15px" }} />
                <h4>Measurable Results</h4>
                <p>Data-driven approach with clear ROI metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryDetail;