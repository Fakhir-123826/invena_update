// // pages/ServiceDetail.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { FaCheckCircle, FaArrowRight, FaPhoneVolume } from "react-icons/fa";

// const ServiceDetail = () => {
//   const { serviceId } = useParams();

//   const serviceData = {
//     "digital-transformation": {
//       title: "Digital Transformation Consulting",
//       description: "End-to-end digital transformation strategy and execution",
//       longDescription: "We help organizations navigate their digital journey with comprehensive transformation strategies that align technology with business goals. Our approach ensures sustainable growth and competitive advantage in the digital age.",
//       features: [
//         "Comprehensive digital maturity assessment",
//         "Strategic roadmap development",
//         "Change management and cultural transformation",
//         "Technology stack optimization",
//         "Process automation and digitization",
//         "Performance measurement and KPIs"
//       ],
//       benefits: [
//         "Increased operational efficiency by 40-60%",
//         "Reduced time-to-market by 50%",
//         "Enhanced customer experience",
//         "Improved data-driven decision making",
//         "Competitive market positioning"
//       ],
//       image: "/assets/images/services/digital-transformation-detail.webp",
//       relatedServices: ["Cloud Services", "Data & AI", "Application Development"]
//     },
//     "cloud": {
//       title: "Cloud Services",
//       description: "Cloud migration, architecture, and DevOps automation",
//       longDescription: "Accelerate your cloud journey with our expert cloud services. From strategy to implementation, we help businesses leverage the full potential of cloud computing for scalability, security, and cost optimization.",
//       features: [
//         "Cloud migration strategy and execution",
//         "Multi-cloud architecture design",
//         "DevOps and CI/CD implementation",
//         "Cloud cost optimization",
//         "24/7 cloud monitoring and support",
//         "Disaster recovery planning"
//       ],
//       benefits: [
//         "30-50% reduction in infrastructure costs",
//         "99.99% uptime and reliability",
//         "Scalable on-demand resources",
//         "Enhanced security and compliance",
//         "Faster deployment cycles"
//       ],
//       image: "/assets/images/services/cloud-detail.webp",
//       relatedServices: ["Cybersecurity", "Managed IT Services", "Application Development"]
//     },
//     "cybersecurity": {
//       title: "Cybersecurity & Risk Management",
//       description: "Comprehensive security assessments and compliance",
//       longDescription: "Protect your business from evolving cyber threats with our comprehensive security solutions. We provide end-to-end cybersecurity services that ensure regulatory compliance and business continuity.",
//       features: [
//         "Vulnerability assessments and penetration testing",
//         "Security architecture design",
//         "Compliance management (HIPAA, GDPR, PCI DSS)",
//         "Security awareness training",
//         "Incident response and recovery",
//         "Continuous security monitoring"
//       ],
//       benefits: [
//         "85% reduction in security incidents",
//         "Full regulatory compliance",
//         "Enhanced customer trust",
//         "Protection of sensitive data",
//         "Business continuity assurance"
//       ],
//       image: "/assets/images/services/cybersecurity-detail.webp",
//       relatedServices: ["Cloud Services", "Managed IT Services", "Digital Transformation"]
//     },
//     "application": {
//       title: "Application Development & Integration",
//       description: "Custom applications and legacy modernization",
//       longDescription: "Build powerful, scalable applications that drive business growth. Our development team creates custom solutions tailored to your specific needs, from mobile apps to enterprise systems.",
//       features: [
//         "Custom web and mobile application development",
//         "API design and integration",
//         "Legacy system modernization",
//         "Quality assurance and testing",
//         "Ongoing maintenance and support",
//         "Agile development methodology"
//       ],
//       benefits: [
//         "Faster time-to-market with agile processes",
//         "Reduced technical debt",
//         "Seamless system integration",
//         "Improved user experience",
//         "Scalable architecture"
//       ],
//       image: "/assets/images/services/app-dev-detail.webp",
//       relatedServices: ["Cloud Services", "Data & AI", "Digital Transformation"]
//     },
//     "data": {
//       title: "Data, Analytics & AI",
//       description: "Data engineering, BI dashboards, and AI/ML solutions",
//       longDescription: "Unlock the power of your data with our analytics and AI solutions. We help organizations transform raw data into actionable insights using cutting-edge technologies.",
//       features: [
//         "Data warehouse and lake architecture",
//         "Business intelligence dashboards",
//         "Machine learning model development",
//         "Predictive analytics",
//         "Real-time data processing",
//         "Data governance and quality"
//       ],
//       benefits: [
//         "Data-driven decision making",
//         "Predictive insights for proactive actions",
//         "Automated reporting and analytics",
//         "Competitive advantage through AI",
//         "Improved operational efficiency"
//       ],
//       image: "/assets/images/services/data-ai-detail.webp",
//       relatedServices: ["Cloud Services", "Application Development", "Digital Transformation"]
//     },
//     "managed-it": {
//       title: "Managed IT Services",
//       description: "Comprehensive IT support and infrastructure management",
//       longDescription: "Focus on your core business while we handle your IT needs. Our managed services provide proactive monitoring, maintenance, and support for your entire IT infrastructure.",
//       features: [
//         "24/7 IT help desk support",
//         "Network and infrastructure monitoring",
//         "Proactive maintenance and patching",
//         "Backup and disaster recovery",
//         "Vendor management",
//         "Strategic IT consulting"
//       ],
//       benefits: [
//         "Reduced IT operational costs by 30-40%",
//         "Improved system uptime and reliability",
//         "Access to expert IT professionals",
//         "Scalable support as you grow",
//         "Focus on strategic initiatives"
//       ],
//       image: "/assets/images/services/managed-it-detail.webp",
//       relatedServices: ["Cloud Services", "Cybersecurity", "Application Development"]
//     }
//   };

