// // components/Banner.jsx
// import React, { useRef, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitText from "gsap/SplitText";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, SplitText);

// const BannerSeven = ({ id }) => {
//   const odometerRefs = useRef([]);
//   const swiperRef = useRef(null);
//   const containerRef = useRef(null);
//   const [swiperInitialized, setSwiperInitialized] = useState(false);
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

//   const bannerData = [
//     {
//       id: 1,
//       bgClass: "bg_image",
//       preTitle: "Business Success Starts Here",
//       title: "Business",
//       titleSpan: "Growth",
//       description:
//         "Maecenas quis integer aenean nisl, viverra morbi magna amet, viverra. Sollicitudin posuere scelerisque urna, urna. At vestibulum fringilla.",
//       btnText: "View Services",
//       btnLink: "/service",
//       counter: 28,
//       counterText: "Business Revenue",
//       bgImage: "/assets/images/banner/07.webp"
//     },
//     {
//       id: 2,
//       bgClass: "two",
//       preTitle: "Business Success Starts Here",
//       title: "Business",
//       titleSpan: "Growth",
//       description:
//         "Maecenas quis integer aenean nisl, viverra morbi magna amet, viverra. Sollicitudin posuere scelerisque urna, urna. At vestibulum fringilla.",
//       btnText: "View Services",
//       btnLink: "/service",
//       counter: 28,
//       counterText: "Business Revenue",
//       bgImage: "/assets/images/banner/08.webp"
//     },
//     {
//       id: 3,
//       bgClass: "three",
//       preTitle: "Business Success Starts Here",
//       title: "Business",
//       titleSpan: "Growth",
//       description:
//         "Maecenas quis integer aenean nisl, viverra morbi magna amet, viverra. Sollicitudin posuere scelerisque urna, urna. At vestibulum fringilla.",
//       btnText: "View Services",
//       btnLink: "/service",
//       counter: 28,
//       counterText: "Business Revenue",
//       bgImage: "/assets/images/banner/09.webp"
//     },
//   ];

//   // Initialize animations for the active slide
//   useEffect(() => {
//     if (!swiperInitialized) return;

//     // Small delay to ensure DOM is ready
//     const timer = setTimeout(() => {
//       animateActiveSlide();
//     }, 100);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [swiperInitialized, activeSlideIndex]);

//   const animateActiveSlide = () => {
//     // Get the active slide
//     const activeSlide = document.querySelector('.swiper-slide-active');
//     if (!activeSlide) return;

//     const ctx = gsap.context(() => {
//       // Get elements within the active slide only
//       const titleElement = activeSlide.querySelector('.title');
//       const preTitleElement = activeSlide.querySelector('.pre-title');
//       const discElement = activeSlide.querySelector('.disc');
//       const btnElement = activeSlide.querySelector('.rts-btn');
//       const counterElement = activeSlide.querySelector('.counter-area-banner-7');
//       const starElements = activeSlide.querySelectorAll('.stars-area-main i');

//       // Reset any existing animations on these elements
//       gsap.killTweensOf([titleElement, preTitleElement, discElement, btnElement, counterElement, ...starElements]);

//       // Set initial states
//       if (preTitleElement) {
//         gsap.set(preTitleElement, { y: 30, opacity: 0 });
//       }

//       if (discElement) {
//         gsap.set(discElement, { y: 30, opacity: 0 });
//       }

//       if (btnElement) {
//         gsap.set(btnElement, { scale: 0.8, opacity: 0 });
//       }

//       if (counterElement) {
//         gsap.set(counterElement, { y: 40, opacity: 0 });
//       }

//       starElements.forEach(star => {
//         gsap.set(star, { scale: 0, rotation: 180 });
//       });

//       // Text reveal animation for title
//       if (titleElement) {
//         const split = new SplitText(titleElement, {
//           type: "chars",
//           linesClass: "split-line",
//         });

//         gsap.set(split.chars, {
//           opacity: 0,
//           x: 50,
//         });

//         // Animate title chars
//         gsap.to(split.chars, {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "back.out(1.7)",
//           stagger: 0.02,
//           delay: 0.2
//         });
//       }

//       // Animate pre-title
//       if (preTitleElement) {
//         gsap.to(preTitleElement, {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: 0.1
//         });
//       }

