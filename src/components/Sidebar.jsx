// // components/Sidebar.jsx
// import React, { useEffect } from "react";
// import { FaTimes } from "react-icons/fa";

// export const Sidebar = ({ isOpen, onClose }) => {
//   // Handle escape key press
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape" && isOpen) {
//         onClose();
//       }
//     };

//     window.addEventListener("keydown", handleEsc);

//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, [isOpen, onClose]);

//   return (
//     <div
//       id="side-bar"
//       className={`side-bar header-two ${isOpen ? "show" : ""}`}
//       style={{
//         visibility: isOpen ? "visible" : "hidden",
//         transform: isOpen ? "translateX(0)" : "translateX(100%)",
//         transition: "transform 0.3s ease-in-out, visibility 0.3s ease",
//       }}
//     >
//       <button className="close-icon-menu" title="Close menu" onClick={onClose}>
//         <i>
//           <FaTimes />
//         </i>
//       </button>
//       <div className="rts-sidebar-menu-desktop">
//         <a className="logo-1" href="/">
//           <img
//             src="assets/images/logo/Nex7-logo.png"
//             alt="index"
//             style={{
//               width: "200px",
//               height: "70px",
//               objectFit: "contain",
//             }}
//           />
//         </a>
//         <div className="body d-none d-xl-block">
//           <p className="disc">
//             We must explain to you how all seds this mistakens idea denouncing
//             pleasures and praising account. All seds this mistakens idea
//             denouncing pleasures.
//           </p>
//           <div className="get-in-touch">
//             <div className="h6 title">Get In Touch</div>
//             <div className="wrapper">
//               <div className="single">
//                 <i className="fas fa-phone-alt" />
//                 <a href="#">+8801234566789</a>
//               </div>
//               <div className="single">
//                 <i className="fas fa-envelope" />
//                 <a href="#">example@gmail.com</a>
//               </div>
//               <div className="single">
//                 <i className="fas fa-globe" />
//                 <a href="#">www.webexample.com</a>
//               </div>
//               <div className="single">
//                 <i className="fas fa-map-marker-alt" />
//                 <a href="#">13/A, New Pro State, NYC</a>
//               </div>
//             </div>
//             <div className="social-wrapper-two menu">
//               <a href="#">
//                 <i className="fab fa-facebook-f" />
//               </a>
//               <a href="#">
//                 <i className="fab fa-twitter" />
//               </a>
//               <a href="#">
//                 <i className="fab fa-instagram" />
//               </a>
//               <a href="#">
//                 <i className="fab fa-linkedin" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mobile-menu d-block d-xl-none">
//         <nav className="nav-main mainmenu-nav mt--30">
//           <ul className="mainmenu" id="mobile-menu-active">
//             <li>
//               <a href="#home" className="main" onClick={onClose}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="main" onClick={onClose}>
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#service" className="main" onClick={onClose}>
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#project" className="main" onClick={onClose}>
//                 Project
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="main" onClick={onClose}>
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//         <div className="social-wrapper-one">
//           <ul>
//             <li>
//               <a href="#">
//                 <i className="fa-brands fa-facebook-f" />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fa-brands fa-twitter" />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fa-brands fa-youtube" />
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fa-brands fa-linkedin-in" />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };



// components/Sidebar.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const Sidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleNavClick = () => {
    onClose();
  };

  return (
    <div
      id="side-bar"
      className={`side-bar header-two ${isOpen ? "show" : ""}`}
      style={{
        visibility: isOpen ? "visible" : "hidden",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out, visibility 0.3s ease",
      }}
    >
      <button className="close-icon-menu" title="Close menu" onClick={onClose}>
        <i>
          <FaTimes />
        </i>
      </button>
      <div className="rts-sidebar-menu-desktop">
        <Link className="logo-1" to="/" onClick={handleNavClick}>
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
        <div className="body d-none d-xl-block">
          <p className="disc">
            We help businesses transform through innovative technology solutions, 
            delivering measurable results and sustainable growth.
          </p>
          <div className="get-in-touch">
            <div className="h6 title">Get In Touch</div>
            <div className="wrapper">
              <div className="single">
                <i className="fas fa-phone-alt" />
                <a href="tel:+18881234567">+1 (888) 123-4567</a>
              </div>
              <div className="single">
                <i className="fas fa-envelope" />
                <a href="mailto:info@nex7.com">info@nex7.com</a>
              </div>
              <div className="single">
                <i className="fas fa-map-marker-alt" />
                <a href="#">123 Fifth Avenue, New York, NY</a>
              </div>
            </div>
            <div className="social-wrapper-two menu">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu d-block d-xl-none">
        <nav className="nav-main mainmenu-nav mt--30">
          <ul className="mainmenu" id="mobile-menu-active">
            <li>
              <Link to="/" className="main" onClick={handleNavClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="main" onClick={handleNavClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="main" onClick={handleNavClick}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="main" onClick={handleNavClick}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/insights" className="main" onClick={handleNavClick}>
                Insights
              </Link>
            </li>
            <li>
              <Link to="/careers" className="main" onClick={handleNavClick}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="main" onClick={handleNavClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social-wrapper-one">
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};