//   const service = serviceData[serviceId] || serviceData["digital-transformation"];

//   return (
//     <>
//       {/* Banner */}
//       <div className="banner-inner-service-details-1 large-height" style={{ backgroundImage: `url(${service.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left text-center">
//                 <h1 className="title">{service.title}</h1>
//                 <p className="disc">{service.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Service Details Content */}
//       <div className="service-details-left-area mt--120">
//         <div className="container">
//           <div className="row g-5">
//             <div className="col-lg-8">
//               <div className="service-details-content">
//                 <h2>About This Service</h2>
//                 <p className="disc">{service.longDescription}</p>
                
//                 <div className="row mt--40">
//                   <div className="col-md-6">
//                     <h3>Key Features</h3>
//                     <ul className="list-unstyled mt-3">
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} className="mb-2">
//                           <FaCheckCircle className="text-primary me-2" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="col-md-6">
//                     <h3>Business Benefits</h3>
//                     <ul className="list-unstyled mt-3">
//                       {service.benefits.map((benefit, idx) => (
//                         <li key={idx} className="mb-2">
//                           <FaCheckCircle className="text-primary me-2" />
//                           {benefit}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Process Section */}
//                 <div className="mt--60">
//                   <h3>Our Approach</h3>
//                   <div className="row g-4 mt-3">
//                     <div className="col-md-3">
//                       <div className="process-step text-center">
//                         <div className="step-badge bg-primary text-white rounded-circle mx-auto mb-2" style={{ width: "40px", height: "40px", lineHeight: "40px" }}>1</div>
//                         <h6>Discovery</h6>
//                         <small>Understand your needs</small>
//                       </div>
//                     </div>
//                     <div className="col-md-3">
//                       <div className="process-step text-center">
//                         <div className="step-badge bg-primary text-white rounded-circle mx-auto mb-2" style={{ width: "40px", height: "40px", lineHeight: "40px" }}>2</div>
//                         <h6>Strategy</h6>
//                         <small>Develop roadmap</small>
//                       </div>
//                     </div>
//                     <div className="col-md-3">
//                       <div className="process-step text-center">
//                         <div className="step-badge bg-primary text-white rounded-circle mx-auto mb-2" style={{ width: "40px", height: "40px", lineHeight: "40px" }}>3</div>
//                         <h6>Implementation</h6>
//                         <small>Execute with agility</small>
//                       </div>
//                     </div>
//                     <div className="col-md-3">
//                       <div className="process-step text-center">
//                         <div className="step-badge bg-primary text-white rounded-circle mx-auto mb-2" style={{ width: "40px", height: "40px", lineHeight: "40px" }}>4</div>
//                         <h6>Optimization</h6>
//                         <small>Continuous improvement</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-4">
//               {/* Sidebar Widgets */}
//               <div className="rts-single-wized service">
//                 <div className="wized-header">
//                   <h4 className="title">All Services</h4>
//                 </div>
//                 <div className="wized-body">
//                   <ul className="single-categories">
//                     <li><a href="/services/digital-transformation">Digital Transformation <FaArrowRight /></a></li>
//                     <li><a href="/services/cloud">Cloud Services <FaArrowRight /></a></li>
//                     <li><a href="/services/cybersecurity">Cybersecurity <FaArrowRight /></a></li>
//                     <li><a href="/services/application">Application Development <FaArrowRight /></a></li>
//                     <li><a href="/services/data">Data & AI <FaArrowRight /></a></li>
//                     <li><a href="/services/managed-it">Managed IT Services <FaArrowRight /></a></li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="rts-single-wized contact">
//                 <div className="wized-body">
//                   <h4 className="title">Need Help?<br />Let's Discuss Your Project</h4>
//                   <a className="rts-btn btn-primary" href="/contact">Get in Touch</a>
//                   <div className="call-area mt-4">
//                     <div className="icon">
//                       <FaPhoneVolume />
//                     </div>
//                     <div className="information">
//                       <span>Call us anytime</span>
//                       <a href="#"><h6 className="title">+1 (888) 123-4567</h6></a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="rts-single-wized download">
//                 <div className="wized-header">
//                   <h4 className="title">Resources</h4>
//                 </div>
//                 <div className="wized-body">
//                   <div className="single-download-area">
//                     <div className="mid">
//                       <h6 className="title">Service Brochure</h6>
//                       <span>PDF, 2.5 MB</span>
//                     </div>
//                     <a href="#" className="rts-btn btn-primary">Download</a>
//                   </div>
//                   <div className="single-download-area">
//                     <div className="mid">
//                       <h6 className="title">Case Study</h6>
//                       <span>PDF, 1.8 MB</span>
//                     </div>
//                     <a href="#" className="rts-btn btn-primary">Download</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Services */}
//       <div className="rts-section-gap">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-style-one center">
//                 <h2 className="title">Related Services</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row g-4 mt--20">
//             {service.relatedServices.map((related, idx) => (
//               <div key={idx} className="col-md-4">
//                 <div className="service-card text-center p-4 bg-light rounded-3 h-100">
//                   <h4>{related}</h4>
//                   <Link to={`/services/${related.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="rts-read-more mt-3 d-inline-block">
//                     Learn More <FaArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServiceDetail;