//       // Animate description
//       if (discElement) {
//         gsap.to(discElement, {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: 0.3
//         });
//       }

//       // Animate button
//       if (btnElement) {
//         gsap.to(btnElement, {
//           scale: 1,
//           opacity: 1,
//           duration: 0.6,
//           delay: 0.5,
//           ease: "back.out(1.7)"
//         });
//       }

//       // Animate counter area
//       if (counterElement) {
//         gsap.to(counterElement, {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: 0.7
//         });
//       }

//       // Animate stars
//       if (starElements.length) {
//         gsap.to(starElements, {
//           scale: 1,
//           rotation: 0,
//           duration: 0.5,
//           stagger: 0.1,
//           delay: 0.9,
//           ease: "back.out(2)"
//         });
//       }

//     }, activeSlide);

//     return () => ctx.revert();
//   };

//   // Initialize odometer animation for the active slide
//   useEffect(() => {
//     if (!swiperInitialized) return;

//     const animateCounter = (element, targetValue) => {
//       if (!element) return;

//       // Reset counter
//       element.innerHTML = "00";

//       let obj = { val: 0 };
//       gsap.to(obj, {
//         val: targetValue,
//         duration: 2,
//         ease: "power2.out",
//         delay: 1.2, // Start after other animations
//         onUpdate: () => {
//           if (element) {
//             const value = Math.floor(obj.val);
//             element.innerHTML = value < 10 ? `0${value}` : value.toString();
//           }
//         }
//       });
//     };

//     // Get counter in active slide
//     const activeSlide = document.querySelector('.swiper-slide-active');
//     if (activeSlide) {
//       const counterElement = activeSlide.querySelector('.odometer');
//       if (counterElement) {
//         const countValue = parseInt(counterElement.getAttribute("data-count") || "0", 10);
//         animateCounter(counterElement, countValue);
//       }
//     }

//   }, [swiperInitialized, activeSlideIndex]);

//   // Handle Swiper initialization and slide change
//   const handleSwiperInit = (swiper) => {
//     swiperRef.current = swiper;
//     setSwiperInitialized(true);
//     setActiveSlideIndex(swiper.realIndex || 0);
//   };

//   const handleSlideChange = (swiper) => {
//     setActiveSlideIndex(swiper.realIndex || 0);
//   };

//   // Helper function to add to odometer refs array
//   const addToOdometerRefs = (el) => {
//     if (el && !odometerRefs.current.includes(el)) {
//       odometerRefs.current.push(el);
//     }
//   };

//   return (
//     <div
//       id={id}
//       className="banner-seven-swiper-wrapper"
//       ref={containerRef}
//     >
//       <div className="swiper mySwiper-banner-seven" dir="ltr">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={true}
//           speed={1000}
//           onInit={handleSwiperInit}
//           onSwiper={handleSwiperInit}
//           onSlideChange={handleSlideChange}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             el: ".swiper-pagination",
//             clickable: true,
//             renderBullet: function (index, className) {
//               const bulletNumber = (index + 1).toString().padStart(2, "0");
//               return '<span class="' + className + '">' + bulletNumber + "</span>";
//             },
//           }}
//           className="mySwiper-banner-seven"
//         >
//           {bannerData.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div
//                 className={`index-seven-area rts-section-gap bg_banner-seven ${item.bgClass}`}
//                 style={{
//                   backgroundImage: `url(${item.bgImage})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat'
//                 }}
//               >
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div className="banner-seven-inner-content">
//                         <span className="pre-title">
//                           <img
//                             src="/assets/images/banner/icon/01.svg"
//                             alt="banner icon"
//                             onError={(e) => {
//                               e.target.style.display = 'none';
//                             }}
//                           />
//                           {item.preTitle}
//                         </span>
//                         <h1 className="title">
//                           {item.title} <br />
//                           <span>{item.titleSpan}</span>
//                         </h1>
//                         <p className="disc">{item.description}</p>
//                         <a
//                           className="rts-btn btn-primary btn-white"
//                           href={item.btnLink}
//                         >
//                           {item.btnText}
//                         </a>
//                         <div className="counter-area-banner-7">
//                           <h2 className="counter title-counter">
//                             <span
//                               className="odometer"
//                               data-count={item.counter}
//                               ref={addToOdometerRefs}
//                             >
//                               00
//                             </span>
//                             K+
//                           </h2>
//                           <p>{item.counterText}</p>
//                           <div className="stars-area-main">
//                             <i className="fa-solid fa-star"></i>
//                             <i className="fa-solid fa-star"></i>
//                             <i className="fa-solid fa-star"></i>
//                             <i className="fa-solid fa-star"></i>
//                             <i className="fa-regular fa-star"></i>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//           <div className="swiper-pagination"></div>
//         </Swiper>
//       </div>

