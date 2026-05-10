import React from 'react';
import { FaShieldAlt, FaRocket, FaGlobe, FaSearchDollar, FaBolt, FaCheckCircle } from 'react-icons/fa';

const trustItems = [
  { name: "Global Brands", icon: <FaGlobe /> },
  { name: "Custom Development", icon: <FaCheckCircle /> },
  { name: "Modern Technology", icon: <FaRocket /> },
  { name: "High-ROI Results", icon: <FaSearchDollar /> },
  { name: "Lighthouse 90+", icon: <FaBolt /> },
  { name: "Scalable Systems", icon: <FaShieldAlt /> }
];

const TrustSection = () => {
  // Duplicate items for seamless loop
  const marqueeItems = [...trustItems, ...trustItems, ...trustItems];

  return (
    <div className="trust-marquee">
      <div className="marquee-content">
        {marqueeItems.map((item, index) => (
          <div key={index} className="trust-item">
            <span className="icon">{item.icon}</span>
            <span className="name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
