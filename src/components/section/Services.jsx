// components/Services.jsx
import React, { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const Services = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title text reveal animation
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

      // Pre-title animation only
      gsap.from(".pre", {
        scrollTrigger: {
          trigger: ".pre",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8
      });

      // NO animations on sticky statements - they remain static
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="service" 
      className="rts-latest-service-area rts-section-gap" 
      ref={containerRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-one center">
              <span className="pre">Our Latest Services</span>
              <h2
                className="title rts-text-anime-style-1"
                ref={titleRef}
                style={{ perspective: 400 }}
              >
                Service We Provide
              </h2>
            </div>
          </div>
          <div className="col-lg-12 mt--50">
            <section className="main-wrapper-sticky">
              <div className="sticky-statement">
                <div className="left-side">
                  <div className="icon">
                    <img src="/assets/images/img12.svg" alt="service" />
                  </div>
                  <h5 className="title">Business Solution</h5>
                </div>
                <div className="right">
                  <p className="disc">
                    comprehensive set of strategies, tools, technologies, and
                    processes challenges, optimize operations, and drive
                    business growth.
                  </p>
                  <a href="#" className="arrow">
                    <FaArrowRight style={{color: "#ffffff", fontSize: "24px"}} />
                  </a>
                </div>
              </div>
              <div className="sticky-statement">
                <div className="left-side">
                  <div className="icon">
                    <img src="/assets/images/img13.svg" alt="service" />
                  </div>
                  <h5 className="title">Creative Ideas</h5>
                </div>
                <div className="right">
                  <p className="disc">
                    comprehensive set of strategies, tools, technologies, and
                    processes challenges, optimize operations, and drive
                    business growth.
                  </p>
                  <a href="#" className="arrow">
                    <FaArrowRight style={{color: "#ffffff", fontSize: "24px"}} />
                  </a>
                </div>
              </div>
              <div className="sticky-statement">
                <div className="left-side">
                  <div className="icon">
                    <img src="/assets/images/img14.svg" alt="service" />
                  </div>
                  <h5 className="title">Market Research</h5>
                </div>
                <div className="right">
                  <p className="disc">
                    comprehensive set of strategies, tools, technologies, and
                    processes challenges, optimize operations, and drive
                    business growth.
                  </p>
                  <a href="#" className="arrow">
                    <FaArrowRight style={{color: "#ffffff", fontSize: "24px"}} />
                  </a>
                </div>
              </div>
              <div className="sticky-statement">
                <div className="left-side">
                  <div className="icon">
                    <img src="/assets/images/01.svg" alt="service" />
                  </div>
                  <h5 className="title">Technology Solution</h5>
                </div>
                <div className="right">
                  <p className="disc">
                    comprehensive set of strategies, tools, technologies, and
                    processes challenges, optimize operations, and drive
                    business growth.
                  </p>
                  <a href="#" className="arrow">
                    <FaArrowRight style={{color: "#ffffff", fontSize: "24px"}} />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;