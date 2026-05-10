import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp, FaBriefcase, FaUsers, FaRocket } from 'react-icons/fa';

const Collaborate = () => {
  return (
    <section id="collaborate" className="section-padding bg-white position-relative overflow-hidden">
      {/* Background Bold Text */}
      <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center opacity-05 pointer-events-none" style={{ top: 0, left: 0, zIndex: 0 }}>
        <div className="display-1 fw-bold text-uppercase text-nowrap" style={{ fontSize: '20vw', color: '#f0f0f0' }}>COLLABORATE</div>
      </div>

      <Container className="position-relative z-1">
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="text-accent ls-wide mb-3 fw-bold">THE FINISH LINE</h6>
          <h2 className="display-4 fw-bold">Ready to scale?</h2>
          <p className="lead text-secondary mt-3">Stop wondering why your site isn't working. Let's build a digital strategy that delivers real, measurable results.</p>
        </div>

        <Row className="g-4 mb-5">
          {[
            { icon: <FaRocket />, title: 'Founders & Startups', desc: 'Go from zero to market-ready with a high-performance site that builds immediate credibility.' },
            { icon: <FaBriefcase />, title: 'Growing Businesses', desc: 'Strategic redesigns and technical audits to fix conversion leaks and scale your lead generation.' },
            { icon: <FaUsers />, title: 'Personal Brands', desc: 'Premium, SEO-optimized portfolios designed to turn your personal authority into client enquiries.' }
          ].map((item, index) => (
            <Col lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="numbered-card text-center p-5 bg-off-white">
                <div className="text-accent mb-4" style={{ fontSize: '2.5rem' }}>{item.icon}</div>
                <h4 className="fw-bold mb-3">{item.title}</h4>
                <p className="text-secondary small mb-0">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5" data-aos="zoom-in">
          <Button 
            href="https://wa.me/917012099077?text=Hi!%20I%27d%20like%20to%20discuss%20a%20website%20growth%20strategy."
            className="btn-bold btn-whatsapp px-5 py-3 rounded-pill d-inline-flex align-items-center gap-3"
            style={{ fontSize: '1.1rem' }}
          >
            <FaWhatsapp size={28} /> Start Your Growth Strategy
          </Button>
          <div className="mt-4">
            <a href="mailto:kvsankaranpvt@gmail.com" className="text-dark fw-bold text-decoration-none border-bottom border-dark">Or send an Email</a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Collaborate;
