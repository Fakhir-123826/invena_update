// components/AboutSec.jsx
import React, { useRef, useEffect } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export const AboutSec = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const progressCircleRef = useRef(null);
  const progressTextRef = useRef(null);

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

      // Description animation
      gsap.from(".disc", {
        scrollTrigger: {
          trigger: ".disc",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
      });

      // Call area animation
      gsap.from(".call-area", {
        scrollTrigger: {
          trigger: ".call-area",
          start: "top 90%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4
      });

      // Sign area animation
      gsap.from(".sign-area", {
        scrollTrigger: {
          trigger: ".sign-area",
          start: "top 90%",
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4
      });

      // Button animation
      gsap.from(".rts-btn", {
        scrollTrigger: {
          trigger: ".rts-btn",
          start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: "back.out(1.7)"
      });

      // Thumbnail images animation
      gsap.from(".single-thumbnail", {
        scrollTrigger: {
          trigger: ".about-6-thumbnail-left-wrapper",
          start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Progress circle animation
      if (progressCircleRef.current) {
        const circle = progressCircleRef.current.querySelector('.bar--animated');
        const text = progressTextRef.current;
        
        if (circle && text) {
          const radius = 35;
          const circumference = 2 * Math.PI * radius;
          const targetValue = 80;
          const offset = circumference - (targetValue / 100) * circumference;

          gsap.set(circle, {
            strokeDasharray: circumference,
            strokeDashoffset: circumference
          });

          gsap.set(text, {
            innerHTML: "0%"
          });

          gsap.to(circle, {
            strokeDashoffset: offset,
            scrollTrigger: {
              trigger: progressCircleRef.current,
              start: "top 85%",
              once: true
            },
            duration: 2.8,
            ease: "power2.out"
          });

          let obj = { val: 0 };
          gsap.to(obj, {
            val: targetValue,
            scrollTrigger: {
              trigger: progressCircleRef.current,
              start: "top 85%",
              once: true
            },
            duration: 2.8,
            onUpdate: () => {
              if (text) {
                text.innerHTML = `${Math.floor(obj.val)}%`;
              }
            }
          });
        }
      }

      // Horizontal scroll animation for progress wrapper
      gsap.to(".images-r", {
        scrollTrigger: {
          trigger: ".about-6-thumbnail-left-wrapper",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        x: 50,
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="about" 
      className="rts-about-area-6 rts-section-gap" 
      ref={containerRef}
    >
      <div className="container pb--40">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <div className="about-6-thumbnail-left-wrapper">
              <div className="single-thumbnail ">
                <img src="/assets/about1.jpg " className="rounded" alt="about" />
              </div>
              <div className="single-thumbnail mt--40 ">
                <img src="/assets/about2.jpg " className="rounded" alt="about" />
              </div>
              <div className="progress-circle-main-wrapper">
                <div className="progress-area-wrapper images-r">
                  <div className="single-progress-circle" ref={progressCircleRef}>
                    <svg
                      className="radial-progress"
                      data-countervalue={80}
                      viewBox="0 0 80 80"
                    >
                      <circle className="bar-static" cx={40} cy={40} r={35} />
                      <circle
                        className="bar--animated"
                        cx={40}
                        cy={40}
                        r={35}
                      />
                      <text
                        ref={progressTextRef}
                        className="countervalue"
                        x="50%"
                        y="55%"
                        transform="matrix(0, 1, -1, 0, 80, 0)"
                      >
                        0%
                      </text>
                    </svg>
                  </div>
                  <h5 className="title">Business Progress</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pl--30 mt_md--100 mt_sm--100">
            <div className="about-6-inner-content-content">
              <div className="title-style-one left mb--30">
                <span className="pre">About Business</span>
                <h2
                  className="title rts-text-anime-style-1"
                  ref={titleRef}
                >
                  Smart and effective <br />
                  business agency.
                </h2>
              </div>
              <p className="disc">
                we believe in the power of collaboration and personalized
                solutions. By understanding our clients' unique needs and goals,
                we tailor our approach to deliver strategic insights, creative
                solutions.
              </p>
              <div className="call-and-sign-area">
                <div className="call-area">
                  <div className="icon">
                    <FaPhoneVolume 
                      style={{
                        color: "white",
                        fontSize: "24px",
                      }}
                    />
                  </div>
                  <div className="information">
                    <span>Call us anytime</span>
                    <a href="#">
                      <h6 className="title">+256 56778.5678</h6>
                    </a>
                  </div>
                </div>
                <div className="sign-area">
                  <img src="/assets/images/sign.svg" alt="signature" />
                </div>
              </div>
              <a className="rts-btn btn-primary" href="/about">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};