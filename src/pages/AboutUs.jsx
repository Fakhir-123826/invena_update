// pages/AboutUs.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { FaPhoneVolume, FaCheckCircle, FaAward, FaUsers, FaChartLine, FaRocket, FaHandshake, FaLightbulb, FaTrophy, FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutUs = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
const leadershipTeam = [
  { 
    name: "Sarah Johnson", 
    title: "CEO & Founder", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500", 
    bio: "20+ years in digital transformation, former CTO at Fortune 500 company. Visionary leader driving innovation and growth across global markets." 
  },
  { 
    name: "Michael Chen", 
    title: "CTO", 
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500", 
    bio: "Cloud architecture expert with 15+ years experience. Led successful migrations for 50+ enterprise clients achieving 99.99% uptime." 
  },
  { 
    name: "David Williams", 
    title: "Head of Cybersecurity", 
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500", 
    bio: "Former security consultant for government agencies. Specializes in threat detection, compliance, and risk management frameworks." 
  },
  { 
    name: "Emily Rodriguez", 
    title: "Director of AI Solutions", 
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500", 
    bio: "AI/ML specialist with PhD in Computer Science. Pioneered 15+ AI implementations generating $50M+ in business value." 
  },
  { 
    name: "James Wilson", 
    title: "VP of Sales", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500", 
    bio: "Strategic business development leader with 18+ years in tech sales. Built high-performance teams across North America and Europe." 
  },
  { 
    name: "Dr. Priya Patel", 
    title: "Head of Data Science", 
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500", 
    bio: "Data science pioneer with 12+ years experience. Published author and frequent speaker at international AI conferences." 
  }
];

  const certifications = [
    { name: "ISO 27001 Certified", icon: <FaAward />, year: "2020", description: "Information Security Management" },
    { name: "AWS Advanced Partner", icon: <FaAward />, year: "2018", description: "Premier cloud services provider" },
    { name: "Microsoft Gold Partner", icon: <FaAward />, year: "2019", description: "Top-tier Microsoft solutions" },
    { name: "Google Cloud Partner", icon: <FaAward />, year: "2021", description: "Certified cloud specialists" },
    { name: "CMMI Level 5", icon: <FaTrophy />, year: "2022", description: "Highest process maturity rating" },
    { name: "Great Place to Work", icon: <FaTrophy />, year: "2023", description: "Employee satisfaction certified" }
  ];

  const values = [
    { 
      title: "Innovation First", 
      icon: <FaLightbulb />,
      description: "We embrace cutting-edge technology to solve complex challenges. Our dedicated R&D team constantly explores emerging technologies to deliver future-proof solutions that keep our clients ahead of the curve." 
    },
    { 
      title: "Client Success", 
      icon: <FaHandshake />,
      description: "Your success is our success - we measure our performance by your results. We partner closely with clients to understand their unique challenges and deliver measurable business outcomes that drive growth and efficiency." 
    },
    { 
      title: "Integrity", 
      icon: <FaCheckCircle />,
      description: "Transparent, honest, and ethical in all our dealings. We believe in building lasting relationships through trust, accountability, and unwavering commitment to doing what's right for our clients and team." 
    },
    { 
      title: "Excellence", 
      icon: <FaTrophy />,
      description: "Delivering high-quality solutions with attention to detail. Our commitment to excellence drives us to exceed expectations through rigorous quality assurance, continuous improvement, and passion for perfection." 
    },
    { 
      title: "Agility", 
      icon: <FaRocket />,
      description: "Adapt quickly to changing market needs. Our agile methodology enables rapid response to evolving requirements while maintaining quality and consistency throughout the development lifecycle." 
    },
    { 
      title: "Collaboration", 
      icon: <FaUsers />,
      description: "Together we achieve more. We foster a culture of open communication, knowledge sharing, and cross-functional teamwork that amplifies our collective expertise and delivers superior results." 
    }
  ];

  const stats = [
    { number: "2015", label: "Year Founded" },
    { number: "200+", label: "Expert Professionals" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Countries Served" },
    { number: "500+", label: "Projects Delivered" }
  ];

  const testimonials = [
    { name: "Robert Thompson", company: "Global Finance Inc.", text: "Nex7 transformed our digital infrastructure completely. Their expertise and dedication are unmatched.", rating: 5 },
    { name: "Jennifer Lee", company: "HealthTech Solutions", text: "Working with Nex7 has been a game-changer for our business. Highly recommended!", rating: 5 },
    { name: "Mark Anderson", company: "Retail Dynamics", text: "Professional, innovative, and results-driven. The best tech partner we've ever worked with.", rating: 5 }
  ];

useEffect(() => {
  let splitTextInstance = null; // Store SplitText instance for cleanup
  
  const ctx = gsap.context(() => {
    // Title animation with SplitText
    if (titleRef.current) {
      splitTextInstance = new SplitText(titleRef.current, { 
        type: "chars", 
        linesClass: "split-line" 
      });
      
      gsap.set(splitTextInstance.chars, { opacity: 0, y: 50 });
      gsap.to(splitTextInstance.chars, {
        scrollTrigger: { 
          trigger: titleRef.current, 
          start: "top 85%" 
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: "back.out(1.7)",
        onComplete: () => {
          // Optional: Remove SplitText wrapper after animation
          // splitTextInstance.revert();
        }
      });
    }

    // Value cards
    gsap.set(".value-card", { opacity: 0, y: 50 });
    gsap.to(".value-card", {
      scrollTrigger: { trigger: ".values-section", start: "top 80%" },
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      clearProps: "all"
    });

    // Team cards
    gsap.set(".team-card", { opacity: 0, scale: 0.9 });
    gsap.to(".team-card", {
      scrollTrigger: { trigger: ".team-section", start: "top 80%" },
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      clearProps: "all"
    });

    // Stat items
    gsap.set(".stat-item", { opacity: 0, y: 30 });
    gsap.to(".stat-item", {
      scrollTrigger: { trigger: ".stats-section", start: "top 80%" },
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      clearProps: "all"
    });

    // Certification cards
    gsap.set(".cert-card", { opacity: 0, y: 30 });
    gsap.to(".cert-card", {
      scrollTrigger: { trigger: ".certs-grid", start: "top 80%" },
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      clearProps: "all"
    });

    // Testimonial cards
    gsap.set(".testimonial-card", { opacity: 0, y: 30 });
    gsap.to(".testimonial-card", {
      scrollTrigger: { trigger: ".testimonials-grid", start: "top 80%" },
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      clearProps: "all"
    });
  }, containerRef);

  return () => {
    // Cleanup: Revert SplitText to original DOM
    if (splitTextInstance) {
      splitTextInstance.revert();
    }
    ctx.revert();
  };
}, []);

  return (
    <div ref={containerRef}>
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

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Grid System */
        .about-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }
        .col-span-6 { grid-column: span 6; }
        .col-span-4 { grid-column: span 4; }
        .col-span-3 { grid-column: span 3; }
        .col-span-2 { grid-column: span 2; }
        .col-span-12 { grid-column: span 12; }

        /* About Hero */
        .about-hero {
          position: relative;
          min-height: 500px;
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 60%, var(--color-primary) 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 100px 0 80px;
        }
        .about-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(122,178,178,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122,178,178,.08) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .about-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .about-hero-orb-1 { width:400px; height:400px; background:rgba(8,131,149,.3); top:-100px; right:-50px; }
        .about-hero-orb-2 { width:250px; height:250px; background:rgba(122,178,178,.2); bottom:-60px; left:10%; }
        .about-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          text-align: center;
        }
        .about-hero-badge {
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
        .about-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem,5vw,4.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 20px;
          animation: fadeUp .6s .1s var(--ease) both;
        }
        .about-hero-title em {
          font-style: italic;
          font-family: 'Instrument Serif', serif;
          color: var(--color-blue);
        }
        .about-hero-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,.75);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
          animation: fadeUp .6s .2s var(--ease) both;
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
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
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .about-section-gap {
          padding: 80px 0;
        }

        /* Section Titles */
        .section-title-center {
          text-align: center;
          margin-bottom: 56px;
        }
        .section-pre {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .1em;
          color: var(--color-primary);
          margin-bottom: 14px;
        }
        .section-pre::before,
        .section-pre::after {
          content: '';
          width: 30px;
          height: 1px;
          background: var(--color-primary);
          opacity: .5;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem,3.5vw,2.8rem);
          font-weight: 800;
          color: var(--color-dark);
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .section-title em {
          font-family: 'Instrument Serif', serif;
          font-style: italic;
          color: var(--color-primary);
        }
        .section-subtitle {
          color: var(--color-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .section-title-left {
          text-align: left;
          margin-bottom: 32px;
        }
        .section-title-left .pre {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .1em;
          color: var(--color-primary);
          margin-bottom: 14px;
          display: inline-block;
        }
        .section-title-left .title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem,3vw,2.5rem);
          font-weight: 800;
          color: var(--color-dark);
          line-height: 1.2;
        }

        /* Story Section */
        .story-image-wrap {
          border-radius: 20px;
          overflow: hidden;
        }
        .story-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 20px;
          transition: transform .6s var(--ease);
        }
        .story-image-wrap:hover .story-image {
          transform: scale(1.03);
        }

        /* Stats Section */
        .stats-section {
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 100%);
          padding: 60px 0;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }
        .stat-item {
          text-align: center;
          padding: 20px;
          border-radius: 20px;
          transition: all .3s;
        }
        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-blue);
          margin-bottom: 8px;
          line-height: 1;
        }
        .stat-label {
          font-size: 13px;
          color: rgba(255,255,255,.7);
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        /* Value Cards */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .value-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid var(--color-border);
          transition: all .35s var(--ease);
          height: 100%;
        }
        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(8,99,126,.1);
          border-color: var(--color-primary);
        }
        .value-icon {
          font-size: 48px;
          color: var(--color-primary);
          margin-bottom: 24px;
          transition: all .3s;
        }
        .value-card:hover .value-icon {
          transform: scale(1.05);
          color: var(--color-secondary);
        }
        .value-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 16px;
        }
        .value-desc {
          font-size: 15px;
          color: var(--color-muted);
          line-height: 1.7;
        }

        /* Team Section */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .team-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          transition: all .35s var(--ease);
        }
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(8,99,126,.12);
          border-color: var(--color-primary);
        }
        .team-image-wrap {
          overflow: hidden;
          height: 300px;
        }
        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s var(--ease);
        }
        .team-card:hover .team-image {
          transform: scale(1.05);
        }
        .team-details {
          padding: 24px;
          text-align: center;
        }
        .team-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 8px;
        }
        .team-title {
          color: var(--color-primary);
          font-weight: 600;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: 12px;
        }
        .team-bio {
          font-size: 13px;
          color: var(--color-muted);
          line-height: 1.6;
        }

        /* Certifications Grid */
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .cert-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px;
          text-align: center;
          border: 1px solid var(--color-border);
          transition: all .3s var(--ease);
        }
        .cert-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(8,99,126,.1);
          border-color: var(--color-primary);
        }
        .cert-icon {
          font-size: 48px;
          color: var(--color-primary);
          margin-bottom: 16px;
        }
        .cert-name {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 8px;
        }
        .cert-desc {
          font-size: 12px;
          color: var(--color-muted);
          margin-bottom: 12px;
        }
        .cert-badge {
          display: inline-block;
          background: var(--color-sky);
          color: var(--color-primary);
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
        }

        /* Testimonials Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .testimonial-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid var(--color-border);
          transition: all .3s var(--ease);
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(8,99,126,.1);
        }
        .testimonial-quote {
          font-size: 32px;
          color: var(--color-primary);
          opacity: .3;
          margin-bottom: 16px;
        }
        .testimonial-text {
          font-size: 15px;
          color: var(--color-text);
          line-height: 1.7;
          margin-bottom: 24px;
          font-style: italic;
        }
        .testimonial-name {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-dark);
          margin-bottom: 4px;
        }
        .testimonial-company {
          font-size: 12px;
          color: var(--color-muted);
        }
        .stars {
          color: #f5b042;
          margin-bottom: 12px;
        }

        /* Why Choose Us */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px;
          align-items: center;
        }
        .why-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 32px 0;
        }
        .feature-card-sm {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          border: 1px solid var(--color-border);
          transition: all .3s;
        }
        .feature-card-sm:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }

        /* Contact Card */
        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--color-sky);
          border-radius: 16px;
          padding: 16px 24px;
          margin-top: 24px;
        }
        .contact-icon {
          width: 48px;
          height: 48px;
          background: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 20px;
        }
        .contact-info span {
          font-size: 12px;
          color: var(--color-muted);
          display: block;
        }
        .contact-info a {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-dark);
          text-decoration: none;
        }
        .contact-info a:hover {
          color: var(--color-primary);
        }

        /* CTA Button */
        .about-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: var(--color-primary);
          color: #fff;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all .3s var(--ease);
          border: none;
          cursor: pointer;
        }
        .about-cta-btn:hover {
          background: var(--color-secondary);
          transform: translateY(-2px);
          gap: 14px;
          box-shadow: 0 8px 20px rgba(8,131,149,.3);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .about-container { padding: 0 24px; }
          .about-section-gap { padding: 60px 0; }
          .values-grid,
          .team-grid,
          .certs-grid,
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .why-grid {
            grid-template-columns: 1fr;
          }
          .team-image-wrap { height: 250px; }
        }
        @media (max-width: 768px) {
          .values-grid,
          .team-grid,
          .certs-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-number { font-size: 2rem; }
          .why-features-grid {
            grid-template-columns: 1fr;
          }
        }
          .team-image-wrap{
        translate: unset;
    rotate: unset;
    scale: unset;
    opacity: unset;
    transform: unset;}
      `}</style>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-grid" />
        <div className="about-hero-orb about-hero-orb-1" />
        <div className="about-hero-orb about-hero-orb-2" />
        <div className="about-hero-content">
          <div className="about-hero-badge">✦ About Nex7</div>
          <h1 className="about-hero-title" ref={titleRef}>
            Driving <em>Digital</em> Excellence
          </h1>
          <p className="about-hero-subtitle">
            We're on a mission to empower businesses with innovative technology solutions 
            that drive growth, efficiency, and lasting success.
          </p>
        </div>
      </section>

      {/* Top Accent */}
      <div className="top-accent" />

      {/* Our Story Section */}
      <div className="about-section-gap">
        <div className="about-container">
          <div className="why-grid">
            <div className="story-image-wrap">
              <img src="/assets/whoweare.jpg" alt="Our Story" className="story-image" />
            </div>
            <div>
              <div className="section-title-left">
                <span className="pre">Our Story</span>
                <h2 className="title">Who <em>We Are</em></h2>
              </div>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.7, marginBottom: '16px' }}>
                Founded in 2015, Nex7 has grown from a small team of technology enthusiasts 
                into a leading digital transformation consultancy. Our mission is to help 
                businesses harness the power of technology to achieve sustainable growth 
                and operational excellence in an increasingly digital world.
              </p>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.7, marginBottom: '16px' }}>
                We combine deep industry expertise with cutting-edge technical capabilities 
                to deliver solutions that drive real business value. Our team of over 200 
                professionals serves clients across the globe, from innovative startups to 
                Fortune 500 companies.
              </p>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.7, marginBottom: '24px' }}>
                What sets us apart is our commitment to partnership - we don't just deliver 
                projects, we build lasting relationships that help our clients navigate 
                their digital journey with confidence and clarity.
              </p>
              <div className="contact-card">
                <div className="contact-icon"><FaPhoneVolume /></div>
                <div className="contact-info">
                  <span>Talk to us</span>
                  <a href="tel:+18881234567">+1 (888) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="about-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="about-section-gap values-section" style={{ background: 'var(--color-light)' }}>
        <div className="about-container">
          <div className="section-title-center">
            <span className="section-pre">Our Core Values</span>
            <h2 className="section-title">What <em>Drives Us</em></h2>
            <p className="section-subtitle">The principles that guide our decisions and define our culture</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="about-section-gap team-section">
        <div className="about-container">
          <div className="section-title-center">
            <span className="section-pre">Leadership</span>
            <h2 className="section-title">Meet <em>Our Team</em></h2>
            <p className="section-subtitle">Experienced leaders driving innovation and excellence</p>
          </div>
          <div className="team-grid">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image-wrap">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <div className="team-details">
                  <h4 className="team-name">{member.name}</h4>
                  <div className="team-title">{member.title}</div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="about-section-gap" style={{ background: 'var(--color-light)' }}>
        <div className="about-container">
          <div className="section-title-center">
            <span className="section-pre">Certifications & Partnerships</span>
            <h2 className="section-title">Industry <em>Recognition</em></h2>
            <p className="section-subtitle">Accredited by leading organizations and technology partners</p>
          </div>
          <div className="certs-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-icon">{cert.icon}</div>
                <h5 className="cert-name">{cert.name}</h5>
                <p className="cert-desc">{cert.description}</p>
                <span className="cert-badge">Since {cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="about-section-gap">
        <div className="about-container">
          <div className="section-title-center">
            <span className="section-pre">Testimonials</span>
            <h2 className="section-title">What Our <em>Clients Say</em></h2>
            <p className="section-subtitle">Trusted by businesses worldwide</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote"><FaQuoteLeft /></div>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} style={{ display: 'inline-block', marginRight: '2px' }} />)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-company">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="about-section-gap" style={{ background: 'var(--color-light)' }}>
        <div className="about-container">
          <div className="why-grid">
            <div>
              <div className="section-title-left">
                <span className="pre">Why Choose Nex7</span>
                <h2 className="title">Your Trusted <em>Technology Partner</em></h2>
              </div>
              <p style={{ color: 'var(--color-muted)', marginBottom: '32px', lineHeight: 1.7 }}>
                We combine technical excellence with business acumen to deliver solutions 
                that not only meet your immediate needs but also position you for future success.
              </p>
              <div className="why-features-grid">
                <div className="feature-card-sm">
                  <FaUsers style={{ fontSize: '32px', color: 'var(--color-primary)', marginBottom: '16px' }} />
                  <h5 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '8px' }}>200+ Experts</h5>
                  <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Dedicated professionals ready to help you succeed</p>
                </div>
                <div className="feature-card-sm">
                  <FaChartLine style={{ fontSize: '32px', color: 'var(--color-primary)', marginBottom: '16px' }} />
                  <h5 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '8px' }}>98% Success Rate</h5>
                  <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Proven track record of on-time delivery</p>
                </div>
                <div className="feature-card-sm">
                  <FaRocket style={{ fontSize: '32px', color: 'var(--color-primary)', marginBottom: '16px' }} />
                  <h5 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '8px' }}>24/7 Support</h5>
                  <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Round-the-clock assistance from global team</p>
                </div>
                <div className="feature-card-sm">
                  <FaTrophy style={{ fontSize: '32px', color: 'var(--color-primary)', marginBottom: '16px' }} />
                  <h5 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, marginBottom: '8px' }}>50+ Awards</h5>
                  <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>Recognized for excellence and innovation</p>
                </div>
              </div>
              <a href="/contact" className="about-cta-btn">
                Get in Touch <FaArrowRight />
              </a>
            </div>
            <div className="story-image-wrap">
              <img src="/assets/whoweare2.jpg" alt="Why Choose Us" className="story-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;