//       {/* Fixed elements outside swiper - No animations applied */}
//       <div className="email-area-left">
//         <i className="fa-regular fa-envelope"></i>
//         <a href="mailto:info@invema.com">info@invema.com</a>
//       </div>
//       <div className="language-area">
//         <span>en.</span>
//         <span>fr.</span>
//         <span>ge.</span>
//       </div>
//       <a href="#" className="to-bottom-area">
//         <i className="fa-light fa-arrow-up"></i>
//         Scroll
//       </a>
//     </div>
//   );
// };

// export default BannerSeven;

// // Updated components/Section/Banner.jsx - Updated with new banner images
// import React, { useRef, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitText from "gsap/SplitText";

// import "swiper/css";
// import "swiper/css/pagination";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// const BannerSeven = ({ id }) => {
//   const odometerRefs = useRef([]);
//   const swiperRef = useRef(null);
//   const containerRef = useRef(null);
//   const [swiperInitialized, setSwiperInitialized] = useState(false);
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

//   const bannerData = [
//     {
//       id: 1,
//       preTitle: "Digital Transformation Excellence",
//       title: "Transform Your",
//       titleSpan: "Business",
//       description: "Leverage cutting-edge technology to drive innovation, improve efficiency, and accelerate growth. Nex7 delivers end-to-end digital transformation solutions tailored to your unique needs.",
//       btnText: "Explore Services",
//       btnLink: "/services",
//       counter: 28,
//       counterText: "Digital Transformation Projects",
//       bgImage: "/assets/images/banner/07.webp"
//     },
//     {
//       id: 2,
//       preTitle: "Cloud & Cybersecurity",
//       title: "Secure & Scalable",
//       titleSpan: "Solutions",
//       description: "Protect your business with enterprise-grade security while scaling seamlessly with cloud-native architectures. Our experts ensure your infrastructure is both secure and agile.",
//       btnText: "Learn More",
//       btnLink: "/services/cloud",
//       counter: 98,
//       counterText: "Client Satisfaction Rate",
//       bgImage: "/assets/images/banner/08.webp"
//     },
//     {
//       id: 3,
//       preTitle: "Data & AI",
//       title: "Unlock Your",
//       titleSpan: "Data Potential",
//       description: "Harness the power of artificial intelligence and advanced analytics to gain actionable insights, predict trends, and make data-driven decisions that drive business growth.",
//       btnText: "Discover AI Solutions",
//       btnLink: "/services/data",
//       counter: 500,
//       counterText: "Data Projects Delivered",
//       bgImage: "/assets/images/banner/09.webp"
//     },
//   ];

//   useEffect(() => {
//     if (!swiperInitialized) return;

//     const timer = setTimeout(() => {
//       animateActiveSlide();
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [swiperInitialized, activeSlideIndex]);

//   const animateActiveSlide = () => {
//     const activeSlide = document.querySelector('.swiper-slide-active');
//     if (!activeSlide) return;

//     const ctx = gsap.context(() => {
//       const titleElement = activeSlide.querySelector('.title');
//       const preTitleElement = activeSlide.querySelector('.pre-title');
//       const discElement = activeSlide.querySelector('.disc');
//       const btnElement = activeSlide.querySelector('.rts-btn');
//       const counterElement = activeSlide.querySelector('.counter-area-banner-7');
//       const starElements = activeSlide.querySelectorAll('.stars-area-main i');

//       gsap.killTweensOf([titleElement, preTitleElement, discElement, btnElement, counterElement, ...starElements]);

