import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ReactTyped } from "react-typed";
import { FaWhatsapp, FaFileDownload, FaLinkedin, FaGithub, FaInstagram, FaBriefcase, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex flex-column position-relative overflow-hidden">
      {/* Left Side - Vertical Socials (Icons) */}
      <div className="position-absolute top-50 start-0 translate-middle-y d-none d-lg-flex flex-column align-items-center ms-4" style={{ zIndex: 10, gap: '25px' }}>
        <a href="https://www.linkedin.com/in/sankarxn/" target="_blank" rel="noreferrer" className="sidebar-icon sidebar-icon-left">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/Sankarxn" target="_blank" rel="noreferrer" className="sidebar-icon sidebar-icon-left">
          <FaGithub size={22} />
        </a>
        <a href="https://www.instagram.com/sankar_xn/" target="_blank" rel="noreferrer" className="sidebar-icon sidebar-icon-left">
          <FaInstagram size={22} />
        </a>
        <div style={{ width: '1px', height: '80px', background: 'var(--charcoal)', opacity: 0.2, marginTop: '10px' }}></div>
      </div>

      <div className="position-absolute top-50 end-0 translate-middle-y d-none d-lg-flex flex-column align-items-center me-4" style={{ zIndex: 10, gap: '25px' }}>
        <div style={{ width: '1px', height: '80px', background: 'var(--charcoal)', opacity: 0.2, marginBottom: '10px' }}></div>
        <a href="#projects" className="sidebar-icon sidebar-icon-right" title="Work">
          <FaBriefcase size={22} />
        </a>
        <a href="#contact" className="sidebar-icon sidebar-icon-right" title="Contact">
          <FaEnvelope size={22} />
        </a>
        <a href="#resume" className="sidebar-icon sidebar-icon-right" title="Resume">
          <FaFileAlt size={22} />
        </a>
      </div>

      <Container className="flex-grow-1 d-flex align-items-center py-5">
        <Row className="align-items-center justify-content-center text-center w-100 mx-0">
          <Col lg={10} className="z-2">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h6 className="text-accent mb-3 fw-bold" style={{ letterSpacing: '0.3em', fontSize: '0.9rem' }}>SELF-TAUGHT FRONTEND DEVELOPER</h6>
              <h1 className="fw-bold ls-tight mb-4 text-uppercase" style={{ lineHeight: '0.8', fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}>
                SANKARA<br />NARAYANAN
              </h1>
              <h3 className="fw-light mb-5" style={{ fontSize: 'clamp(1.2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
                <ReactTyped
                  strings={[
                    "Building Responsive Websites.",
                    "Premium Digital Experiences.",
                    "SEO & Live Deployment."
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </h3>
              <div className="d-flex gap-3 flex-wrap justify-content-center">
                <Button 
                  href="https://wa.me/917012099077?text=Hi!%20I%27d%20like%20to%20collaborate%20with%20you." 
                  className="btn-bold btn-whatsapp d-flex align-items-center gap-2"
                >
                  <FaWhatsapp size={20} /> WHATSAPP ME
                </Button>
                <Button 
                  href="#projects"
                  variant="outline-dark" 
                  className="btn-bold d-flex align-items-center gap-2"
                >
                  <FaBriefcase size={18} /> VIEW WORKS
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
                <span className="display-6 fw-bold">5+</span>
                <span className="small text-uppercase ls-wide text-secondary">Months <br/> Experience</span>
              </div>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                <span className="display-6 fw-bold">3+</span>
                <span className="small text-uppercase ls-wide text-secondary">Projects <br/> Completed</span>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                <span className="display-6 fw-bold">100%</span>
                <span className="small text-uppercase ls-wide text-secondary">Happy <br/> Clients</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
