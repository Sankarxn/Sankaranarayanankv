import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-5">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h3 className="fw-bold ls-tight mb-1">SANKARA<span className="text-accent">NARAYANAN</span></h3>
            <p className="small text-secondary text-uppercase ls-wide mb-0">Self-Taught Frontend Developer</p>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div className="d-flex justify-content-center gap-4">
              <a href="#home" className="text-white text-decoration-none small text-uppercase ls-wide hover-accent">Home</a>
              <a href="#projects" className="text-white text-decoration-none small text-uppercase ls-wide hover-accent">Works</a>
              <a href="#contact" className="text-white text-decoration-none small text-uppercase ls-wide hover-accent">Contact</a>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {[
                { icon: <FaInstagram />, link: 'https://www.instagram.com/sankar_xn/' },
                { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/sankarxn/' },
                { icon: <FaGithub />, link: 'https://github.com/Sankarxn' },
                { icon: <FaXTwitter />, link: 'https://x.com/Sankarxn' }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>
        <hr className="border-secondary opacity-25" />
        <Row className="pt-4">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="small text-secondary mb-0">© {new Date().getFullYear()} Sankaranarayanan | All rights reserved</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="small text-secondary mb-0">
              Crafted with passion | Powered by <a href="https://aentree.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none hover-accent fw-bold">Aentree Digital Agency</a>
            </p>
          </Col>
        </Row>
      </Container>
      
      <style>{`
        .social-icon-btn:hover {
          background-color: var(--accent-gold);
          border-color: var(--accent-gold);
          transform: scale(1.1);
          box-shadow: 0 0 15px var(--accent-gold);
        }
        .hover-accent:hover {
          color: var(--accent-gold) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
