import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaPaintBrush, FaSearch, FaBolt, FaChartLine, FaTools } from 'react-icons/fa';

const services = [
  {
    title: "Website Development",
    desc: "Clean, modern, and high-performance websites built from the ground up to support your business goals.",
    icon: <FaCode />
  },
  {
    title: "Website Redesign",
    desc: "Transforming outdated sites into premium digital experiences that reflect your current brand authority.",
    icon: <FaPaintBrush />
  },
  {
    title: "Performance Optimization",
    desc: "Maximizing speed and Core Web Vitals to ensure your visitors don't bounce before the page even loads.",
    icon: <FaBolt />
  },
  {
    title: "SEO-Focused Development",
    desc: "Building with a search-first mindset, ensuring your architecture is ready to rank and be found.",
    icon: <FaSearch />
  },
  {
    title: "Conversion-Focused Design",
    desc: "Every pixel serves a purpose. I design layouts that highlight your CTAs and capture more leads.",
    icon: <FaChartLine />
  },
  {
    title: "Strategic Auditing",
    desc: "A diagnostic deep-dive into your site's performance, SEO, and UX to identify exactly where you are losing money.",
    icon: <FaTools />
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-light">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="text-accent ls-wide mb-3 fw-bold" style={{ fontSize: '0.85rem' }}>
            CORE SERVICES
          </h6>
          <h2 className="display-5 fw-bold">Strategic Solutions for Modern Brands</h2>
        </div>

        <Row className="g-4 mt-2">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="p-5 bg-white border border-dark border-opacity-10 h-100 transition-all hover-shadow">
                <div className="text-accent fs-2 mb-4">
                  {service.icon}
                </div>
                <h4 className="fw-bold mb-3">{service.title}</h4>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.7 }}>
                  {service.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      
      <style>{`
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-color: var(--accent-gold) !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
