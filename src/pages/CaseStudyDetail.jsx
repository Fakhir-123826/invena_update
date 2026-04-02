// pages/CaseStudyDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaChartLine, FaUsers, FaClock, FaCheckCircle } from "react-icons/fa";

const CaseStudyDetail = () => {
  const { caseId } = useParams();

  const caseStudyData = {
    "featured": {
      title: "Digital Transformation for Fortune 500 Financial Institution",
      client: "Global Bank Corporation",
      industry: "Financial Services",
      duration: "12 months",
      challenge: "The client was struggling with legacy systems that were costly to maintain, slow to update, and unable to support modern digital banking capabilities. They needed a comprehensive digital transformation strategy to remain competitive.",
      solution: "Nex7 implemented a phased digital transformation approach:",
      solutionPoints: [
        "Modernized core banking systems to cloud-native architecture",
        "Implemented AI-powered customer service chatbots",
        "Developed omnichannel banking platform",
        "Enhanced cybersecurity with zero-trust framework",
        "Created data analytics dashboard for real-time insights"
      ],
      results: [
        { metric: "40%", description: "Reduction in IT operational costs" },
        { metric: "99.99%", description: "System uptime achieved" },
        { metric: "3x", description: "Faster time-to-market for new features" },
        { metric: "95%", description: "Customer satisfaction score" }
      ],
      testimonial: {
        quote: "Nex7 transformed our digital infrastructure completely. Their expertise and dedication were instrumental in our success.",
        author: "John Smith",
        title: "CTO, Global Bank Corporation"
      },
      image: "/assets/images/case-studies/featured-detail.webp",
      technologies: ["AWS", "Kubernetes", "React", "Python", "MongoDB"]
    }
  };

  const cs = caseStudyData["featured"];

  return (
    <>
      {/* Banner */}
      <div className="rts-breadcrumb-area bg_image" style={{ backgroundImage: `url(${cs.image})`, height: "450px", display: "flex", alignItems: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left text-center">
                <h1 className="title">{cs.title}</h1>
                <p className="disc">{cs.client}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Section */}
      <div className="rts-project-details-area-end">
        <div className="container">
          <div className="single-project-info-wrapper-inner">
            <div className="row g-4">
              <div className="col-md-3">
                <div className="single-project-info text-center">
                  <span>Client</span>
                  <p>{cs.client}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-project-info text-center">
                  <span>Industry</span>
                  <p>{cs.industry}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-project-info text-center">
                  <span>Duration</span>
                  <p>{cs.duration}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-project-info text-center">
                  <span>Technologies</span>
                  <p>{cs.technologies.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge and Solution Section */}
      <div className="rts-section-gap pt--60">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2>The Challenge</h2>
              <p className="disc mt-3">{cs.challenge}</p>
            </div>
            <div className="col-lg-6">
              <h2>Our Solution</h2>
              <p className="disc mt-3">{cs.solution}</p>
              <ul className="list-unstyled mt-3">
                {cs.solutionPoints.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    <FaCheckCircle className="text-primary me-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="rts-section-gap bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span className="pre">Results</span>
                <h2 className="title">Measurable Impact</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 mt--20">
            {cs.results.map((result, idx) => (
              <div key={idx} className="col-md-3 col-6">
                <div className="result-card text-center p-4 bg-white rounded-3 shadow-sm">
                  <h2 className="text-primary mb-2">{result.metric}</h2>
                  <p className="mb-0">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="testimonial-card text-center p-5 bg-primary text-white rounded-3">
                <i className="fa-solid fa-quote-left mb-4" style={{ fontSize: "48px", opacity: 0.5 }}></i>
                <p className="h4 mb-4">"{cs.testimonial.quote}"</p>
                <h5 className="mb-1">{cs.testimonial.author}</h5>
                <p className="mb-0 opacity-75">{cs.testimonial.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="next-prev-project-wrapper">
        <Link to="/case-studies" className="single-next-prev-wrapper">
          <FaArrowLeft />
          <div className="info">
            <p>Back to All Case Studies</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CaseStudyDetail;