import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaBriefcase, FaEnvelope, FaFileAlt, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex flex-column position-relative overflow-hidden" style={{ paddingTop: '80px' }}>
      {/* Left Side - Vertical Socials (Icons) */}
      <div className="position-absolute top-50 start-0 translate-middle-y d-none d-lg-flex flex-column align-items-center ms-4" style={{ zIndex: 10, gap: '25px' }}>
        <a href="https://www.linkedin.com/in/sankarxn/" target="_blank" rel="noopener noreferrer" className="sidebar-icon sidebar-icon-left" aria-label="Visit my LinkedIn profile">
          <FaLinkedin size={22} aria-hidden="true" />
        </a>
        <a href="https://github.com/Sankarxn" target="_blank" rel="noopener noreferrer" className="sidebar-icon sidebar-icon-left" aria-label="View my GitHub projects">
          <FaGithub size={22} aria-hidden="true" />
        </a>
        <a href="https://www.instagram.com/sankar_xn/" target="_blank" rel="noopener noreferrer" className="sidebar-icon sidebar-icon-left" aria-label="Follow me on Instagram">
          <FaInstagram size={22} aria-hidden="true" />
        </a>
        <div style={{ width: '1px', height: '80px', background: 'var(--charcoal)', opacity: 0.2, marginTop: '10px' }}></div>
      </div>

      <div className="position-absolute top-50 end-0 translate-middle-y d-none d-lg-flex flex-column align-items-center me-4" style={{ zIndex: 10, gap: '25px' }}>
        <div style={{ width: '1px', height: '80px', background: 'var(--charcoal)', opacity: 0.2, marginBottom: '10px' }}></div>
        <a href="#projects" className="sidebar-icon sidebar-icon-right" title="Work" aria-label="View my work projects">
          <FaBriefcase size={22} aria-hidden="true" />
        </a>
        <a href="#contact" className="sidebar-icon sidebar-icon-right" title="Contact" aria-label="Contact me">
          <FaEnvelope size={22} aria-hidden="true" />
        </a>
      </div>

      <Container className="flex-grow-1 d-flex align-items-center py-5 pt-lg-5">
        <Row className="align-items-center justify-content-center text-center w-100 mx-0">
          <Col lg={11} xl={10} className="z-2">
            <div data-aos="fade-up" data-aos-duration="1200">
              <h6 className="text-accent mb-4 fw-bold" style={{ letterSpacing: '0.4em', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)' }}>STRATEGY • DESIGN • DEVELOPMENT</h6>
              <h2 className="visually-hidden">Premium Website Developer & Performance Expert</h2>
              <h1 className="fw-bold ls-tight mb-4 text-uppercase" style={{ lineHeight: '0.9', fontSize: 'clamp(3rem, 10vw, 7.5rem)' }}>
                Your Website<br />Should Sell.
              </h1>
              <p className="lead mx-auto mb-5 text-secondary" style={{ maxWidth: '700px', fontSize: 'clamp(1rem, 2vw, 1.35rem)', fontWeight: 400, lineHeight: 1.6 }}>
                I build high-performance, conversion-focused websites that turn your visitors into customers. No fluff, just results-driven development backed by strategic auditing.
              </p>
              
              <div className="d-flex gap-3 flex-wrap justify-content-center mt-4 p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)' }}>
                <Button 
                   href="#projects"
                   className="btn-bold btn-whatsapp d-flex align-items-center gap-2 shadow-lg"
                   style={{ minWidth: '220px', justifyContent: 'center' }}
                   aria-label="View my selected work"
                >
                  VIEW WORK <FaArrowRight size={14} aria-hidden="true" />
                </Button>
                <Button 
                   href="#contact" 
                   variant="outline-dark" 
                   className="btn-bold d-flex align-items-center gap-2 shadow-sm"
                   style={{ minWidth: '220px', justifyContent: 'center' }}
                   aria-label="Book a growth strategy call"
                >
                  START YOUR PROJECT
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Stats Bar */}
      <div className="w-100 py-4 border-top border-dark border-opacity-10 bg-off-white mt-auto">
        <Container>
          <Row className="text-center text-lg-start">
            <Col md={4} className="mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                <span className="display-6 fw-bold">100%</span>
                <span className="small text-uppercase ls-wide text-secondary">Performance <br/> Focused</span>
              </div>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                <span className="display-6 fw-bold">SEO</span>
                <span className="small text-uppercase ls-wide text-secondary">Optimized <br/> Architecture</span>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                <span className="display-6 fw-bold">Lead</span>
                <span className="small text-uppercase ls-wide text-secondary">Generation <br/> Driven</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
