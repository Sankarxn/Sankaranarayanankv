import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp, FaBriefcase, FaUsers, FaRocket } from 'react-icons/fa';

const Collaborate = () => {
  return (
    <section id="collaborate" className="section-padding bg-white position-relative overflow-hidden">
      {/* Background Bold Text */}
      <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center opacity-05 pointer-events-none" style={{ top: 0, left: 0, zIndex: 0 }}>
        <h1 className="display-1 fw-bold text-uppercase text-nowrap" style={{ fontSize: '20vw', color: '#f0f0f0' }}>COLLABORATE</h1>
      </div>

      <Container className="position-relative z-1">
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="text-accent ls-wide mb-3 fw-bold">LET'S BUILD TOGETHER</h6>
          <h2 className="display-4 fw-bold">Let's Collaborate</h2>
          <p className="lead text-secondary mt-3">Have a project in mind? Let's build something remarkable together.</p>
        </div>

        <Row className="g-4 mb-5">
          {[
            { icon: <FaBriefcase />, title: 'Businesses & Brands', desc: 'Custom websites to establish a strong online presence.' },
            { icon: <FaUsers />, title: 'Creators & Professionals', desc: 'Portfolios and landing pages to showcase your work.' },
            { icon: <FaRocket />, title: 'Jobseekers & Freelancers', desc: 'Stand out from the crowd with premium personal sites.' }
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
            href="https://wa.me/917012099077?text=Hi!%20I%27d%20like%20to%20collaborate%20with%20you."
            className="btn-bold btn-whatsapp px-5 py-3 rounded-pill d-inline-flex align-items-center gap-3"
            style={{ fontSize: '1.1rem' }}
          >
            <FaWhatsapp size={28} /> Start a Conversation on WhatsApp
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