//       if (preTitleElement) gsap.set(preTitleElement, { y: 30, opacity: 0 });
//       if (discElement) gsap.set(discElement, { y: 30, opacity: 0 });
//       if (btnElement) gsap.set(btnElement, { scale: 0.8, opacity: 0 });
//       if (counterElement) gsap.set(counterElement, { y: 40, opacity: 0 });
//       starElements.forEach(star => gsap.set(star, { scale: 0, rotation: 180 }));

//       if (titleElement) {
//         const split = new SplitText(titleElement, { type: "chars", linesClass: "split-line" });
//         gsap.set(split.chars, { opacity: 0, x: 50 });
//         gsap.to(split.chars, {
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "back.out(1.7)",
//           stagger: 0.02,
//           delay: 0.2
//         });
//       }

//       if (preTitleElement) gsap.to(preTitleElement, { y: 0, opacity: 1, duration: 0.8, delay: 0.1 });
//       if (discElement) gsap.to(discElement, { y: 0, opacity: 1, duration: 0.8, delay: 0.3 });
//       if (btnElement) gsap.to(btnElement, { scale: 1, opacity: 1, duration: 0.6, delay: 0.5, ease: "back.out(1.7)" });
//       if (counterElement) gsap.to(counterElement, { y: 0, opacity: 1, duration: 0.8, delay: 0.7 });
//       if (starElements.length) gsap.to(starElements, { scale: 1, rotation: 0, duration: 0.5, stagger: 0.1, delay: 0.9, ease: "back.out(2)" });
//     }, activeSlide);

//     return () => ctx.revert();
//   };

//   useEffect(() => {
//     if (!swiperInitialized) return;

//     const animateCounter = (element, targetValue) => {
//       if (!element) return;
//       element.innerHTML = "00";
//       let obj = { val: 0 };
//       gsap.to(obj, {
//         val: targetValue,
//         duration: 2,
//         ease: "power2.out",
//         delay: 1.2,
//         onUpdate: () => {
//           if (element) {
//             const value = Math.floor(obj.val);
//             element.innerHTML = value < 10 ? `0${value}` : value.toString();
//           }
//         }
//       });
//     };

//     const activeSlide = document.querySelector('.swiper-slide-active');
//     if (activeSlide) {
//       const counterElement = activeSlide.querySelector('.odometer');
//       if (counterElement) {
//         const countValue = parseInt(counterElement.getAttribute("data-count") || "0", 10);
//         animateCounter(counterElement, countValue);
//       }
//     }
//   }, [swiperInitialized, activeSlideIndex]);

//   const handleSwiperInit = (swiper) => {
//     swiperRef.current = swiper;
//     setSwiperInitialized(true);
//     setActiveSlideIndex(swiper.realIndex || 0);
//   };

//   const handleSlideChange = (swiper) => {
//     setActiveSlideIndex(swiper.realIndex || 0);
//   };

//   const addToOdometerRefs = (el) => {
//     if (el && !odometerRefs.current.includes(el)) {
//       odometerRefs.current.push(el);
//     }
//   };

//   return (
//     <div id={id} className="banner-seven-swiper-wrapper" ref={containerRef}>
//       <div className="swiper mySwiper-banner-seven" dir="ltr">
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={true}
//           speed={1000}
//           onInit={handleSwiperInit}
//           onSwiper={handleSwiperInit}
//           onSlideChange={handleSlideChange}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           pagination={{
//             el: ".swiper-pagination",
//             clickable: true,
//             renderBullet: function (index, className) {
//               const bulletNumber = (index + 1).toString().padStart(2, "0");
//               return '<span class="' + className + '">' + bulletNumber + "</span>";
//             },
//           }}
//           className="mySwiper-banner-seven"
//         >
//           {bannerData.map((item) => (
//             <SwiperSlide key={item.id}>
//               <div
//                 className={`index-seven-area rts-section-gap bg_banner-seven`}
//                 style={{
//                   backgroundImage: `url(${item.bgImage})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat'
//                 }}
//               >
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div className="banner-seven-inner-content">
//                         <span className="pre-title">
//                           <img src="/assets/images/banner/icon/01.svg" alt="banner icon" onError={(e) => { e.target.style.display = 'none'; }} />
//                           {item.preTitle}
//                         </span>
//                         <h1 className="title">
//                           {item.title} <br />
//                           <span>{item.titleSpan}</span>
//                         </h1>
//                         <p className="disc">{item.description}</p>
//                         <a className="rts-btn btn-primary btn-white" href={item.btnLink}>
//                           {item.btnText}
//                         </a>
//                         <div className="counter-area-banner-7">
//                           <h2 className="counter title-counter">
//                             <span className="odometer" data-count={item.counter} ref={addToOdometerRefs}>00</span>+
//                           </h2>
//                           <p>{item.counterText}</p>
//                           <div className="stars-area-main">
//                             <i className="fa-solid fa-star"></i>
//                             <i className="fa-solid fa-star"></i>
//                             <i className="fa-solid fa-star"></i>
//                             <i className="fa-solid fa-star"></i>
//                             <i className="fa-regular fa-star"></i>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//           <div className="swiper-pagination"></div>
//         </Swiper>
//       </div>

