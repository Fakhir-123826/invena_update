// pages/Services.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaBrain,
  FaNetworkWired,
  FaPalette,
  FaStar,
  FaUsers,
  FaAward,
  FaLightbulb,
  FaRocket,
  FaHeadset,
  FaClock,
  FaCog,
  FaGem,
} from "react-icons/fa";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SERVICES = [
  {
    id: 1,
    title: "Digital Transformation Consulting",
    slug: "digital-transformation-consulting",
    icon: <FaChartLine />,
    excerpt: "End-to-end digital transformation strategy and execution to help businesses modernize operations and stay competitive.",
    description: "Comprehensive digital transformation services helping organizations leverage technology to improve processes and drive innovation.",
    features: ["Digital Strategy Development", "Process Automation", "Change Management", "Technology Roadmap", "ROI Analysis", "Legacy Modernization"],
    category: "consulting",
    price: "Custom Pricing",
    delivery: "3-6 months",
    popular: true,
  },
  {
    id: 2,
    title: "Cloud Services",
    slug: "cloud-services",
    icon: <FaCloud />,
    excerpt: "Cloud migration, architecture design, and DevOps automation for scalable and cost-effective infrastructure.",
    description: "Expert cloud services to design, migrate, and optimize infrastructure across AWS, Azure, and Google Cloud.",
    features: ["Cloud Migration", "DevOps Implementation", "Infrastructure as Code", "Cloud Security", "Cost Optimization", "24/7 Monitoring"],
    category: "infrastructure",
    price: "Starts at $5,000/mo",
    delivery: "2-4 months",
    popular: true,
  },
  {
    id: 3,
    title: "Cybersecurity",
    slug: "cybersecurity",
    icon: <FaShieldAlt />,
    excerpt: "Advanced security assessments, threat detection, and compliance solutions to protect your business.",
    description: "End-to-end security services to safeguard your organization against modern cyber threats.",
    features: ["Security Audits", "Penetration Testing", "Threat Monitoring", "Compliance Management", "Incident Response", "Security Training"],
    category: "security",
    price: "Custom Pricing",
    delivery: "1-3 months",
    popular: false,
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    icon: <FaRobot />,
    excerpt: "Intelligent automation and predictive analytics powered by cutting-edge AI and ML technologies.",
    description: "Harness the power of artificial intelligence to transform business operations and drive efficiency.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Engines", "Chatbots", "Process Automation"],
    category: "ai-analytics",
    price: "Starts at $10,000/mo",
    delivery: "4-8 months",
    popular: true,
  },
  {
    id: 5,
    title: "Data Analytics",
    slug: "data-analytics",
    icon: <FaDatabase />,
    excerpt: "Transform raw data into actionable insights with business intelligence and data visualization.",
    description: "Advanced analytics solutions to help you make data-driven decisions that drive business growth.",
    features: ["Data Warehousing", "Business Intelligence", "Data Visualization", "Real-time Analytics", "Predictive Modeling", "Data Governance"],
    category: "ai-analytics",
    price: "Starts at $8,000/mo",
    delivery: "2-5 months",
    popular: false,
  },
  {
    id: 6,
    title: "Custom Software Development",
    slug: "custom-software-development",
    icon: <FaCode />,
    excerpt: "Tailored software solutions designed to address your unique business challenges.",
    description: "Bespoke software solutions built specifically for your business needs.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development", "System Integration", "Legacy Modernization"],
    category: "development",
    price: "Starts at $15,000",
    delivery: "3-9 months",
    popular: true,
  },
  {
    id: 7,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: <FaMobileAlt />,
    excerpt: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    description: "Engaging mobile experiences that connect with your customers across all platforms.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter", "App Store Optimization", "Maintenance & Support"],
    category: "development",
    price: "Starts at $20,000",
    delivery: "3-8 months",
    popular: false,
  },
  {
    id: 8,
    title: "IT Consulting",
    slug: "it-consulting",
    icon: <FaBrain />,
    excerpt: "Strategic IT planning, architecture review, and technology roadmap development.",
    description: "Expert guidance to align technology investments with business goals.",
    features: ["IT Strategy", "Architecture Review", "Technology Assessment", "Vendor Selection", "Digital Strategy", "ROI Analysis"],
    category: "consulting",
    price: "Starts at $3,000/day",
    delivery: "1-3 months",
    popular: false,
  },
  {
    id: 9,
    title: "Network Infrastructure",
    slug: "network-infrastructure",
    icon: <FaNetworkWired />,
    excerpt: "Design and implementation of robust, scalable network infrastructure.",
    description: "Reliable and secure network foundation for your business operations.",
    features: ["Network Design", "SD-WAN Implementation", "Wireless Solutions", "Network Security", "Performance Monitoring", "Disaster Recovery"],
    category: "infrastructure",
    price: "Custom Pricing",
    delivery: "2-4 months",
    popular: false,
  },
  {
    id: 10,
    title: "UX/UI Design",
    slug: "ux-ui-design",
    icon: <FaPalette />,
    excerpt: "User-centered design solutions creating intuitive, engaging digital experiences.",
    description: "Beautiful, user-friendly interfaces that delight your customers.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing", "Design Systems"],
    category: "design",
    price: "Starts at $5,000",
    delivery: "1-3 months",
    popular: false,
  },
];

