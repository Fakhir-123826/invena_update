// pages/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────────
   STATIC DATA  (swap with WordPress hook later)
───────────────────────────────────────────── */
const OFFICE_LOCATIONS = [
  {
    id: 1,
    city: "New York (HQ)",
    address: "123 Fifth Avenue, Suite 500",
    address2: "New York, NY 10010",
    phone: "(888) 123-4567",
    email: "newyork@nex7.com",
    flag: "🇺🇸",
  },
  {
    id: 2,
    city: "San Francisco",
    address: "456 Market Street, Suite 300",
    address2: "San Francisco, CA 94105",
    phone: "(888) 234-5678",
    email: "sf@nex7.com",
    flag: "🇺🇸",
  },
  {
    id: 3,
    city: "London",
    address: "789 Oxford Street, Floor 12",
    address2: "London, W1D 1BS",
    phone: "+44 20 1234 5678",
    email: "london@nex7.com",
    flag: "🇬🇧",
  },
];

const INFO_CARDS = [
  {
    id: 1,
    icon: "📞",
    title: "Phone",
    lines: ["Sales: (888) 123-4567", "Support: (888) 123-4568"],
  },
  {
    id: 2,
    icon: "✉️",
    title: "Email",
    lines: ["info@nex7.com", "support@nex7.com"],
  },
  {
    id: 3,
    icon: "⏰",
    title: "Hours",
    lines: ["Mon–Fri: 9 am – 6 pm EST", "24 / 7 Support Available"],
  },
  {
    id: 4,
    icon: "💬",
    title: "Live Chat",
    lines: ["Available on our website", "Average reply: &lt; 2 min"],
  },
];