//       <div className="email-area-left">
//         <i className="fa-regular fa-envelope"></i>
//         <a href="mailto:info@nex7.com">info@nex7.com</a>
//       </div>
//       <div className="language-area">
//         <span>en.</span>
//         <span>fr.</span>
//         <span>ge.</span>
//       </div>
//       <a href="#" className="to-bottom-area">
//         <i className="fa-light fa-arrow-up"></i>
//         Scroll
//       </a>
//     </div>
//   );
// };

// export default BannerSeven;

// Updated components/section/Banner.jsx - Responsive with attractive animations
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger, SplitText);

const BannerSeven = ({ id }) => {
  const odometerRefs = useRef([]);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [swiperInitialized, setSwiperInitialized] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const bannerData = [
    {
      id: 1,
      preTitle: "Digital Transformation Excellence",
      title: "Transform Your",
      titleSpan: "Business",
      description:
        "Leverage cutting-edge technology to drive innovation, improve efficiency, and accelerate growth. Nex7 delivers end-to-end digital transformation solutions tailored to your unique needs.",
      btnText: "Explore Services",
      btnLink: "/services",
      counter: 28,
      counterText: "Digital Transformation Projects",
      bgImage: "/assets/banner1.jpg",
    },
    {
      id: 2,
      preTitle: "Cloud & Cybersecurity",
      title: "Secure & Scalable",
      titleSpan: "Solutions",
      description:
        "Protect your business with enterprise-grade security while scaling seamlessly with cloud-native architectures. Our experts ensure your infrastructure is both secure and agile.",
      btnText: "Learn More",
      btnLink: "/services/cloud",
      counter: 98,
      counterText: "Client Satisfaction Rate",
      bgImage: "/assets/banner2.jpg",
    },
    {
      id: 3,
      preTitle: "Data & AI",
      title: "Unlock Your",
      titleSpan: "Data Potential",
      description:
        "Harness the power of artificial intelligence and advanced analytics to gain actionable insights, predict trends, and make data-driven decisions that drive business growth.",
      btnText: "Discover AI Solutions",
      btnLink: "/services/data",
      counter: 500,
      counterText: "Data Projects Delivered",
      bgImage: "/assets/banner3.jpg",
    },
  ];

  useEffect(() => {
    if (!swiperInitialized) return;

    const timer = setTimeout(() => {
      animateActiveSlide();
    }, 100);

    return () => clearTimeout(timer);
  }, [swiperInitialized, activeSlideIndex]);

  const animateActiveSlide = () => {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (!activeSlide) return;

    const ctx = gsap.context(() => {
      const titleElement = activeSlide.querySelector(".title");
      const preTitleElement = activeSlide.querySelector(".pre-title");
      const discElement = activeSlide.querySelector(".disc");
      const btnElement = activeSlide.querySelector(".rts-btn");
      const counterElement = activeSlide.querySelector(
        ".counter-area-banner-7",
      );
      const starElements = activeSlide.querySelectorAll(".stars-area-main i");

      gsap.killTweensOf([
        titleElement,
        preTitleElement,
        discElement,
        btnElement,
        counterElement,
        ...starElements,
      ]);

      if (preTitleElement) gsap.set(preTitleElement, { y: 30, opacity: 0 });
      if (discElement) gsap.set(discElement, { y: 30, opacity: 0 });
      if (btnElement) gsap.set(btnElement, { scale: 0.8, opacity: 0 });
      if (counterElement) gsap.set(counterElement, { y: 40, opacity: 0 });
      starElements.forEach((star) =>
        gsap.set(star, { scale: 0, rotation: 180 }),
      );

      if (titleElement) {
        const split = new SplitText(titleElement, {
          type: "chars",
          linesClass: "split-line",
        });
        gsap.set(split.chars, { opacity: 0, x: 50 });
        gsap.to(split.chars, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.02,
          delay: 0.2,
        });
      }

      if (preTitleElement)
        gsap.to(preTitleElement, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
        });
      if (discElement)
        gsap.to(discElement, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
        });
      if (btnElement)
        gsap.to(btnElement, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.5,
          ease: "back.out(1.7)",
        });
      if (counterElement)
        gsap.to(counterElement, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.7,
          ease: "power3.out",
        });
      if (starElements.length)
        gsap.to(starElements, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.9,
          ease: "back.out(2)",
        });
    }, activeSlide);

    return () => ctx.revert();
  };

  useEffect(() => {
    if (!swiperInitialized) return;

    const animateCounter = (element, targetValue) => {
      if (!element) return;
      element.innerHTML = "00";
      let obj = { val: 0 };
      gsap.to(obj, {
        val: targetValue,
        duration: 2,
        ease: "power2.out",
        delay: 1.2,
        onUpdate: () => {
          if (element) {
            const value = Math.floor(obj.val);
            element.innerHTML = value < 10 ? `0${value}` : value.toString();
          }
        },
      });
    };

    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) {
      const counterElement = activeSlide.querySelector(".odometer");
      if (counterElement) {
        const countValue = parseInt(
          counterElement.getAttribute("data-count") || "0",
          10,
        );
        animateCounter(counterElement, countValue);
      }
    }
  }, [swiperInitialized, activeSlideIndex]);

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setSwiperInitialized(true);
    setActiveSlideIndex(swiper.realIndex || 0);
  };

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex || 0);
  };

  const addToOdometerRefs = (el) => {
    if (el && !odometerRefs.current.includes(el)) {
      odometerRefs.current.push(el);
    }
  };

  return (
    <div id={id} className="banner-seven-swiper-wrapper" ref={containerRef}>
      <div className="swiper mySwiper-banner-seven" dir="ltr">
        <Swiper
          // modules={[Pagination, Autoplay]}
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          // loop={true}
          // speed={1000}
          onInit={handleSwiperInit}
          onSwiper={handleSwiperInit}
          onSlideChange={handleSlideChange}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              const bulletNumber = (index + 1).toString().padStart(2, "0");
              return (
                '<span class="' + className + '">' + bulletNumber + "</span>"
              );
            },
          }}
          className="mySwiper-banner-seven"
        >
          {bannerData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={`index-seven-area rts-section-gap bg_banner-seven`}
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="banner-overlay"></div>
                <div className="fluid-container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="banner-seven-inner-content">
                        <span className="pre-title">
                          <img
                            src="/assets/images/banner/icon/01.svg"
                            alt="banner icon"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                          {item.preTitle}
                        </span>
                        <h1 className="title">
                          {item.title} <br />
                          <span>{item.titleSpan}</span>
                        </h1>
                        <p className="disc">{item.description}</p>
                        <a
                          className="rts-btn btn-primary btn-white"
                          href={item.btnLink}
                        >
                          {item.btnText}
                        </a>
                        <div className="counter-area-banner-7">
                          <h2 className="counter title-counter">
                            <span
                              className="odometer"
                              data-count={item.counter}
                              ref={addToOdometerRefs}
                            >
                              00
                            </span>
                            +
                          </h2>
                          <p>{item.counterText}</p>
                          <div className="stars-area-main">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>

      <div className="email-area-left">
        <i className="fa-regular fa-envelope"></i>
        <a href="mailto:info@nex7.com">info@nex7.com</a>
      </div>
      <div className="language-area">
        <span>en.</span>
        <span>fr.</span>
        <span>ge.</span>
      </div>
      <a href="#" className="to-bottom-area">
        <i className="fa-light fa-arrow-up"></i>
        Scroll
      </a>
    </div>
  );
};

export default BannerSeven;