const CATEGORIES = [
  { id: "all", label: "All Services", icon: <FaGem /> },
  { id: "consulting", label: "Consulting", icon: <FaBrain /> },
  { id: "infrastructure", label: "Infrastructure", icon: <FaCloud /> },
  { id: "security", label: "Security", icon: <FaShieldAlt /> },
  { id: "ai-analytics", label: "AI & Analytics", icon: <FaRobot /> },
  { id: "development", label: "Development", icon: <FaCode /> },
  { id: "design", label: "Design", icon: <FaPalette /> },
];

const STATS = [
  { icon: <FaAward />, number: "10+", label: "Years Experience" },
  { icon: <FaUsers />, number: "500+", label: "Happy Clients" },
  { icon: <FaStar />, number: "98%", label: "Satisfaction Rate" },
  { icon: <FaHeadset />, number: "24/7", label: "Expert Support" },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`service-card${hovered ? " hovered" : ""}${service.popular ? " popular" : ""}`}
      style={{ animationDelay: `${index * 0.07}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {service.popular && <div className="popular-badge">🔥 Most Popular</div>}
      <div className="service-icon-wrap">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-excerpt">{service.excerpt}</p>
      <div className="service-features">
        {service.features.slice(0, 3).map((feature, idx) => (
          <span key={idx} className="feature-tag">
            <FaCheckCircle /> {feature}
          </span>
        ))}
        {service.features.length > 3 && (
          <span className="feature-more">+{service.features.length - 3} more</span>
        )}
      </div>
      <div className="service-meta">
        <div className="service-price">
          <span className="meta-label">Starting from</span>
          <span className="meta-value">{service.price}</span>
        </div>
        <div className="service-delivery">
          <span className="meta-label">Delivery</span>
          <span className="meta-value">{service.delivery}</span>
        </div>
      </div>
      <Link to={`/services/${service.slug}`} className="service-btn">
        Learn More
        <span className="btn-arrow">→</span>
      </Link>
    </div>
  );
};

const CategoryFilter = ({ active, onClick, label, count, icon }) => (
  <button
    className={`filter-chip${active ? " active" : ""}`}
    onClick={() => onClick()}
  >
    <span className="filter-icon">{icon}</span>
    <span className="filter-label">{label}</span>
    <span className="filter-count">{count}</span>
  </button>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const getCategoryCount = (catId) => {
    if (catId === "all") return SERVICES.length;
    return SERVICES.filter((s) => s.category === catId).length;
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setMobileFilterOpen(false);
  };

  return (
    <div className="services-page">
      <style>{`
        :root {
        
          --color-dark: #0a1628;
          --color-mid: #1e3a4a;
          --color-text: #2d4a58;
          --color-muted: #6b8fa0;
          --color-border: #d8edf2;
          --color-light: #f5fafc;
          --ease: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Hero Section */
        .services-hero {
          position: relative;
          min-height: 520px;
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 60%, var(--color-primary) 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 100px 0 80px;
        }
        .services-hero-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(122,178,178,.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(122,178,178,.08) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .services-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .services-hero-orb-1 { width:400px; height:400px; background:rgba(8,131,149,.3); top:-100px; right:-50px; }
        .services-hero-orb-2 { width:250px; height:250px; background:rgba(122,178,178,.2); bottom:-60px; left:10%; }
        .services-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          text-align: center;
        }
        .services-hero-badge {
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
          animation: fadeUp .6s var(--ease) both;
        }
        .services-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem,5vw,4.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          animation: fadeUp .6s .1s var(--ease) both;
        }
        .services-hero-title em {
          font-style: italic;
          font-family: 'Instrument Serif', serif;
          color: var(--color-blue);
        }
        .services-hero-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,.75);
          max-width: 560px;
          margin: 0 auto 40px;
          line-height: 1.7;
          animation: fadeUp .6s .2s var(--ease) both;
        }
        .services-hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeUp .6s .3s var(--ease) both;
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to { opacity:1; transform:translateY(0); }
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #fff;
          color: var(--color-primary);
          border-radius: 100px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all .3s var(--ease);
        }
        .btn-primary:hover {
          background: var(--color-sky);
          gap: 14px;
          transform: translateY(-2px);
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,.3);
          border-radius: 100px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all .3s var(--ease);
        }
        .btn-outline:hover {
          background: rgba(255,255,255,.1);
          border-color: #fff;
          gap: 14px;
        }

        /* Top Accent */
        .top-accent {
          height: 4px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-blue), var(--color-primary));
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Container */
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Stats Section */
        .stats-section {
          background: #fff;
          padding: 60px 0;
          border-bottom: 1px solid var(--color-border);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          text-align: center;
        }
        .stat-item {
          text-align: center;
        }
        .stat-icon {
          font-size: 32px;
          color: var(--color-primary);
          margin-bottom: 16px;
        }
        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: var(--color-dark);
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 14px;
          color: var(--color-muted);
          letter-spacing: .05em;
        }

        /* Filter Section */
        .filter-section {
          background: #fff;
          padding: 30px 0;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid var(--color-border);
        }
        .filter-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .filter-chips {
          display: flex;
          flex-wrap:wrap;
          gap: 12px;
          justify-content: center;
        }
        .filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--color-light);
          border: 1px solid var(--color-border);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          color: var(--color-muted);
          cursor: pointer;
          transition: all .25s var(--ease);
          max-width:200px;
        }
        .filter-chip:hover {
          background: var(--color-sky);
          border-color: var(--color-blue);
        }
        .filter-chip.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #fff;
        }
        .filter-icon {
          font-size: 14px;
        }
        .filter-count {
          background: rgba(0,0,0,.08);
          padding: 2px 8px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
        }
        .filter-chip.active .filter-count {
          background: rgba(255,255,255,.2);
          color: #fff;
        }
        .mobile-filter-btn {
          display: none;
          width: 100%;
          padding: 12px;
          background: var(--color-light);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          text-align: center;
        }
        .mobile-filter-dropdown {
          margin-top: 16px;
          padding: 16px;
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        /* Services Section */
        .services-section {
          padding: 60px 0 80px;
          background: var(--color-light);
        }
        .results-info {
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        .results-info p {
          color: var(--color-muted);
          font-size: 14px;
        }
        .results-info strong {
          color: var(--color-primary);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        /* Service Card */
        .service-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid var(--color-border);
          transition: all .4s var(--ease);
          position: relative;
          animation: fadeUp .5s var(--ease) both;
        }
        .service-card.hovered {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(8,99,126,.12);
          border-color: var(--color-primary);
        }
        .service-card.popular {
          border-color: var(--color-primary);
          box-shadow: 0 10px 30px rgba(8,131,149,.1);
        }
        .popular-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 14px;
          border-radius: 100px;
        }
        .service-icon-wrap {
          width: 56px;
          height: 56px;
          background: var(--color-sky);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: var(--color-primary);
          margin-bottom: 20px;
          transition: all .3s;
        }
        .service-card.hovered .service-icon-wrap {
          background: var(--color-primary);
          color: #fff;
          transform: scale(1.05);
        }
        .service-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 12px;
        }
        .service-excerpt {
          font-size: 14px;
          color: var(--color-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .feature-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          padding: 4px 12px;
          background: var(--color-light);
          border-radius: 100px;
          color: var(--color-text);
        }
        .feature-tag svg {
          font-size: 10px;
          color: var(--color-primary);
        }
        .feature-more {
          font-size: 12px;
          color: var(--color-muted);
          padding: 4px 8px;
        }
        .service-meta {
          display: flex;
          justify-content: space-between;
          padding-top: 16px;
          margin-top: 8px;
          border-top: 1px solid var(--color-border);
          margin-bottom: 20px;
        }
        .meta-label {
          display: block;
          font-size: 11px;
          color: var(--color-muted);
          margin-bottom: 4px;
        }
        .meta-value {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
        }
        .service-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          transition: all .2s;
        }
        .service-card.hovered .service-btn {
          gap: 12px;
        }
        .btn-arrow {
          transition: transform .2s;
        }
        .service-card.hovered .btn-arrow {
          transform: translateX(4px);
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          background: #fff;
          border-radius: 20px;
        }
        .empty-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: .5;
        }
        .empty-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 10px;
        }
        .clear-btn {
          margin-top: 20px;
          padding: 10px 24px;
          background: var(--color-primary);
          color: #fff;
          border: none;
          border-radius: 100px;
          font-weight: 600;
          cursor: pointer;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 100%);
          border-radius: 28px;
          padding: 56px 48px;
          text-align: center;
          margin-top: 60px;
        }
        .cta-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
        }
        .cta-title em {
          font-style: italic;
          color: var(--color-blue);
        }
        .cta-desc {
          font-size: 16px;
          color: rgba(255,255,255,.8);
          margin-bottom: 28px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #fff;
          color: var(--color-primary);
          border-radius: 100px;
          text-decoration: none;
          font-weight: 700;
          transition: all .3s;
        }
        .cta-btn:hover {
          background: var(--color-sky);
          gap: 14px;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .services-container { padding: 0 24px; }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { gap: 20px; }
        }
        @media (max-width: 768px) {
          .services-hero-content { padding: 0 20px; }
          .services-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .filter-chips { display: none; }
          .mobile-filter-btn { display: block; }
          .cta-section { padding: 40px 24px; }
          .cta-title { font-size: 1.5rem; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-grid" />
        <div className="services-hero-orb services-hero-orb-1" />
        <div className="services-hero-orb services-hero-orb-2" />
        <div className="services-hero-content">
          <div className="services-hero-badge">
            <FaLightbulb /> Premium Digital Services
          </div>
          <h1 className="services-hero-title">
            Transform Your Business <em>With Expert Solutions</em>
          </h1>
          <p className="services-hero-subtitle">
            Comprehensive technology solutions tailored to your unique business needs.
            From digital transformation to AI-powered innovations, we deliver excellence.
          </p>
          <div className="services-hero-buttons">
            <Link to="/contact" className="btn-primary">
              Get Started <FaArrowRight />
            </Link>
            <Link to="/portfolio" className="btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Top Accent */}
      <div className="top-accent" />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="services-container">
          <div className="stats-grid">
            {STATS.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="services-container">
          <div className="filter-wrapper">
            <div className="filter-chips">
              {CATEGORIES.map((cat) => (
                <CategoryFilter
                  key={cat.id}
                  active={activeCategory === cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  label={cat.label}
                  icon={cat.icon}
                  count={getCategoryCount(cat.id)}
                />
              ))}
            </div>
            <button className="mobile-filter-btn" onClick={() => setMobileFilterOpen(!mobileFilterOpen)}>
              <FaCog style={{ marginRight: '8px' }} />
              Filter Services
              {activeCategory !== "all" && `: ${CATEGORIES.find(c => c.id === activeCategory)?.label}`}
            </button>
          </div>
          {mobileFilterOpen && (
            <div className="mobile-filter-dropdown">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`filter-chip${activeCategory === cat.id ? " active" : ""}`}
                  style={{ fontSize: '13px', padding: '8px 16px' }}
                >
                  <span className="filter-icon">{cat.icon}</span>
                  {cat.label} ({getCategoryCount(cat.id)})
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="results-info">
            <p>
              Showing <strong>{filteredServices.length}</strong> of{" "}
              <strong>{SERVICES.length}</strong> services
            </p>
          </div>

          {filteredServices.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3 className="empty-title">No services found</h3>
              <p style={{ color: 'var(--color-muted)' }}>Try adjusting your filter criteria</p>
              <button className="clear-btn" onClick={() => setActiveCategory("all")}>
                Show All Services
              </button>
            </div>
          ) : (
            <div className="services-grid">
              {filteredServices.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="cta-title">
              Need a <em>Custom Solution?</em>
            </h2>
            <p className="cta-desc">
              Our team can create a tailored solution to meet your specific business requirements and goals.
            </p>
            <Link to="/contact" className="cta-btn">
              Contact Our Experts <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;