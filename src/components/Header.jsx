// // components/Header.jsx
// import React, { useState, useEffect, useRef } from "react";

// const Header = ({ onMenuClick, isMenuOpen }) => {
//   const [isSticky, setIsSticky] = useState(false);
//   const ticking = useRef(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ticking.current) {
//         window.requestAnimationFrame(() => {
//           const scrollPosition = window.scrollY;

//           // Add sticky class when scroll down to 120px
//           if (scrollPosition >= 120) {
//             setIsSticky(true);
//           }
//           // Remove sticky class when scroll up to 110px or less
//           else if (scrollPosition <= 110) {
//             setIsSticky(false);
//           }

//           ticking.current = false;
//         });

//         ticking.current = true;
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <header
//       className={`header-transparent header-seven header--sticky ${isSticky ? "sticky" : ""}`}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="header-transparent-main-wrapper">
//               <a className="logo" href="/">
//                 <img
//                   src="assets/images/logo/Nex7-logo.png"
//                   alt="index"
//                   style={{
//                     width: "200px",
//                     height: "70px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </a>
//               <div className="nav-area">
//                 <ul>
//                   <li className="main-nav mega-menu project-a-after">
//                     <a href="#home">Home</a>
//                   </li>
//                   <li className="main-nav mega-menu">
//                     <a href="#about">About</a>
//                   </li>
//                   <li className="main-nav mega-menu">
//                     <a href="#service">Service</a>
//                   </li>
//                   <li className="main-nav mega-menu">
//                     <a href="#project">Project</a>
//                   </li>
//                   <li className="main-nav project-a-after">
//                     <a href="#blog">Blog</a>
//                   </li>
//                   <li className="main-nav">
//                     <a href="#contact">Contact</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="action-area">
//                 <a
//                   className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
//                   href="/contact"
//                 >
//                   Get Quote
//                 </a>
//                 <button
//                   id="menu-btn"
//                   className={`menu-btn menu ml--20 ml_sm--5 ${isMenuOpen ? "active" : ""}`}
//                   onClick={onMenuClick}
//                 >
//                   <img
//                     className="menu-light"
//                     src="/assets/images/icons/01.svg"
//                     alt="Menu-icon"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ onMenuClick, isMenuOpen }) => {
  const [isSticky, setIsSticky] = useState(false);
  const ticking = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;

          if (scrollPosition >= 120) {
            setIsSticky(true);
          } else if (scrollPosition <= 110) {
            setIsSticky(false);
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (e, path, sectionId) => {
    e.preventDefault();

    // If we're not on the home page, navigate to home page first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`header-transparent header-seven header--sticky 
      ${isSticky ? "sticky" : ""} 
      ${!isHome ? "no--home" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-transparent-main-wrapper">
              <Link className="logo" to="/">
                <img
                  src="assets/images/logo/Nex7-logo.png"
                  alt="index"
                  style={{
                    width: "200px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />
              </Link>
              <div className="nav-area">
                <ul>
                  <li className="main-nav mega-menu project-a-after">
                    <a
                      href="/"
                      onClick={(e) => handleNavigation(e, "/", "home")}
                    >
                      Home
                    </a>
                  </li>
                  <li className="main-nav mega-menu">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="main-nav mega-menu">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="main-nav mega-menu">
                    <Link to="/case-studies">Case Studies</Link>
                  </li>
                  <li className="main-nav project-a-after">
                    <Link to="/insights">Insights</Link>
                  </li>
                  <li className="main-nav">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="action-area">
                <Link
                  className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
                  to="/contact"
                >
                  Get Quote
                </Link>
                <button
                  id="menu-btn"
                  className={`menu-btn menu ml--20 ml_sm--5 ${isMenuOpen ? "active" : ""}`}
                  onClick={onMenuClick}
                >
                  <img
                    className="menu-light"
                    src="/assets/images/icons/01.svg"
                    alt="Menu-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
