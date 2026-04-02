// components/BackToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoChevronUpOutline } from "react-icons/io5";

const BackToTop = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateProgress = () => {
      const winScroll = window.scrollY;
      const doc = document.documentElement;

      const height = doc.scrollHeight - window.innerHeight;

      let scrolled = (winScroll / height) * 100;

      // Detect if at bottom
      if (window.innerHeight + winScroll >= doc.scrollHeight - 1) {
        scrolled = 100;
      }

      setProgress(scrolled);
      setIsVisible(winScroll > 300);
    };

    window.addEventListener("scroll", calculateProgress);

    return () => {
      window.removeEventListener("scroll", calculateProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate circle dash offset
  const circleCircumference = 2 * Math.PI * 45; // radius = 45
  const dashOffset =
    circleCircumference - (progress / 100) * circleCircumference;

  return (
    <div
      className={`progress-wrap ${isVisible ? "active-progress" : ""}`}
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s ease, visibility 0.3s ease",
      }}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            fill: "none",
            stroke: "#007bff",
            strokeWidth: "3",
            strokeDasharray: circleCircumference,
            strokeDashoffset: dashOffset,
            transition: "stroke-dashoffset 0.1s linear",
          }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "18px",
          color: "#007bff",
        }}
      >
        <FaArrowUp />
      </div>
    </div>
    
  );
};

export default BackToTop;