const SERVICES = [
  "Digital Transformation",
  "Cloud Migration",
  "Cybersecurity",
  "AI & Machine Learning",
  "App Development",
  "IT Consulting",
];

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bbaf0df%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus";

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeLocation, setActiveLocation] = useState(0);

  /* ── Handlers */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1600));
    setSubmitting(false);
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  };

  return (
    <>
      {/* ── STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        :root {
          --color-primary:   #088395;
          --color-secondary: #09637e;
          --color-blue:      #7ab2b2;
          --color-sky:       #ebf4f6;
          --color-dark:      #0a1628;
          --color-text:      #2d4a58;
          --color-muted:     #6b8fa0;
          --color-border:    #d8edf2;
          --color-light:     #f5fafc;
          --ease:            cubic-bezier(0.4,0,0.2,1);
        }

        /* ── HERO ── */
        .con-hero {
          position: relative;
          min-height: 480px;
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 60%, var(--color-primary) 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 0 60px;
          font-family: 'DM Sans', sans-serif;
        }
        .con-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(122,178,178,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122,178,178,.08) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .con-hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(60px); pointer-events: none;
        }
        .con-hero-orb-1 { width:400px; height:400px; background:rgba(8,131,149,.3);  top:-100px; right:-50px; }
        .con-hero-orb-2 { width:260px; height:260px; background:rgba(122,178,178,.2); bottom:-60px; left:8%; }
        .con-hero-content {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto;
          padding: 0 40px; text-align: center;
        }
        .con-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.2);
          backdrop-filter: blur(10px);
          padding: 8px 20px; border-radius: 100px;
          color: rgba(255,255,255,.9);
          font-size: 13px; font-weight: 500;
          letter-spacing: .05em; text-transform: uppercase;
          margin-bottom: 28px;
          animation: conFadeUp .6s var(--ease) both;
        }
        .con-hero-badge::before {
          content: '';
          width: 8px; height: 8px;
          background: var(--color-blue); border-radius: 50%;
          box-shadow: 0 0 0 3px rgba(122,178,178,.3);
          animation: conPulse 2s infinite;
        }
        @keyframes conPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(122,178,178,.3); }
          50%      { box-shadow: 0 0 0 8px rgba(122,178,178,.1); }
        }
        .con-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem,5vw,4.2rem);
          font-weight: 800; color: #fff;
          line-height: 1.1; margin-bottom: 20px;
          animation: conFadeUp .6s .1s var(--ease) both;
        }
        .con-hero-title em {
          font-style: italic;
          font-family: 'Instrument Serif', serif;
          color: var(--color-blue);
        }
        .con-hero-subtitle {
          font-size: 18px; color: rgba(255,255,255,.75);
          max-width: 560px; margin: 0 auto 40px;
          line-height: 1.7;
          animation: conFadeUp .6s .2s var(--ease) both;
        }
        .con-hero-actions {
          display: flex; justify-content: center;
          gap: 16px; flex-wrap: wrap;
          animation: conFadeUp .6s .3s var(--ease) both;
        }
        .con-hero-btn-primary {
          padding: 14px 32px;
          background: #fff; color: var(--color-primary);
          border: none; border-radius: 100px;
          font-family: 'Syne', sans-serif;
          font-size: 14px; font-weight: 700;
          cursor: pointer; text-decoration: none;
          transition: all .3s var(--ease);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .con-hero-btn-primary:hover {
          background: var(--color-blue); color: var(--color-dark);
          
          box-shadow: 0 12px 28px rgba(0,0,0,.2);
        }
        .con-hero-btn-outline {
          padding: 14px 32px;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,.4);
          border-radius: 100px; color: rgba(255,255,255,.9);
          font-family: 'Syne', sans-serif;
          font-size: 14px; font-weight: 600;
          cursor: pointer; text-decoration: none;
          transition: all .3s var(--ease);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .con-hero-btn-outline:hover {
          border-color: rgba(255,255,255,.8);
          background: rgba(255,255,255,.1);
          
        }
        @keyframes conFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── TOP ACCENT ── */
        .con-accent {
          height: 4px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-blue), var(--color-primary));
          background-size: 200% 100%;
          animation: conShimmer 3s infinite linear;
        }
        @keyframes conShimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }

        /* ── CONTAINER ── */
        .con-container {
          max-width: 1200px; margin: 0 auto;
          padding: 0 40px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── INFO CARDS ── */
        .con-info-section {
          padding: 70px 0 50px;
          background: #fff;
        }
        .con-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .con-info-card {
          background: var(--color-sky);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          border: 1px solid var(--color-border);
          transition: all .35s var(--ease);
          position: relative; overflow: hidden;
        }
        .con-info-card::before {
          content: '';
          position: absolute; top:0; left:0; right:0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-blue));
          transform: scaleX(0);
          transition: transform .3s var(--ease);
        }
        .con-info-card:hover::before { transform: scaleX(1); }
        .con-info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(8,99,126,.1);
          background: #fff;
          border-color: transparent;
        }
        .con-info-icon {
          width: 64px; height: 64px;
          background: #fff;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px; margin: 0 auto 18px;
          box-shadow: 0 4px 16px rgba(8,131,149,.1);
          transition: all .3s;
        }
        .con-info-card:hover .con-info-icon {
          background: var(--color-primary);
          transform: scale(1.05) rotate(-4deg);
        }
        .con-info-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 700;
          color: var(--color-dark); margin-bottom: 12px;
        }
        .con-info-line {
          font-size: 14px; color: var(--color-muted);
          line-height: 1.8; margin: 0;
        }

        /* ── MAIN SECTION ── */
        .con-main-section {
          padding: 20px 0 80px;
          background: #fff;
        }
        .con-main-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: start;
        }

        /* ── SECTION HEADER ── */
        .con-section-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 600;
          text-transform: uppercase; letter-spacing: .1em;
          color: var(--color-primary); margin-bottom: 12px;
        }
        .con-section-eyebrow::before, .con-section-eyebrow::after {
          content: ''; width: 24px; height: 1px;
          background: var(--color-primary); opacity: .5;
        }
        .con-section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.7rem, 2.5vw, 2.2rem);
          font-weight: 800; color: var(--color-dark);
          line-height: 1.2; margin-bottom: 10px;
        }
        .con-section-title em {
          font-family: 'Instrument Serif', serif;
          font-style: italic; color: var(--color-primary);
        }
        .con-section-desc {
          font-size: 15px; color: var(--color-muted);
          line-height: 1.7; margin-bottom: 32px;
        }

        /* ── FORM ── */
        .con-form-card {
          background: #fff;
          border-radius: 24px;
          padding: 44px;
          border: 1px solid var(--color-border);
          box-shadow: 0 8px 40px rgba(8,99,126,.07);
          position: relative; overflow: hidden;
        }
        .con-form-card::after {
          content: '';
          position: absolute; top:-80px; right:-80px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(8,131,149,.06) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .con-form-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
          margin-bottom: 16px;
        }
        .con-form-row.full { grid-template-columns: 1fr; }
        .con-field { display: flex; flex-direction: column; gap: 6px; }
        .con-label {
          font-size: 12px; font-weight: 600;
          text-transform: uppercase; letter-spacing: .06em;
          color: var(--color-secondary);
        }
        .con-input, .con-select, .con-textarea {
          padding: 14px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; color: var(--color-text);
          background: var(--color-sky);
          border: 1.5px solid var(--color-border);
          border-radius: 12px; outline: none;
          transition: all .3s var(--ease);
          width: 100%;
        }
        .con-input:focus, .con-select:focus, .con-textarea:focus {
          border-color: var(--color-primary);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(8,131,149,.1);
        }
        .con-input.error, .con-textarea.error {
          border-color: #e05555;
          background: #fff5f5;
        }
        .con-error-msg {
          font-size: 12px; color: #e05555;
          margin-top: 2px;
        }
        .con-select { appearance: none; cursor: pointer; }
        .con-textarea { resize: vertical; min-height: 120px; }
        .con-submit-btn {
          width: 100%; padding: 16px 28px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: #fff; border: none;
          border-radius: 14px;
          font-family: 'Syne', sans-serif;
          font-size: 15px; font-weight: 700;
          cursor: pointer;
          transition: all .3s var(--ease);
          display: flex; align-items: center;
          justify-content: center; gap: 10px;
          margin-top: 8px;
        }
        .con-submit-btn:hover:not(:disabled) {
          
          box-shadow: 0 12px 32px rgba(8,131,149,.35);
          background: linear-gradient(135deg, var(--color-secondary), var(--color-dark));
        }
        .con-submit-btn:disabled { opacity: .65; cursor: not-allowed; }

        /* spinner */
        .con-spinner {
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: conSpin .7s linear infinite;
        }
        @keyframes conSpin { to { transform: rotate(360deg); } }

        /* success banner */
        .con-success-banner {
          background: linear-gradient(135deg, #d4f0e8, #e8f8f2);
          border: 1px solid #6ecfaa;
          border-radius: 14px;
          padding: 18px 22px;
          margin-bottom: 24px;
          display: flex; align-items: flex-start; gap: 14px;
          animation: conFadeUp .4s var(--ease) both;
        }
        .con-success-icon { font-size: 24px; flex-shrink: 0; }
        .con-success-text { font-size: 14px; color: #1a6644; line-height: 1.6; }
        .con-success-text strong { font-weight: 700; display: block; margin-bottom: 2px; }

        /* ── RIGHT SIDE ── */
        .con-right-wrap { display: flex; flex-direction: column; gap: 28px; }

        /* location tabs */
        .con-location-tabs {
          display: flex; gap: 10px; margin-bottom: 4px; flex-wrap: wrap;
        }
        .con-loc-tab {
          padding: 8px 18px;
          border-radius: 100px;
          border: 1.5px solid var(--color-border);
          background: transparent;
          color: var(--color-muted);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          cursor: pointer;
          transition: all .25s var(--ease);
        }
        .con-loc-tab.active, .con-loc-tab:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #fff;
          box-shadow: 0 4px 12px rgba(8,131,149,.25);
        }
        .con-location-card {
          background: var(--color-sky);
          border-radius: 20px; padding: 28px;
          border: 1px solid var(--color-border);
          animation: conFadeUp .4s var(--ease) both;
        }
        .con-loc-header {
          display: flex; align-items: center;
          gap: 12px; margin-bottom: 18px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        .con-loc-flag {
          font-size: 28px; line-height: 1;
        }
        .con-loc-city {
          font-family: 'Syne', sans-serif;
          font-size: 18px; font-weight: 700;
          color: var(--color-dark);
        }
        .con-loc-badge {
          margin-left: auto;
          padding: 4px 12px;
          background: rgba(8,131,149,.1);
          color: var(--color-primary);
          border-radius: 100px;
          font-size: 11px; font-weight: 600;
          text-transform: uppercase; letter-spacing: .05em;
        }
        .con-loc-rows { display: flex; flex-direction: column; gap: 14px; }
        .con-loc-row {
          display: flex; align-items: flex-start; gap: 12px;
        }
        .con-loc-row-icon {
          width: 34px; height: 34px;
          background: #fff; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(8,99,126,.1);
        }
        .con-loc-row-text { font-size: 14px; color: var(--color-text); line-height: 1.55; }
        .con-loc-row-label {
          font-size: 11px; font-weight: 600;
          text-transform: uppercase; letter-spacing: .06em;
          color: var(--color-muted); margin-bottom: 1px;
        }

        /* quick connect card */
        .con-quick-card {
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 100%);
          border-radius: 20px; padding: 28px;
          position: relative; overflow: hidden;
        }
        .con-quick-card::before {
          content: '';
          position: absolute; top:-40px; right:-40px;
          width: 160px; height: 160px;
          background: radial-gradient(circle, rgba(122,178,178,.2) 0%, transparent 70%);
          border-radius: 50%;
        }
        .con-quick-title {
          font-family: 'Syne', sans-serif;
          font-size: 18px; font-weight: 700;
          color: #fff; margin-bottom: 6px;
        }
        .con-quick-desc { font-size: 14px; color: rgba(255,255,255,.65); margin-bottom: 18px; line-height: 1.6; }
        .con-quick-links { display: flex; flex-direction: column; gap: 10px; }
        .con-quick-link {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 16px;
          background: rgba(255,255,255,.1);
          border-radius: 12px;
          color: rgba(255,255,255,.9);
          font-size: 14px; font-weight: 500;
          text-decoration: none;
          transition: all .25s var(--ease);
          border: 1px solid rgba(255,255,255,.1);
        }
        .con-quick-link:hover {
          background: rgba(255,255,255,.18);
          border-color: rgba(255,255,255,.25);
          transform: translateX(4px);
          color: #fff;
        }
        .con-quick-link-icon {
          font-size: 18px; flex-shrink: 0;
        }
        .con-quick-link-arrow { margin-left: auto; opacity: .6; font-size: 12px; }

        /* ── MAP ── */
        .con-map-section { position: relative; }
        .con-map-wrap {
          position: relative; overflow: hidden;
          border-radius: 0; /* full width flush */
        }
        .con-map-wrap iframe {
          width: 100%; height: 420px;
          border: none; display: block;
          filter: saturate(0.8) contrast(1.05);
        }
        .con-map-overlay {
          position: absolute; top: 24px; left: 40px;
          background: #fff; border-radius: 16px;
          padding: 16px 22px;
          box-shadow: 0 8px 32px rgba(8,99,126,.15);
          z-index: 10;
          display: flex; align-items: center; gap: 12px;
        }
        .con-map-overlay-icon { font-size: 24px; }
        .con-map-overlay-title {
          font-family: 'Syne', sans-serif;
          font-size: 15px; font-weight: 700;
          color: var(--color-dark);
        }
        .con-map-overlay-sub { font-size: 12px; color: var(--color-muted); }

        /* ── CTA ── */
        .con-cta-section {
          padding: 80px 0;
          font-family: 'DM Sans', sans-serif;
        }
        .con-cta-card {
          background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-secondary) 50%, var(--color-primary) 100%);
          border-radius: 28px; padding: 64px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 40px;
          position: relative; overflow: hidden;
        }
        .con-cta-card::before {
          content: '';
          position: absolute; top:-60px; right:-60px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(122,178,178,.2) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .con-cta-card::after {
          content: '';
          position: absolute; bottom:-80px; left:25%;
          width: 250px; height: 250px;
          background: radial-gradient(circle, rgba(8,131,149,.25) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .con-cta-left { position: relative; z-index: 2; }
        .con-cta-eyebrow {
          display: inline-block;
          font-size: 12px; font-weight: 600;
          text-transform: uppercase; letter-spacing: .1em;
          color: var(--color-blue); margin-bottom: 12px;
        }
        .con-cta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 800; color: #fff;
          line-height: 1.2; max-width: 500px;
        }
        .con-cta-title em {
          font-family: 'Instrument Serif', serif;
          font-style: italic; color: var(--color-blue);
        }
        .con-cta-right {
          position: relative; z-index: 2;
          display: flex; flex-direction: column;
          gap: 14px; flex-shrink: 0;
        }
        .con-cta-btn-white {
          padding: 16px 36px;
          background: #fff; color: var(--color-primary);
          border: none; border-radius: 100px;
          font-family: 'Syne', sans-serif;
          font-size: 15px; font-weight: 700;
          cursor: pointer; text-decoration: none;
          transition: all .3s var(--ease);
          display: inline-flex; align-items: center;
          justify-content: center; gap: 10px;
          white-space: nowrap;
        }
        .con-cta-btn-white:hover {
          background: var(--color-blue);
          color: var(--color-dark);
          
          box-shadow: 0 12px 28px rgba(0,0,0,.2);
        }
        .con-cta-btn-ghost {
          padding: 14px 28px;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,.35);
          border-radius: 100px; color: rgba(255,255,255,.85);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500;
          cursor: pointer; text-decoration: none;
          transition: all .3s var(--ease);
          display: inline-flex; align-items: center;
          justify-content: center; gap: 8px; white-space: nowrap;
        }
        .con-cta-btn-ghost:hover {
          border-color: rgba(255,255,255,.7);
          background: rgba(255,255,255,.1);
          color: #fff;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .con-info-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .con-main-grid { grid-template-columns: 1fr; }
          .con-cta-card { flex-direction: column; padding: 40px; text-align: center; }
          .con-cta-right { align-items: center; }
          .con-map-overlay { left: 20px; }
        }
        @media (max-width: 600px) {
          .con-container { padding: 0 20px; }
          .con-info-grid { grid-template-columns: 1fr 1fr; }
          .con-form-card { padding: 28px 20px; }
          .con-form-row { grid-template-columns: 1fr; }
          .con-cta-card { padding: 32px 24px; }
          .con-hero-actions { flex-direction: column; align-items: center; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="con-hero">
        <div className="con-hero-grid" />
        <div className="con-hero-orb con-hero-orb-1" />
        <div className="con-hero-orb con-hero-orb-2" />
        <div className="con-hero-content">
          <div className="con-hero-badge">✦ Let's Talk</div>
          <h1 className="con-hero-title">
            Get in <em>Touch</em> With Us
          </h1>
          <p className="con-hero-subtitle">
            Have a project in mind? Our team of experts is ready to help you
            transform your business with cutting-edge technology solutions.
          </p>
          <div className="con-hero-actions">
            <a href="#contact-form" className="con-hero-btn-primary">
              Send a Message →
            </a>
            <a href="tel:+18881234567" className="con-hero-btn-outline">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── TOP ACCENT ── */}
      <div className="con-accent" />

      {/* ── INFO CARDS ── */}
      <section className="con-info-section">
        <div className="con-container">
          <div className="con-info-grid">
            {INFO_CARDS.map((card) => (
              <div key={card.id} className="con-info-card">
                <div className="con-info-icon">{card.icon}</div>
                <div className="con-info-title">{card.title}</div>
                {card.lines.map((line, i) => (
                  <p
                    key={i}
                    className="con-info-line"
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN: FORM + LOCATIONS ── */}
      <section className="con-main-section" id="contact-form">
        <div className="con-container">
          <div className="con-main-grid">

            {/* ── LEFT: FORM ── */}
            <div>
              <div className="con-section-eyebrow">Drop Us a Line</div>
              <h2 className="con-section-title">
                Tell us about your <em>project</em>
              </h2>
              <p className="con-section-desc">
                Fill in the form and one of our specialists will reach out
                within 24 hours.
              </p>

              <div className="con-form-card">
                {success && (
                  <div className="con-success-banner">
                    <div className="con-success-icon">✅</div>
                    <div className="con-success-text">
                      <strong>Message sent successfully!</strong>
                      Thank you! We'll get back to you within 24 hours.
                    </div>
                  </div>
                )}

                {/* Row 1 */}
                <div className="con-form-row">
                  <div className="con-field">
                    <label className="con-label">Full Name *</label>
                    <input
                      className={`con-input${errors.name ? " error" : ""}`}
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="con-error-msg">{errors.name}</span>}
                  </div>
                  <div className="con-field">
                    <label className="con-label">Email Address *</label>
                    <input
                      className={`con-input${errors.email ? " error" : ""}`}
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="con-error-msg">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="con-form-row">
                  <div className="con-field">
                    <label className="con-label">Phone Number</label>
                    <input
                      className="con-input"
                      type="tel"
                      name="phone"
                      placeholder="+1 (888) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="con-field">
                    <label className="con-label">Service Needed</label>
                    <select
                      className="con-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3 — budget */}
                <div className="con-form-row full" style={{ marginBottom: 16 }}>
                  <div className="con-field">
                    <label className="con-label">Estimated Budget</label>
                    <select
                      className="con-select"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget range…</option>
                      <option>Under $10k</option>
                      <option>$10k – $50k</option>
                      <option>$50k – $100k</option>
                      <option>$100k – $500k</option>
                      <option>$500k+</option>
                    </select>
                  </div>
                </div>

                {/* Row 4 — message */}
                <div className="con-form-row full">
                  <div className="con-field">
                    <label className="con-label">Message *</label>
                    <textarea
                      className={`con-textarea${errors.message ? " error" : ""}`}
                      name="message"
                      placeholder="Tell us about your project, goals, and any specific requirements…"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="con-error-msg">{errors.message}</span>}
                  </div>
                </div>

                <button
                  className="con-submit-btn"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <span className="con-spinner" />
                      Sending your message…
                    </>
                  ) : (
                    <>Send Message →</>
                  )}
                </button>
              </div>
            </div>

            {/* ── RIGHT: LOCATIONS + QUICK CONNECT ── */}
            <div className="con-right-wrap">

              <div>
                <div className="con-section-eyebrow">Our Offices</div>
                <h2 className="con-section-title">
                  Find us <em>worldwide</em>
                </h2>
                <p className="con-section-desc">
                  With offices across three continents, we're always close by.
                </p>

                {/* Location Tabs */}
                <div className="con-location-tabs">
                  {OFFICE_LOCATIONS.map((loc, i) => (
                    <button
                      key={loc.id}
                      className={`con-loc-tab${activeLocation === i ? " active" : ""}`}
                      onClick={() => setActiveLocation(i)}
                    >
                      {loc.flag} {loc.city}
                    </button>
                  ))}
                </div>

                {/* Active Location Card */}
                <div className="con-location-card">
                  <div className="con-loc-header">
                    <div className="con-loc-flag">
                      {OFFICE_LOCATIONS[activeLocation].flag}
                    </div>
                    <div className="con-loc-city">
                      {OFFICE_LOCATIONS[activeLocation].city}
                    </div>
                    {activeLocation === 0 && (
                      <span className="con-loc-badge">HQ</span>
                    )}
                  </div>
                  <div className="con-loc-rows">
                    <div className="con-loc-row">
                      <div className="con-loc-row-icon">📍</div>
                      <div className="con-loc-row-text">
                        <div className="con-loc-row-label">Address</div>
                        {OFFICE_LOCATIONS[activeLocation].address}
                        <br />
                        {OFFICE_LOCATIONS[activeLocation].address2}
                      </div>
                    </div>
                    <div className="con-loc-row">
                      <div className="con-loc-row-icon">📞</div>
                      <div className="con-loc-row-text">
                        <div className="con-loc-row-label">Phone</div>
                        {OFFICE_LOCATIONS[activeLocation].phone}
                      </div>
                    </div>
                    <div className="con-loc-row">
                      <div className="con-loc-row-icon">✉️</div>
                      <div className="con-loc-row-text">
                        <div className="con-loc-row-label">Email</div>
                        {OFFICE_LOCATIONS[activeLocation].email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="con-quick-card">
                <div className="con-quick-title">Quick Connect</div>
                <p className="con-quick-desc">
                  Prefer a different channel? Reach us directly.
                </p>
                <div className="con-quick-links">
                  <a href="tel:+18881234567" className="con-quick-link">
                    <span className="con-quick-link-icon">📞</span>
                    Call Sales Team
                    <span className="con-quick-link-arrow">→</span>
                  </a>
                  <a href="mailto:info@nex7.com" className="con-quick-link">
                    <span className="con-quick-link-icon">✉️</span>
                    Email Us Directly
                    <span className="con-quick-link-arrow">→</span>
                  </a>
                  <a href="#" className="con-quick-link">
                    <span className="con-quick-link-icon">💬</span>
                    Start Live Chat
                    <span className="con-quick-link-arrow">→</span>
                  </a>
                  <Link to="/book-consultation" className="con-quick-link">
                    <span className="con-quick-link-icon">📅</span>
                    Book a Consultation
                    <span className="con-quick-link-arrow">→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="con-map-section">
        <div className="con-map-wrap">
          <div className="con-map-overlay">
            <div className="con-map-overlay-icon">📍</div>
            <div>
              <div className="con-map-overlay-title">Nex7 Headquarters</div>
              <div className="con-map-overlay-sub">123 Fifth Avenue, New York</div>
            </div>
          </div>
          <iframe
            src={MAP_URL}
            allowFullScreen=""
            loading="lazy"
            title="Nex7 Office Location"
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="con-cta-section">
        <div className="con-container">
          <div className="con-cta-card">
            <div className="con-cta-left">
              <span className="con-cta-eyebrow">✦ Next Step</span>
              <h3 className="con-cta-title">
                Ready to start your <em>digital transformation</em> journey?
              </h3>
            </div>
            <div className="con-cta-right">
              <Link to="/book-consultation" className="con-cta-btn-white">
                📅 Book a Free Consultation
              </Link>
              <Link to="/services" className="con-cta-btn-ghost">
                Explore Our Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;