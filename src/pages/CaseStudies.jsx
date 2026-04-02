// pages/CaseStudies.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChartLine, FaUsers, FaRocket, FaShieldAlt, FaCloud, FaBrain, FaMobile, FaTrophy, FaQuoteLeft, FaStar } from "react-icons/fa";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const CASE_STUDIES = [
  {
    id: 1,
    title: "Global Bank's Digital Transformation Journey",
    slug: "global-bank-digital-transformation",
    client: "First National Bank",
    industry: "Banking & Finance",
    challenge: "Legacy systems causing slow processing times and poor customer experience. Needed to modernize core banking infrastructure while maintaining 24/7 operations.",
    solution: "Implemented cloud-native microservices architecture with AI-powered customer service bots. Migrated 50+ legacy applications to AWS with zero downtime.",
    results: [
      "85% reduction in transaction processing time",
      "40% increase in customer satisfaction scores",
      "$12M annual operational cost savings",
      "99.99% system uptime achieved"
    ],
    technologies: ["AWS", "Kubernetes", "React", "Node.js", "AI/ML"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    testimonial: {
      quote: "Nex7 transformed our digital infrastructure completely. Their expertise and dedication resulted in a seamless migration that exceeded our expectations.",
      author: "Sarah Johnson",
      title: "CTO, First National Bank"
    },
    metrics: { 
      icon: <FaChartLine />, 
      value: "85%", 
      label: "Faster Processing" 
    },
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Healthcare Provider's Telemedicine Platform",
    slug: "healthcare-telemedicine-platform",
    client: "MediCare Health Systems",
    industry: "Healthcare",
    challenge: "Need for secure, scalable telemedicine solution during pandemic. Required HIPAA compliance and seamless integration with existing EHR systems.",
    solution: "Developed comprehensive telemedicine platform with video consultations, prescription management, and patient portal. Implemented end-to-end encryption.",
    results: [
      "200% increase in patient consultations",
      "60% reduction in no-show rates",
      "95% patient satisfaction rating",
      "Seamless integration with 5+ EHR systems"
    ],
    technologies: ["React Native", "WebRTC", "AWS", "FHIR", "Blockchain"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    testimonial: {
      quote: "The telemedicine platform Nex7 built for us has revolutionized patient care. It's secure, intuitive, and our patients love it.",
      author: "Dr. Michael Chen",
      title: "Chief Medical Officer, MediCare"
    },
    metrics: { 
      icon: <FaUsers />, 
      value: "200%", 
      label: "More Patients" 
    },
    date: "2024-02-10"
  },
  {
    id: 3,
    title: "E-Commerce Giant's AI Recommendation Engine",
    slug: "ecommerce-ai-recommendation-engine",
    client: "ShopWave",
    industry: "Retail & E-Commerce",
    challenge: "Low conversion rates and high cart abandonment. Needed personalized shopping experience to compete with major players.",
    solution: "Built real-time AI recommendation engine analyzing user behavior, purchase history, and browsing patterns. Implemented A/B testing framework.",
    results: [
      "156% increase in conversion rate",
      "45% reduction in cart abandonment",
      "$8.5M additional revenue in first year",
      "3x higher customer engagement"
    ],
    technologies: ["Python", "TensorFlow", "Redis", "Vue.js", "Elasticsearch"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    testimonial: {
      quote: "The AI recommendation engine has been a game-changer. Our sales have skyrocketed and customers keep coming back for more.",
      author: "Emily Rodriguez",
      title: "CEO, ShopWave"
    },
    metrics: { 
      icon: <FaRocket />, 
      value: "156%", 
      label: "Higher Conversions" 
    },
    date: "2024-01-28"
  },
  {
    id: 4,
    title: "Manufacturing Company's IoT Predictive Maintenance",
    slug: "manufacturing-iot-predictive-maintenance",
    client: "IndustrialTech Manufacturing",
    industry: "Manufacturing",
    challenge: "Unexpected equipment failures causing production delays and high maintenance costs. No visibility into machine health.",
    solution: "Deployed IoT sensors across 500+ machines with real-time monitoring dashboard. Implemented predictive analytics for failure prevention.",
    results: [
      "75% reduction in unplanned downtime",
      "40% decrease in maintenance costs",
      "$6.2M annual savings",
      "30% increase in equipment lifespan"
    ],
    technologies: ["IoT", "Azure", "Power BI", "MQTT", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
    testimonial: {
      quote: "Predictive maintenance has transformed our operations. We're saving millions and our production line has never been more reliable.",
      author: "James Wilson",
      title: "Operations Director, IndustrialTech"
    },
    metrics: { 
      icon: <FaShieldAlt />, 
      value: "75%", 
      label: "Less Downtime" 
    },
    date: "2024-02-20"
  },
  {
    id: 5,
    title: "Logistics Company's Supply Chain Optimization",
    slug: "logistics-supply-chain-optimization",
    client: "GlobalLogix",
    industry: "Logistics & Supply Chain",
    challenge: "Inefficient route planning and inventory management leading to delayed deliveries and increased fuel costs.",
    solution: "Developed AI-powered route optimization system with real-time tracking and dynamic rerouting. Integrated with existing ERP systems.",
    results: [
      "35% reduction in fuel costs",
      "50% faster delivery times",
      "98% on-time delivery rate",
      "25% increase in fleet utilization"
    ],
    technologies: ["GraphQL", "MongoDB", "Google Maps API", "Kafka", "Docker"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    testimonial: {
      quote: "Our supply chain has never been more efficient. Nex7's solution saved us millions and improved customer satisfaction dramatically.",
      author: "Robert Thompson",
      title: "VP of Operations, GlobalLogix"
    },
    metrics: { 
      icon: <FaCloud />, 
      value: "35%", 
      label: "Less Fuel" 
    },
    date: "2024-01-05"
  },
  {
    id: 6,
    title: "EdTech Platform's Personalized Learning",
    slug: "edtech-personalized-learning",
    client: "LearnSmart",
    industry: "Education Technology",
    challenge: "One-size-fits-all approach leading to low student engagement and high dropout rates.",
    solution: "Built adaptive learning platform with personalized content delivery, gamification, and real-time progress tracking.",
    results: [
      "89% increase in course completion",
      "3x higher student engagement",
      "120% revenue growth",
      "45% improvement in test scores"
    ],
    technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    testimonial: {
      quote: "Personalized learning has revolutionized how our students learn. Engagement and outcomes have never been better.",
      author: "Dr. Priya Patel",
      title: "Founder, LearnSmart"
    },
    metrics: { 
      icon: <FaBrain />, 
      value: "89%", 
      label: "More Completions" 
    },
    date: "2024-02-28"
  },
  {
    id: 7,
    title: "Real Estate Platform with Virtual Tours",
    slug: "real-estate-virtual-tours",
    client: "PropView Real Estate",
    industry: "Real Estate",
    challenge: "Traditional property viewing process inefficient and time-consuming. Needed immersive digital experience.",
    solution: "Created 3D virtual tour platform with 360° views, property comparison tools, and AI-powered property recommendations.",
    results: [
      "150% increase in qualified leads",
      "60% reduction in physical viewings",
      "40% faster sales cycle",
      "95% user satisfaction"
    ],
    technologies: ["Three.js", "WebGL", "React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    testimonial: {
      quote: "Virtual tours have transformed how we sell properties. Buyers love the immersive experience and our sales have skyrocketed.",
      author: "Lisa Martinez",
      title: "CEO, PropView"
    },
    metrics: { 
      icon: <FaMobile />, 
      value: "150%", 
      label: "More Leads" 
    },
    date: "2024-01-18"
  },
  {
    id: 8,
    title: "FinTech Startup's Mobile Banking App",
    slug: "fintech-mobile-banking-app",
    client: "NeoBank",
    industry: "FinTech",
    challenge: "Need to launch feature-rich mobile banking app quickly with enterprise-grade security.",
    solution: "Developed cross-platform mobile app with biometric authentication, real-time notifications, and AI-powered financial insights.",
    results: [
      "500K+ downloads in first 3 months",
      "4.8/5 app store rating",
      "85% monthly active users",
      "$2M+ transaction volume"
    ],
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    testimonial: {
      quote: "Nex7 delivered a world-class banking app in record time. Our users love it and we're growing faster than ever.",
      author: "Alex Thompson",
      title: "CTO, NeoBank"
    },
    metrics: { 
      icon: <FaTrophy />, 
      value: "500K+", 
      label: "Downloads" 
    },
    date: "2024-03-01"
  }
];

const INDUSTRIES = [
  "all",
  "Banking & Finance",
  "Healthcare",
  "Retail & E-Commerce",
  "Manufacturing",
  "Logistics & Supply Chain",
  "Education Technology",
  "Real Estate",
  "FinTech"
];

const PER_PAGE = 6;

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

// Case Study Card
const CaseStudyCard = ({ study, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="case-card"
      style={{ animationDelay: `${index * 0.07}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/case-studies/${study.slug}`} className="case-img-wrap">
        <img src={study.image} alt={study.title} loading="lazy" />
        <div className="case-overlay">
          <span className="case-metric-icon">{study.metrics.icon}</span>
          <span className="case-metric-value">{study.metrics.value}</span>
          <span className="case-metric-label">{study.metrics.label}</span>
        </div>
      </Link>
      <div className="case-body">
        <div className="case-industry-badge">{study.industry}</div>
        <Link to={`/case-studies/${study.slug}`}>
          <h3 className="case-title">{study.title}</h3>
        </Link>
        <p className="case-client">{study.client}</p>
        <p className="case-excerpt">{study.challenge.substring(0, 100)}…</p>
        <div className="case-tech-stack">
          {study.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
          {study.technologies.length > 3 && (
            <span className="tech-tag">+{study.technologies.length - 3}</span>
          )}
        </div>
        <Link to={`/case-studies/${study.slug}`} className="case-read-btn">
          View Case Study
          <span className="case-arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

// Featured Case Study (Hero Section)
const FeaturedCaseStudy = ({ study }) => {
  return (
    <div className="featured-case">
      <div className="featured-case-grid">
        <div className="featured-case-content">
          <span className="featured-badge">✦ Featured Success Story</span>
          <h2 className="featured-title">{study.title}</h2>
          <p className="featured-client">{study.client} • {study.industry}</p>
          <p className="featured-desc">{study.solution.substring(0, 180)}…</p>
          <div className="featured-results">
            {study.results.slice(0, 2).map((result, i) => (
              <div key={i} className="featured-result-item">
                <FaChartLine className="result-icon" />
                <span>{result}</span>
              </div>
            ))}
          </div>
          <Link to={`/case-studies/${study.slug}`} className="featured-cta">
            Read Full Story <FaArrowRight />
          </Link>
        </div>
        <div className="featured-case-image">
          <img src={study.image} alt={study.title} />
          <div className="featured-testimonial">
            <FaQuoteLeft className="testimonial-quote-icon" />
            <p>"{study.testimonial.quote.substring(0, 120)}…"</p>
            <div className="testimonial-author">
              <strong>{study.testimonial.author}</strong>
              <span>{study.testimonial.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange, totalItems }) => {
  if (totalPages <= 1) return null;

  const start = (currentPage - 1) * PER_PAGE + 1;
  const end = Math.min(currentPage * PER_PAGE, totalItems);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      totalPages > 7 &&
      i !== 1 &&
      i !== totalPages &&
      Math.abs(i - currentPage) > 2
    ) {
      if (i === 2 || i === totalPages - 1) pages.push("...");
      continue;
    }
    pages.push(i);
  }

  return (
    <div className="pagination-wrap">
      <button
        className="pag-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <button key={`ellipsis-${i}`} className="pag-btn pag-num" disabled>
            …
          </button>
        ) : (
          <button
            key={p}
            className={`pag-btn pag-num${currentPage === p ? " active" : ""}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        )
      )}
      <button
        className="pag-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
      <div className="pag-info">
        {start}–{end} of {totalItems}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndustry, setActiveIndustry] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering
  const filteredStudies = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return CASE_STUDIES.filter((s) => {
      const matchIndustry = activeIndustry === "all" || s.industry === activeIndustry;
      const matchSearch = !term ||
        s.title.toLowerCase().includes(term) ||
        s.client.toLowerCase().includes(term) ||
        s.industry.toLowerCase().includes(term) ||
        s.solution.toLowerCase().includes(term);
      return matchIndustry && matchSearch;
    });
  }, [searchTerm, activeIndustry]);

  // Pagination
  const totalPages = Math.ceil(filteredStudies.length / PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, Math.max(1, totalPages));
  const pagedStudies = filteredStudies.slice(
    (safeCurrentPage - 1) * PER_PAGE,
    safeCurrentPage * PER_PAGE
  );

  // Get featured study (first one)
  const featuredStudy = CASE_STUDIES[0];

  const handleIndustryChange = (industry) => {
    setActiveIndustry(industry);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setActiveIndustry("all");
    setCurrentPage(1);
  };

  // Aggregate stats
  const totalResults = CASE_STUDIES.reduce((acc, s) => acc + parseFloat(s.results[0]) || 0, 0);
  const totalSavings = "$" + (12 + 6.2 + 8.5).toFixed(1) + "M+";

  return (
    <>
      <style>{`
        :root {
          --color-primary:   #088395;
          --color-secondary: #09637e;
          --color-blue:      #7ab2b2;
          --color-sky:       #ebf4f6;
          --color-dark:      #0a1628;
          --color-mid:       #1e3a4a;
          --color-text:      #2d4a58;
          --color-muted:     #6b8fa0;
          --color-border:    #d8edf2;
          --color-light:     #f5fafc;
          --ease:            cubic-bezier(0.4,0,0.2,1);
        }

        /* Hero Section */
        .case-hero {
          position: relative;
          min-height: 550px;
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 60%, var(--color-primary) 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 100px 0 80px;
        }
        .case-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(122,178,178,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122,178,178,.08) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .case-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .case-hero-orb-1 { width:400px; height:400px; background:rgba(8,131,149,.3); top:-100px; right:-50px; }
        .case-hero-orb-2 { width:250px; height:250px; background:rgba(122,178,178,.2); bottom:-60px; left:10%; }
        .case-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          text-align: center;
        }
        .case-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.2);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 100px;
          color: rgba(255,255,255,.9);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: .05em;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: caseFadeUp .6s var(--ease) both;
        }
        .case-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem,5vw,4.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          animation: caseFadeUp .6s .1s var(--ease) both;
        }
        .case-hero-title em {
          font-style: italic;
          font-family: 'Instrument Serif', serif;
          color: var(--color-blue);
        }
        .case-hero-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,.75);
          max-width: 560px;
          margin: 0 auto 40px;
          line-height: 1.7;
          animation: caseFadeUp .6s .2s var(--ease) both;
        }
        .case-hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          animation: caseFadeUp .6s .3s var(--ease) both;
          flex-wrap: wrap;
        }
        .case-hero-stat { text-align: center; color: #fff; }
        .case-hero-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-blue);
          line-height: 1;
        }
        .case-hero-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,.6);
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-top: 4px;
        }
        .case-hero-divider {
          width: 1px; height: 50px;
          background: rgba(255,255,255,.2);
          margin: auto 0;
        }
        @keyframes caseFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Top Accent */
        .case-top-accent {
          height: 4px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-blue), var(--color-primary));
          background-size: 200% 100%;
          animation: caseShimmer 3s infinite linear;
        }
        @keyframes caseShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Container */
        .case-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Search & Filter */
        .case-search-section {
          background: #fff;
          padding: 50px 0 30px;
        }
        .case-search-wrap {
          position: relative;
          max-width: 680px;
          margin: 0 auto 32px;
        }
        .case-search-input {
          width: 100%;
          padding: 18px 60px 18px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          border: 2px solid var(--color-border);
          border-radius: 16px;
          outline: none;
          background: var(--color-sky);
          color: var(--color-text);
          transition: all .3s var(--ease);
        }
        .case-search-input:focus {
          border-color: var(--color-primary);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(8,131,149,.1);
        }
        .case-search-icon {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          pointer-events: none;
        }
        .case-filter-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          padding-bottom: 40px;
        }
        .case-filter-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 9px 22px;
          border-radius: 100px;
          border: 1.5px solid var(--color-border);
          background: transparent;
          color: var(--color-muted);
          cursor: pointer;
          transition: all .25s var(--ease);
          letter-spacing: .02em;
          max-width: 200px;
        }
        .case-filter-btn:hover,
        .case-filter-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #fff;
          box-shadow: 0 4px 16px rgba(8,131,149,.3);
        }

        /* Featured Case Study */
        .featured-case {
          padding: 60px 0 40px;
          background: var(--color-light);
        }
        .featured-case-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: 0 20px 40px rgba(0,0,0,.05);
        }
        .featured-case-content {
          padding: 48px;
        }
        .featured-badge {
          display: inline-block;
          background: var(--color-sky);
          color: var(--color-primary);
          font-size: 12px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .featured-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .featured-client {
          font-size: 14px;
          color: var(--color-primary);
          font-weight: 600;
          margin-bottom: 16px;
        }
        .featured-desc {
          color: var(--color-muted);
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .featured-results {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }
        .featured-result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--color-text);
        }
        .result-icon {
          color: var(--color-primary);
          font-size: 18px;
        }
        .featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          background: var(--color-primary);
          color: #fff;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all .3s var(--ease);
        }
        .featured-cta:hover {
          background: var(--color-secondary);
          gap: 14px;
          transform: translateY(-2px);
        }
        .featured-case-image {
          position: relative;
          height: 100%;
          min-height: 400px;
        }
        .featured-case-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .featured-testimonial {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          background: rgba(10,22,40,.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          color: #fff;
        }
        .testimonial-quote-icon {
          font-size: 24px;
          color: var(--color-blue);
          margin-bottom: 12px;
          opacity: .7;
        }
        .featured-testimonial p {
          font-size: 13px;
          line-height: 1.6;
          margin-bottom: 12px;
          font-style: italic;
        }
        .testimonial-author strong {
          display: block;
          font-size: 13px;
          margin-bottom: 4px;
        }
        .testimonial-author span {
          font-size: 11px;
          opacity: .7;
        }

        /* Case Studies Grid */
        .case-grid-section {
          padding: 60px 0 80px;
        }
        .case-results-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        .case-results-count {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          color: var(--color-muted);
        }
        .case-results-count strong {
          color: var(--color-primary);
          font-size: 18px;
        }
        .case-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 60px;
        }

        /* Case Card */
        .case-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          transition: all .4s var(--ease);
          animation: caseFadeUp .5s var(--ease) both;
        }
        .case-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(8,99,126,.12);
          border-color: var(--color-blue);
        }
        .case-img-wrap {
          position: relative;
          overflow: hidden;
          height: 220px;
          display: block;
          text-decoration: none;
        }
        .case-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s var(--ease);
        }
        .case-card:hover .case-img-wrap img {
          transform: scale(1.08);
        }
        .case-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,.8), transparent);
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #fff;
        }
        .case-metric-icon {
          font-size: 20px;
        }
        .case-metric-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
        }
        .case-metric-label {
          font-size: 11px;
          opacity: .8;
        }
        .case-body {
          padding: 20px;
        }
        .case-industry-badge {
          display: inline-block;
          background: var(--color-sky);
          color: var(--color-primary);
          font-size: 10px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: .05em;
        }
        .case-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-dark);
          line-height: 1.4;
          margin-bottom: 8px;
          text-decoration: none;
          transition: color .2s;
        }
        .case-card:hover .case-title {
          color: var(--color-primary);
        }
        .case-client {
          font-size: 12px;
          color: var(--color-muted);
          margin-bottom: 12px;
        }
        .case-excerpt {
          font-size: 13px;
          color: var(--color-muted);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .case-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .tech-tag {
          background: var(--color-light);
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 500;
          color: var(--color-mid);
        }
        .case-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          transition: gap .2s;
        }
        .case-card:hover .case-read-btn {
          gap: 10px;
        }
        .case-arrow {
          transition: transform .2s;
        }
        .case-card:hover .case-arrow {
          transform: translateX(3px);
        }

        /* Empty State */
        .case-empty {
          text-align: center;
          padding: 80px 20px;
          grid-column: 1/-1;
        }
        .case-empty-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: .35;
        }
        .case-empty-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 10px;
        }
        .case-clear-btn {
          padding: 12px 28px;
          background: var(--color-primary);
          color: #fff;
          border: none;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all .3s;
          margin-top: 20px;
        }
        .case-clear-btn:hover {
          background: var(--color-secondary);
          transform: translateY(-2px);
        }

        /* Pagination */
        .pagination-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0;
          margin-top: 50px;
        }
        .pag-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 12px 22px;
          border: 1.5px solid var(--color-border);
          background: #fff;
          color: var(--color-muted);
          cursor: pointer;
          transition: all .25s var(--ease);
          margin-left: -1px;
        }
        .pag-btn:first-child { border-radius: 12px 0 0 12px; margin-left: 0; }
        .pag-btn:last-of-type { border-radius: 0 12px 12px 0; }
        .pag-btn.pag-num {
          padding: 12px 18px;
          min-width: 48px;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
        }
        .pag-btn:hover:not(.active):not(:disabled) {
          background: var(--color-sky);
          color: var(--color-primary);
          border-color: var(--color-primary);
          z-index: 1;
        }
        .pag-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #fff;
          z-index: 1;
        }
        .pag-btn:disabled { opacity: .4; cursor: not-allowed; }
        .pag-info {
          font-size: 13px;
          color: var(--color-muted);
          margin-left: 20px;
          padding-left: 20px;
          border-left: 1px solid var(--color-border);
          white-space: nowrap;
        }

        /* CTA Section */
        .case-cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 100%);
          text-align: center;
        }
        .case-cta-title {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
        }
        .case-cta-title em {
          font-style: italic;
          color: var(--color-blue);
        }
        .case-cta-desc {
          color: rgba(255,255,255,.7);
          max-width: 500px;
          margin: 0 auto 32px;
        }
        .case-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 36px;
          background: #fff;
          color: var(--color-primary);
          border-radius: 100px;
          text-decoration: none;
          font-weight: 700;
          transition: all .3s;
        }
        .case-cta-btn:hover {
          background: var(--color-blue);
          color: var(--color-dark);
          gap: 16px;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .case-container { padding: 0 24px; }
          .featured-case-grid { grid-template-columns: 1fr; }
          .case-grid { grid-template-columns: repeat(2, 1fr); }
          .featured-case-content { padding: 32px; }
        }
        @media (max-width: 768px) {
          .case-grid { grid-template-columns: 1fr; }
          .case-hero-stats { gap: 20px; }
          .case-hero-divider { display: none; }
          .pagination-wrap { gap: 4px; }
          .pag-btn { padding: 10px 14px; font-size: 13px; }
          .pag-info { display: none; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="case-hero">
        <div className="case-hero-grid" />
        <div className="case-hero-orb case-hero-orb-1" />
        <div className="case-hero-orb case-hero-orb-2" />
        <div className="case-hero-content">
          <div className="case-hero-badge">✦ Success Stories</div>
          <h1 className="case-hero-title">
            Case <em>Studies</em>
          </h1>
          <p className="case-hero-subtitle">
            Real-world success stories showcasing how we've helped businesses 
            transform their operations and achieve remarkable results.
          </p>
          <div className="case-hero-stats">
            <div className="case-hero-stat">
              <div className="case-hero-stat-num">{CASE_STUDIES.length}+</div>
              <div className="case-hero-stat-label">Projects</div>
            </div>
            <div className="case-hero-divider" />
            <div className="case-hero-stat">
              <div className="case-hero-stat-num">98%</div>
              <div className="case-hero-stat-label">Success Rate</div>
            </div>
            <div className="case-hero-divider" />
            <div className="case-hero-stat">
              <div className="case-hero-stat-num">{totalSavings}</div>
              <div className="case-hero-stat-label">Client Savings</div>
            </div>
            <div className="case-hero-divider" />
            <div className="case-hero-stat">
              <div className="case-hero-stat-num">50+</div>
              <div className="case-hero-stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Accent */}
      <div className="case-top-accent" />

      {/* Search & Filter */}
      <section className="case-search-section">
        <div className="case-container">
          <div className="case-search-wrap">
            <input
              className="case-search-input"
              type="text"
              placeholder="Search by client, industry, or technology..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <span className="case-search-icon">🔍</span>
          </div>
          <div className="case-filter-row">
            {INDUSTRIES.map((industry) => (
              <button
                key={industry}
                className={`case-filter-btn${activeIndustry === industry ? " active" : ""}`}
                onClick={() => handleIndustryChange(industry)}
              >
                {industry === "all" ? "All Industries" : industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="featured-case">
        <div className="case-container">
          <FeaturedCaseStudy study={featuredStudy} />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="case-grid-section">
        <div className="case-container">
          <div className="case-results-bar">
            <div className="case-results-count">
              <strong>{filteredStudies.length}</strong> case studies found
            </div>
            <div className="case-sort-label">Sorted by latest ↓</div>
          </div>

          {pagedStudies.length === 0 ? (
            <div className="case-grid">
              <div className="case-empty">
                <div className="case-empty-icon">📁</div>
                <div className="case-empty-title">No case studies found</div>
                <p className="case-empty-desc">
                  Try adjusting your search or filter criteria.
                </p>
                <button className="case-clear-btn" onClick={handleClearFilters}>
                  Clear Filters
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="case-grid">
                {pagedStudies.map((study, i) => (
                  <CaseStudyCard key={study.id} study={study} index={i} />
                ))}
              </div>
              <Pagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                totalItems={filteredStudies.length}
                onPageChange={(p) => {
                  setCurrentPage(p);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-cta-section">
        <div className="case-container">
          <h2 className="case-cta-title">
            Ready to write your own <em>success story?</em>
          </h2>
          <p className="case-cta-desc">
            Let's discuss how Nex7 can help transform your business and deliver measurable results.
          </p>
          <Link to="/contact" className="case-cta-btn">
            Start Your Project <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;