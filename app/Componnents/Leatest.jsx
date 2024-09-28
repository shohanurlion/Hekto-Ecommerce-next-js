"use client"
import React from 'react'
import { useState } from "react";
import Carttwo from './Carttwo';
import Cartone from './Cartone';
const Leatest = () => {
   // State to track which section is currently active
   const [activeSection, setActiveSection] = useState("home");

   // Function to handle navigation click
   const handleNavClick = (section) => {
     setActiveSection(section);
   };
  return (
   <>
 <div>
      {/* Navbar */}
      <nav className="nav flex item justify-center">
        <button onClick={() => handleNavClick("home")} className={`nav-link ${activeSection === "home" ? "active" : ""}`}>
        New Arrival
        </button>
        <button onClick={() => handleNavClick("service")} className={`nav-link ${activeSection === "service" ? "active" : ""}`}>
        Best Seller
        </button>
        <button onClick={() => handleNavClick("products")} className={`nav-link ${activeSection === "products" ? "active" : ""}`}>
        Featured
        </button>
        <button onClick={() => handleNavClick("special")} className={`nav-link ${activeSection === "special" ? "active" : ""}`}>
        Special Offer
        </button>
      </nav>

      {/* Section Content */}
      <div className="content">
        {activeSection === "home" && (
          <div>
          <Carttwo/>
          </div>
        )}
        {activeSection === "service" && (
          <div>
           <Cartone/>
          </div>
        )}
        {activeSection === "products" && (
          <div>
           <Carttwo/>
          </div>
        )}
         {activeSection === "special" && (
          <div>
          <Carttwo/>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        .nav-link {
          border: none;
          cursor: pointer;
        }
        .nav-link.active {
          border-bottom: 1px solid #FB2E86;
          color: #FB2E86;
        }
      `}</style>
    </div>
   </>
  )
}

export default Leatest