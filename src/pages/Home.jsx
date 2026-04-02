// // src/pages/Home.jsx
// import React from "react";
// import { useServices, useCaseStudies, useTestimonials } from "../hooks/useWordPressData";
// import BannerSeven from "../components/section/Banner";
// import { AboutSec } from "../components/section/AboutSec";
// import { Cta } from "../components/section/Cta";
// import HowWeWork from "../components/section/HowWeWork";
// import TrustedClients from "../components/section/TrustedClients";
// import Pricing from "../components/section/Pricing";
// import Appointment from "../components/section/Appointment";
// import Blog from "../components/section/Blog";
// import CtaBottom from "../components/section/CtaBottom";

// const Home = () => {
//     const { services, loading: servicesLoading } = useServices();
//     const { caseStudies, loading: casesLoading } = useCaseStudies();
//     const { testimonials, loading: testimonialsLoading } = useTestimonials();

//     // Show only first 6 services
//     const featuredServices = services?.slice(0, 6) || [];

//     // Static fallback data if WordPress is not connected
//     const staticServices = [
//         { id: 1, title: "Digital Transformation Consulting", icon: "fa-chart-line", excerpt: "End-to-end digital transformation strategy and execution" },
//         { id: 2, title: "Cloud Services", icon: "fa-cloud", excerpt: "Cloud migration, architecture, and DevOps automation" },
//         { id: 3, title: "Cybersecurity", icon: "fa-shield-alt", excerpt: "Comprehensive security assessments and compliance" },
//     ];

//     const displayServices = servicesLoading ? staticServices : featuredServices;

//     return (
//         <>
//             <BannerSeven />
//             <AboutSec />
//             <Cta />

//             {/* Services Section */}
//             <div id="service" className="rts-latest-service-area rts-section-gap">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-style-one center">
//                                 <span className="pre">Our Latest Services</span>
//                                 <h2 className="title">Service We Provide</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row g-4 mt--20">
//                         {displayServices.map((service) => (
//                             <div key={service.id} className="col-lg-4 col-md-6">
//                                 <div className="service-single-main-wrapper-five h-100">
//                                     <div className="icon">
//                                         <i className={`fa-solid ${service.acf?.service_icon || service.icon || 'fa-cogs'} fa-2x`}></i>
//                                     </div>
//                                     <h4 className="title">{service.title?.rendered || service.title}</h4>
//                                     <p className="disc">{service.excerpt?.rendered?.replace(/<[^>]*>/g, '') || service.excerpt}</p>
//                                     <a className="rts-btn btn-primary" href={`/services/${service.slug || service.id}`}>
//                                         Learn More
//                                     </a>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <HowWeWork />

//             {/* Projects/Case Studies Section */}
//             <div id="project" className="rts-project-area rts-section-gap without-bg-image">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-style-five center">
//                                 <span className="pre">Popular Projects</span>
//                                 <h2 className="title">Our Completed Projects</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row g-4 mt--20">
//                         {!casesLoading && caseStudies?.slice(0, 3).map((caseStudy) => (
//                             <div key={caseStudy.id} className="col-lg-4 col-md-6">
//                                 <div className="single-project-area-main-wrapper-6">
//                                     {caseStudy._embedded?.['wp:featuredmedia'] && (
//                                         <a href={`/case-studies/${caseStudy.slug}`} className="thumbnail d-block overflow-hidden rounded-3">
//                                             <img
//                                                 src={caseStudy._embedded['wp:featuredmedia'][0].source_url}
//                                                 alt={caseStudy.title.rendered}
//                                                 className="w-100"
//                                                 style={{ height: "250px", objectFit: "cover" }}
//                                             />
//                                         </a>
//                                     )}
//                                     <div className="inner">
//                                         <a href={`/case-studies/${caseStudy.slug}`}>
//                                             <h4 className="title">{caseStudy.title.rendered}</h4>
//                                         </a>
//                                         <div dangerouslySetInnerHTML={{ __html: caseStudy.excerpt.rendered }} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <TrustedClients />
//             <Pricing />

