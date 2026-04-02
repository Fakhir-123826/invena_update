// // App.jsx
// import React, { useState } from "react";
// import Header from "./components/Header";
// import "./Bootstrap.css";
// import "./Style.css";
// import { Sidebar } from "./components/Sidebar";
// import AnywhereHome from "./components/AnywhereHome";
// import BannerSeven from "./components/section/Banner";
// import SmoothScroll from "./components/SmoothScroll";
// import { AboutSec } from "./components/section/AboutSec";
// import { Cta } from "./components/section/Cta";
// import Services from "./components/section/Services";
// import HowWeWork from "./components/section/HowWeWork";
// import Projects from "./components/section/ProjectsData";
// import TrustedClients from "./components/section/TrustedClients";
// import Pricing from "./components/section/Pricing";
// import Testimonials from "./components/section/Testimonials";
// import Appointment from "./components/section/Appointment";
// import Blog from "./components/section/Blog";
// import CtaBottom from "./components/section/CtaBottom";
// import Footer from "./components/Footer";
// import BackToTop from "./components/BackToTop";

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     // Prevent body scroll when menu is open
//     if (!isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//     document.body.style.overflow = 'unset';
//   };

//   return (
//     <SmoothScroll>
//       <div className="page-wrapper radious-none-button">
//         <Header onMenuClick={toggleMenu} isMenuOpen={isMenuOpen} />
//         <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
//         <AnywhereHome onClick={closeMenu} isMenuOpen={isMenuOpen} />
//         <BannerSeven />
//         <AboutSec/>
//         <Cta/>
//         <Services/>
//         <HowWeWork/>
//         <Projects/>
//         <TrustedClients/>
//         <Pricing/>
//         <Testimonials/>
//         <Appointment/>
//         <Blog/>
//         <CtaBottom/>
//         <Footer/>
//         {/* <BackToTop/> */}
//       </div>
//     </SmoothScroll>
//   );
// }

// export default App;


// App.jsx - Main application with routing
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Bootstrap.css";
import "./Style.css";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import AnywhereHome from "./components/AnywhereHome";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Page Components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import IndustryDetail from "./pages/IndustryDetail";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BlogDetail from "./pages/BlogDetail";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <Router>
      <SmoothScroll>
        <div className="page-wrapper radious-none-button">
          <Header onMenuClick={toggleMenu} isMenuOpen={isMenuOpen} />
          <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
          <AnywhereHome onClick={closeMenu} isMenuOpen={isMenuOpen} />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:industryId" element={<IndustryDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:caseId" element={<CaseStudyDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:blogId" element={<BlogDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          <Footer />
          <BackToTop />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;