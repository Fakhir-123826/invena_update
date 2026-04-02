// components/HowWeWork.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const HowWeWork = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  
  const processSteps = [
    {
      id: 1,
      number: "01",
      icon: "/assets/images/process/icon/01.svg",
      title: "Client Discovery",
      description: "The agency begins by understanding the client's needs, goals, and"
    },
    {
      id: 2,
      number: "02",
      icon: "/assets/images/process/icon/02.svg",
      title: "Research & Analysis",
      description: "The agency begins by understanding the client's needs, goals, and"
    },
    {
      id: 3,
      number: "03",
      icon: "/assets/images/process/icon/03.svg",
      title: "Strategy Development",
      description: "The agency begins by understanding the client's needs, goals, and"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation only
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

      // NO animations on process steps or thumbnail - they remain static

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      className="working-process-one bg-main rts-section-gap without-clip-radious"
      ref={containerRef}
    >
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="title-style-one">
              <span className="pre">How we works</span>
              <h2
                className="title rts-text-anime-style-1"
                ref={titleRef}
              >
                Easy 3 Steps To Work
              </h2>
            </div>

            <div className="working-process-main-wrapper mt--60">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className="single-working-process-one"
                >
                  <div className="left">
                    <div className="icon">
                      <img src={step.icon} alt={`process-${step.id}`} />
                    </div>
                  </div>
                  <div className="inner-content">
                    <div className="number-main">
                      <span className="number">{step.number}</span>
                    </div>
                    <h5 className="title">{step.title}</h5>
                    <p className="disc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="thumbnail-working-procss-one">
              <img
                src="/assets/steps.jpg"
                alt="working-process"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;