//             {/* Testimonials Section */}
//             <div className="rts-testimonails-area-main rts-section-gapBottom">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="title-style-five center">
//                                 <span className="pre">Testimonial</span>
//                                 <h2 className="title">What They Say About Our Company</h2>
//                             </div>
//                         </div>
//                     </div>
//                     {!testimonialsLoading && testimonials?.length > 0 && (
//                         <div className="row g-4 mt--20">
//                             {testimonials.slice(0, 3).map((testimonial) => (
//                                 <div key={testimonial.id} className="col-md-4">
//                                     <div className="testimonial-card p-4 bg-white rounded-3 shadow-sm h-100">
//                                         <i className="fa-solid fa-quote-left mb-3" style={{ fontSize: "32px", color: "#09637E" }}></i>
//                                         <div dangerouslySetInnerHTML={{ __html: testimonial.content.rendered }} />
//                                         <div className="mt-3">
//                                             <strong>{testimonial.title.rendered}</strong>
//                                             {testimonial.acf?.position && (
//                                                 <div><small>{testimonial.acf.position}</small></div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <Appointment />
//             <Blog />
//             <CtaBottom />
//         </>
//     );
// };

// export default Home;

// src/pages/Home.jsx
import React from "react";
import {
  useServices,
  useCaseStudies,
  useTestimonials,
} from "../hooks/useWordPressData";
import BannerSeven from "../components/section/Banner";
import { AboutSec } from "../components/section/AboutSec";
import { Cta } from "../components/section/Cta";
import HowWeWork from "../components/section/HowWeWork";
import TrustedClients from "../components/section/TrustedClients";
import Pricing from "../components/section/Pricing";
import Appointment from "../components/section/Appointment";
import Blog from "../components/section/Blog";
import CtaBottom from "../components/section/CtaBottom";
import {
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaChartPie,
  FaUsers,
} from "react-icons/fa";
const Home = () => {
  const { services, loading: servicesLoading } = useServices();
  const { caseStudies, loading: casesLoading } = useCaseStudies();
  const { testimonials, loading: testimonialsLoading } = useTestimonials();

  // Static fallback data with dummy text
  const staticServices = [
    {
      id: 1,
      title: "Digital Transformation Consulting",
      icon: "fa-chart-line",
      excerpt:
        "End-to-end digital transformation strategy and execution to help businesses modernize their operations and stay competitive in the digital age.",
    },
    {
      id: 2,
      title: "Cloud Services",
      icon: "fa-cloud",
      excerpt:
        "Comprehensive cloud migration, architecture design, and DevOps automation services for scalable and cost-effective infrastructure.",
    },
    {
      id: 3,
      title: "Cybersecurity",
      icon: "fa-shield-alt",
      excerpt:
        "Advanced security assessments, threat detection, and compliance solutions to protect your business from evolving cyber threats.",
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      icon: "fa-robot",
      excerpt:
        "Intelligent automation solutions and predictive analytics powered by cutting-edge AI and machine learning technologies.",
    },
    {
      id: 5,
      title: "Data Analytics",
      icon: "fa-chart-pie",
      excerpt:
        "Transform raw data into actionable insights with our comprehensive business intelligence and data visualization services.",
    },
    {
      id: 6,
      title: "IT Consulting",
      icon: "fa-users",
      excerpt:
        "Strategic IT planning, architecture review, and technology roadmap development for sustainable business growth.",
    },
  ];

  // Static case studies with dummy data
  const staticCaseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Modernization",
      excerpt:
        "Complete overhaul of legacy e-commerce platform resulting in 150% increase in conversion rates.",
      slug: "ecommerce-modernization",
      image: "/assets/ecommerce.jpg",
    },
    {
      id: 2,
      title: "Cloud Migration Success Story",
      excerpt:
        "Seamless migration of enterprise infrastructure to AWS with 40% reduction in operational costs.",
      slug: "cloud-migration",
      image: "/assets/cloud.jpg",
    },
    {
      id: 3,
      title: "Cybersecurity Implementation",
      excerpt:
        "Comprehensive security framework deployment protecting over 500,000 customer records.",
      slug: "cybersecurity-implementation",
      image: "/assets/cyber.jpeg",
    },
  ];

  // Static testimonials with dummy text
  const staticTestimonials = [
    {
      id: 1,
      title: "John Anderson",
      content:
        "<p>Working with this team has been transformative for our business. Their expertise in digital transformation helped us streamline operations and increase efficiency by over 60%. Highly recommended!</p>",
      position: "CEO, TechCorp Solutions",
    },
    {
      id: 2,
      title: "Sarah Mitchell",
      content:
        "<p>Exceptional service and support throughout our cloud migration journey. Their team's technical knowledge and dedication to meeting deadlines made the entire process seamless and stress-free.</p>",
      position: "CTO, InnovateSoft",
    },
    {
      id: 3,
      title: "Michael Chen",
      content:
        "<p>The cybersecurity solutions they implemented have given us complete peace of mind. Their proactive approach and continuous monitoring have protected our business from multiple potential threats.</p>",
      position: "IT Director, Global Finance Inc.",
    },
  ];

  // Show only first 6 services
  const featuredServices = services?.slice(0, 6) || [];
  const displayServices =
    servicesLoading || !featuredServices.length
      ? staticServices
      : featuredServices;

  // Case studies display logic
  const displayCaseStudies =
    casesLoading || !caseStudies?.length
      ? staticCaseStudies
      : caseStudies.slice(0, 3);

  // Testimonials display logic
  const displayTestimonials =
    testimonialsLoading || !testimonials?.length
      ? staticTestimonials
      : testimonials.slice(0, 3);
  const iconMap = {
    "fa-chart-line": FaChartLine,
    "fa-cloud": FaCloud,
    "fa-shield-alt": FaShieldAlt,
    "fa-robot": FaRobot,
    "fa-chart-pie": FaChartPie,
    "fa-users": FaUsers,
  };
  return (
    <>
      <BannerSeven />
      <AboutSec />
      <Cta />

      {/* Services Section */}
      <div id="service" className="rts-latest-service-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one center">
                <span className="pre">Our Latest Services</span>
                <h2 className="title">Service We Provide</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 mt--20">
            {staticServices.map((service) => {
              const IconComponent = iconMap[service.icon] || FaChartLine;

              return (
                <div key={service.id} className="col-lg-4 col-md-6">
                  <div className="service-single-main-wrapper-five h-100">
                    <div className="icon">
                      <IconComponent size={40} color="#09637e" />
                    </div>

                    <h4 className="title">{service.title}</h4>

                    <p className="disc">{service.excerpt}</p>

                    <a className="rts-btn btn-primary" href="#">
                      Learn More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <HowWeWork />

      {/* Projects/Case Studies Section */}
      <div
        id="project"
        className="rts-project-area rts-section-gap without-bg-image"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-five center">
                <span className="pre">Popular Projects</span>
                <h2 className="title">Our Completed Projects</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 mt--20">
            {displayCaseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="col-lg-4 col-md-6">
                <div className="single-project-area-main-wrapper-6">
                  {(caseStudy._embedded?.["wp:featuredmedia"] ||
                    caseStudy.image) && (
                    <a
                      href={`/case-studies/${caseStudy.slug}`}
                      className="thumbnail d-block overflow-hidden rounded-3"
                    >
                      <img
                        src={
                          caseStudy._embedded?.["wp:featuredmedia"]?.[0]
                            ?.source_url || caseStudy.image
                        }
                        alt={caseStudy.title?.rendered || caseStudy.title}
                        className="w-100"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    </a>
                  )}
                  <div className="inner">
                    <a href={`/case-studies/${caseStudy.slug}`}>
                      <h4 className="title">
                        {caseStudy.title?.rendered || caseStudy.title}
                      </h4>
                    </a>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          caseStudy.excerpt?.rendered ||
                          caseStudy.excerpt ||
                          caseStudy.content?.rendered?.substring(0, 100) +
                            "...",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TrustedClients />
      <Pricing />

      {/* Testimonials Section */}
      <div className="rts-testimonails-area-main rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-five center">
                <span className="pre">Testimonial</span>
                <h2 className="title">What They Say About Our Company</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 mt--20">
            {displayTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-md-4">
                <div className="testimonial-card p-4 bg-white rounded-3 shadow-sm h-100">
                  <i
                    className="fa-solid fa-quote-left mb-3"
                    style={{ fontSize: "32px", color: "#09637E" }}
                  ></i>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        testimonial.content?.rendered ||
                        testimonial.content ||
                        `<p>${testimonial.text || "Amazing experience working with this team! They delivered exceptional results and exceeded our expectations."}</p>`,
                    }}
                  />
                  <div className="mt-3">
                    <strong>
                      {testimonial.title?.rendered || testimonial.title}
                    </strong>
                    {testimonial.acf?.position && (
                      <div>
                        <small>{testimonial.acf.position}</small>
                      </div>
                    )}
                    {!testimonial.acf?.position && testimonial.position && (
                      <div>
                        <small>{testimonial.position}</small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Appointment />
      <Blog />
      <CtaBottom />
    </>
  );
};

export default Home;
