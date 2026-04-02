// components/Pricing.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const Pricing = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeTab, setActiveTab] = useState("monthly");

  // Pricing data for monthly plans
  const monthlyPlans = [
    {
      id: 1,
      price: "$160",
      period: "/month",
      preTitle: "Starter Package",
      title: "Basic Plan",
      features: [
        { name: "Business Solution", available: true },
        { name: "24/7 Consultant Service", available: true },
        { name: "Great Customer Support", available: true },
        { name: "Market Growth Solution", available: false },
        { name: "24/7 Consultant Service", available: false },
      ],
      buttonText: "Buy This",
      buttonLink: "#",
      delay: "100",
    },
    {
      id: 2,
      price: "$180",
      period: "/month",
      preTitle: "Starter Package",
      title: "Standard Plan",
      features: [
        { name: "Business Solution", available: true },
        { name: "24/7 Consultant Service", available: true },
        { name: "Great Customer Support", available: true },
        { name: "Market Growth Solution", available: false },
        { name: "24/7 Consultant Service", available: false },
      ],
      buttonText: "Buy This",
      buttonLink: "#",
      delay: "200",
    },
    {
      id: 3,
      price: "$260",
      period: "/month",
      preTitle: "Starter Package",
      title: "Premium Plan",
      features: [
        { name: "Business Solution", available: true },
        { name: "24/7 Consultant Service", available: true },
        { name: "Great Customer Support", available: true },
        { name: "Market Growth Solution", available: false },
        { name: "24/7 Consultant Service", available: false },
      ],
      buttonText: "Buy This",
      buttonLink: "#",
      delay: "300",
    },
  ];

  // Pricing data for yearly plans
  const yearlyPlans = [
    {
      id: 1,
      price: "$1600",
      period: "/year",
      preTitle: "Starter Package",
      title: "Basic Plan",
      features: [
        { name: "Business Solution", available: true },
        { name: "24/7 Consultant Service", available: true },
        { name: "Great Customer Support", available: true },
        { name: "Market Growth Solution", available: true },
        { name: "24/7 Consultant Service", available: false },
      ],
      buttonText: "Buy This",
      buttonLink: "#",
      delay: "100",
    },
    {
      id: 2,
      price: "$1800",
      period: "/year",
      preTitle: "Starter Package",
      title: "Standard Plan",
      features: [
        { name: "Business Solution", available: true },
        { name: "24/7 Consultant Service", available: true },
        { name: "Great Customer Support", available: true },
        { name: "Market Growth Solution", available: true },
        { name: "24/7 Consultant Service", available: false },
      ],
      buttonText: "Buy This",
      buttonLink: "#",
      delay: "200",
    },
    {
      id: 3,
      price: "$2600",
      period: "/year",
      preTitle: "Starter Package",
      title: "Premium Plan",
      features: [
        { name: "Business Solution", available: true },
        { name: "24/7 Consultant Service", available: true },
        { name: "Great Customer Support", available: true },
        { name: "Market Growth Solution", available: true },
        { name: "24/7 Consultant Service", available: false },
      ],
      buttonText: "Buy This",
      buttonLink: "#",
      delay: "300",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      if (titleRef.current) {
        const split = new SplitText(titleRef.current, {
          type: "chars",
          linesClass: "split-line"
        });

        gsap.set(split.chars, {
          opacity: 0,
          x: 50
        });

        gsap.to(split.chars, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.02
        });
      }

      // Pre-title animation
      gsap.from(".pre", {
        scrollTrigger: {
          trigger: ".pre",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
      });

      // Pricing cards animation - slide from bottom to top
      gsap.from(".pricing-wrapper-one", {
        scrollTrigger: {
          trigger: ".pricing-wrapper-one",
          start: "top 85%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Tab buttons animation (optional - remove if you don't want tabs animated)
      gsap.from(".pricing-tab-button-area", {
        scrollTrigger: {
          trigger: ".pricing-tab-button-area",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Re-run animations when tab changes
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();
      
      // Get current visible cards and animate them
      const visibleCards = containerRef.current.querySelectorAll('.pricing-wrapper-one');
      
      // Reset any existing animations on these cards
      gsap.killTweensOf(visibleCards);
      
      // Set initial state
      gsap.set(visibleCards, {
        y: 100,
        opacity: 0
      });
      
      // Animate them in
      gsap.to(visibleCards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.1
      });
    }, 50);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Helper to add cards to ref array
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div 
      className="rts-pricing-area-one rts-section-gap"
      ref={containerRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pricing-three-title-area">
              <div className="title-style-one left">
                <span className="pre">Price Table</span>
                <h2 
                  className="title rts-text-anime-style-1"
                  ref={titleRef}
                >
                  Pricing & Plans
                </h2>
              </div>

              <div className="pricing-tab-button-area">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "monthly" ? "active" : ""}`}
                      onClick={() => handleTabChange("monthly")}
                    >
                      Monthly Plan
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === "yearly" ? "active" : ""}`}
                      onClick={() => handleTabChange("yearly")}
                    >
                      Yearly Plan
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt--100">
          <div className="col-12">
            <div className="tab-content">
              {/* Monthly Tab Pane */}
              <div
                className={`tab-pane fade ${activeTab === "monthly" ? "show active" : ""}`}
              >
                <div className="row g-5">
                  {monthlyPlans.map((plan, index) => (
                    <div
                      key={plan.id}
                      className="col-lg-4 col-md-6 col-sm-12 col-12"
                    >
                      <div 
                        className="pricing-wrapper-one"
                        ref={addToCardsRef}
                      >
                        <div className="plane-process">
                          <span>{plan.period}</span>
                          <h3 className="title">{plan.price}</h3>
                        </div>

                        <div className="pricing-header-start">
                          <span className="pre-title">{plan.preTitle}</span>
                          <h4 className="title">{plan.title}</h4>
                        </div>

                        <div className="pricing-body">
                          {plan.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className={`single-pricing ${feature.available ? "available" : ""}`}
                            >
                              <div className="icon">
                                <FaCircleCheck
                                  style={{
                                    color: "#09637E",
                                    fontSize: "20px",
                                  }}
                                />
                              </div>
                              <span className="price-details">
                                {feature.name}
                              </span>
                            </div>
                          ))}

                          <a
                            className="rts-btn btn-primary"
                            href={plan.buttonLink}
                          >
                            {plan.buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yearly Tab Pane */}
              <div
                className={`tab-pane fade ${activeTab === "yearly" ? "show active" : ""}`}
              >
                <div className="row g-5">
                  {yearlyPlans.map((plan, index) => (
                    <div
                      key={plan.id}
                      className="col-lg-4 col-md-6 col-sm-12 col-12"
                    >
                      <div 
                        className="pricing-wrapper-one"
                        ref={addToCardsRef}
                      >
                        <div className="plane-process">
                          <span>{plan.period}</span>
                          <h3 className="title">{plan.price}</h3>
                        </div>

                        <div className="pricing-header-start">
                          <span className="pre-title">{plan.preTitle}</span>
                          <h4 className="title">{plan.title}</h4>
                        </div>

                        <div className="pricing-body">
                          {plan.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className={`single-pricing ${feature.available ? "available" : ""}`}
                            >
                              <div className="icon">
                                <FaCircleCheck
                                  style={{
                                    color: "#09637E",
                                    fontSize: "20px",
                                  }}
                                />
                              </div>
                              <span className="price-details">
                                {feature.name}
                              </span>
                            </div>
                          ))}

                          <a
                            className="rts-btn btn-primary"
                            href={plan.buttonLink}
                          >
                            {plan.buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;