// pages/ServiceDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight, FaPhoneVolume } from "react-icons/fa";
import { getServiceBySlug, getServices } from "../services/api";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch current service
        const serviceData = await getServiceBySlug(serviceId);
        setService(serviceData);

        // Fetch all services for sidebar and related services
        const servicesData = await getServices();
        setAllServices(servicesData);
      } catch (err) {
        console.error("Error fetching service:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (serviceId) {
      fetchData();
    }
  }, [serviceId]);

  // Get related services (exclude current service)
  const getRelatedServices = () => {
    if (!service || !allServices.length) return [];
    return allServices
      .filter(s => s.slug !== serviceId)
      .slice(0, 3);
  };

  // Parse ACF fields or use defaults
  const getFeatures = () => {
    if (service?.acf?.service_features) {
      return service.acf.service_features.map(f => f.feature);
    }
    // Default features based on service type
    const defaultFeatures = {
      "digital-transformation": [
        "Comprehensive digital maturity assessment",
        "Strategic roadmap development",
        "Change management and cultural transformation",
        "Technology stack optimization",
        "Process automation and digitization",
        "Performance measurement and KPIs"
      ],
      "cloud": [
        "Cloud migration strategy and execution",
        "Multi-cloud architecture design",
        "DevOps and CI/CD implementation",
        "Cloud cost optimization",
        "24/7 cloud monitoring and support",
        "Disaster recovery planning"
      ],
      "cybersecurity": [
        "Vulnerability assessments and penetration testing",
        "Security architecture design",
        "Compliance management (HIPAA, GDPR, PCI DSS)",
        "Security awareness training",
        "Incident response and recovery",
        "Continuous security monitoring"
      ],
      "application": [
        "Custom web and mobile application development",
        "API design and integration",
        "Legacy system modernization",
        "Quality assurance and testing",
        "Ongoing maintenance and support",
        "Agile development methodology"
      ],
      "data": [
        "Data warehouse and lake architecture",
        "Business intelligence dashboards",
        "Machine learning model development",
        "Predictive analytics",
        "Real-time data processing",
        "Data governance and quality"
      ],
      "managed-it": [
        "24/7 IT help desk support",
        "Network and infrastructure monitoring",
        "Proactive maintenance and patching",
        "Backup and disaster recovery",
        "Vendor management",
        "Strategic IT consulting"
      ]
    };
    return defaultFeatures[serviceId] || defaultFeatures["digital-transformation"];
  };

  const getBenefits = () => {
    if (service?.acf?.service_benefits) {
      return service.acf.service_benefits.map(b => b.benefit);
    }
    const defaultBenefits = {
      "digital-transformation": [
        "Increased operational efficiency by 40-60%",
        "Reduced time-to-market by 50%",
        "Enhanced customer experience",
        "Improved data-driven decision making",
        "Competitive market positioning"
      ],
      "cloud": [
        "30-50% reduction in infrastructure costs",
        "99.99% uptime and reliability",
        "Scalable on-demand resources",
        "Enhanced security and compliance",
        "Faster deployment cycles"
      ],
      "cybersecurity": [
        "85% reduction in security incidents",
        "Full regulatory compliance",
        "Enhanced customer trust",
        "Protection of sensitive data",
        "Business continuity assurance"
      ],
      "application": [
        "Faster time-to-market with agile processes",
        "Reduced technical debt",
        "Seamless system integration",
        "Improved user experience",
        "Scalable architecture"
      ],
      "data": [
        "Data-driven decision making",
        "Predictive insights for proactive actions",
        "Automated reporting and analytics",
        "Competitive advantage through AI",
        "Improved operational efficiency"
      ],
      "managed-it": [
        "Reduced IT operational costs by 30-40%",
        "Improved system uptime and reliability",
        "Access to expert IT professionals",
        "Scalable support as you grow",
        "Focus on strategic initiatives"
      ]
    };
    return defaultBenefits[serviceId] || defaultBenefits["digital-transformation"];
  };

  const getIcon = () => {
    const icons = {
      "digital-transformation": "fa-chart-line",
      "cloud": "fa-cloud",
      "cybersecurity": "fa-shield-alt",
      "application": "fa-code",
      "data": "fa-chart-simple",
      "managed-it": "fa-server"
    };
    return icons[serviceId] || "fa-cogs";
  };

  if (loading) {
    return (
      <div className="rts-section-gap text-center">
        <div className="loader"></div>
        <p>Loading service details...</p>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="rts-section-gap text-center">
        <div className="alert alert-danger">
          <h3>Service Not Found</h3>
          <p>The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/services" className="rts-btn btn-primary mt-3">Back to Services</Link>
        </div>
      </div>
    );
  }

  const features = getFeatures();
  const benefits = getBenefits();
  const relatedServices = getRelatedServices();
  const iconClass = getIcon();
  
  // Get featured image URL
  const featuredImage = service._embedded?.['wp:featuredmedia']?.[0]?.source_url || `/assets/images/services/${serviceId}-detail.webp`;

  return (
    <>
      {/* Banner */}
      <div className="banner-inner-service-details-1 large-height" style={{ 
        backgroundImage: `url(${featuredImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left text-center">
                <h1 className="title">{service.title?.rendered || service.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: service.excerpt?.rendered || service.description }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Content */}
      <div className="service-details-left-area mt--120">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="service-details-content">
                <h2>About This Service</h2>
                <div dangerouslySetInnerHTML={{ __html: service.content?.rendered || service.longDescription }} />
                
                <div className="row mt--40">
                  <div className="col-md-6">
                    <h3>Key Features</h3>
                    <ul className="list-unstyled mt-3">
                      {features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <FaCheckCircle className="text-primary me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h3>Business Benefits</h3>
                    <ul className="list-unstyled mt-3">
                      {benefits.map((benefit, idx) => (
                        <li key={idx} className="mb-2">
                          <FaCheckCircle className="text-primary me-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Process Section */}
                <div className="mt--60">
                  <h3>Our Approach</h3>
                  <div className="row g-4 mt-3">
                    <div className="col-md-3">
                      <div className="process-step text-center">
                        <div className="step-badge bg-primary text-white rounded-circle mx-auto mb-2" style={{ width: "40px", height: "40px", lineHeight: "40px" }}>1</div>
                        <h6>Discovery</h6>
                        <small>Understand your needs</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="process-step text-center">
                        <div className="step-badge bg-primary text-white rounded-circle mx-auto mb-2" style={{ width: "40px", height: "40px", lineHeight: "40px" }}>2</div>
                        <h6>Strategy</h6>
                        <small>Develop roadmap</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="process-step text-center">
                        <div className="step-badge bg-primary text-white rounded-circle mx-auto mb-2" style={{ width: "40px", height: "40px", lineHeight: "40px" }}>3</div>
                        <h6>Implementation</h6>
                        <small>Execute with agility</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="process-step text-center">
                        <div className="step-badge bg-primary text-white rounded-circle mx-auto mb-2" style={{ width: "40px", height: "40px", lineHeight: "40px" }}>4</div>
                        <h6>Optimization</h6>
                        <small>Continuous improvement</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Sidebar Widgets */}
              <div className="rts-single-wized service">
                <div className="wized-header">
                  <h4 className="title">All Services</h4>
                </div>
                <div className="wized-body">
                  <ul className="single-categories">
                    {allServices.map((s) => (
                      <li key={s.id}>
                        <Link to={`/services/${s.slug}`}>
                          {s.title?.rendered || s.title}
                          <FaArrowRight />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rts-single-wized contact">
                <div className="wized-body">
                  <h4 className="title">Need Help?<br />Let's Discuss Your Project</h4>
                  <Link className="rts-btn btn-primary" to="/contact">Get in Touch</Link>
                  <div className="call-area mt-4">
                    <div className="icon">
                      <FaPhoneVolume />
                    </div>
                    <div className="information">
                      <span>Call us anytime</span>
                      <a href="tel:+18881234567"><h6 className="title">+1 (888) 123-4567</h6></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rts-single-wized download">
                <div className="wized-header">
                  <h4 className="title">Resources</h4>
                </div>
                <div className="wized-body">
                  <div className="single-download-area">
                    <div className="mid">
                      <h6 className="title">Service Brochure</h6>
                      <span>PDF, 2.5 MB</span>
                    </div>
                    <a href="#" className="rts-btn btn-primary">Download</a>
                  </div>
                  <div className="single-download-area">
                    <div className="mid">
                      <h6 className="title">Case Study</h6>
                      <span>PDF, 1.8 MB</span>
                    </div>
                    <a href="#" className="rts-btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="rts-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-style-one center">
                  <h2 className="title">Related Services</h2>
                </div>
              </div>
            </div>
            <div className="row g-4 mt--20">
              {relatedServices.map((related) => (
                <div key={related.id} className="col-md-4">
                  <div className="service-card text-center p-4 bg-light rounded-3 h-100">
                    <i className={`fa-solid fa-${related.acf?.service_icon || 'cogs'} fa-2x mb-3`} style={{ color: "#09637E" }}></i>
                    <h4>{related.title?.rendered || related.title}</h4>
                    <div dangerouslySetInnerHTML={{ __html: (related.excerpt?.rendered || "").substring(0, 100) + "..." }} />
                    <Link to={`/services/${related.slug}`} className="rts-read-more mt-3 d-inline-block">
                      Learn More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetail;