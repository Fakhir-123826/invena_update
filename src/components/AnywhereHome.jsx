// components/AnywhereHome.jsx
import React from "react";

const AnywhereHome = ({ onClick, isMenuOpen }) => {
  return (
    <div 
      id="anywhere-home" 
      className={isMenuOpen ? 'bgshow' : ''}
      onClick={onClick}
    ></div>
  );
};

export default AnywhereHome;