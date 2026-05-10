import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6} data-aos="fade-right">
            <div className="position-relative">
              <img 
                src={profileImg} 
                alt="Sankaranarayanan - Website Developer" 
                className="img-fluid rounded-4 grayscale shadow-lg"
                style={{ filter: 'grayscale(100%) brightness(0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <div className="position-absolute bottom-0 end-0 bg-accent p-4 rounded-3 d-none d-md-block translate-middle-x mb-n4 me-n4">
                <h4 className="fw-bold mb-0 text-dark">Results over code.</h4>
              </div>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <h6 className="text-accent ls-wide mb-3 fw-bold" style={{ fontSize: '0.85rem' }}>
              BEYOND THE CODE
            </h6>
            <h2 className="display-5 fw-bold mb-4">I don't just build websites. I build business tools.</h2>
            <p className="text-secondary mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Most websites are passive brochures. I build active assets. Whether you're a startup looking for credibility or a local business needing more leads, my approach is the same: <strong>Strategy first. Development second.</strong>
            </p>
            <p className="text-secondary mb-5" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              I use technical auditing as a diagnostic tool to uncover why your current site isn't performing. From there, I engineer high-speed, SEO-optimized, and conversion-focused solutions that actually move the needle for your brand.
            </p>
            
            <Row className="g-4">
              <Col md={6}>
                <div className="p-4 border border-dark border-opacity-10 h-100">
                  <h5 className="fw-bold mb-2">My Philosophy</h5>
                  <p className="small text-secondary mb-0">Code is only valuable if it drives a business outcome. I focus on speed, UX, and conversion leaks.</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="p-4 border border-dark border-opacity-10 h-100">
                  <h5 className="fw-bold mb-2">My Process</h5>
                  <p className="small text-secondary mb-0">I start with a deep audit to identify performance bottlenecks and credibility gaps before writing a single line of code.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
