import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0" data-aos="fade-right">
            <div className="position-relative">
              <img 
                src={profileImg} 
                alt="Sankaranarayanan" 
                className="img-fluid border border-dark p-2"
                style={{ filter: 'grayscale(100%)' }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 border border-accent border-2" style={{ transform: 'translate(20px, 20px)', zIndex: -1 }}></div>
            </div>
          </Col>
          <Col lg={7} className="ps-lg-5" data-aos="fade-left">
            <h6 className="text-accent ls-wide mb-3 fw-bold">ABOUT ME</h6>
            <h2 className="display-4 fw-bold mb-4">Empowering <span className="text-muted">businesses</span> and <span className="text-muted">creators</span> on the web.</h2>
            <p className="lead text-secondary mb-4">
              I am a self-taught Frontend Developer focused on building responsive, user-friendly, and premium websites. I help businesses, creators, professionals, jobseekers, and freelancers establish a strong online presence.
            </p>
            <p className="text-secondary mb-5">
              From building bespoke business websites, landing pages, and portfolio sites, to providing SEO optimization and live deployment, I ensure your digital footprint is both visually stunning and highly functional.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Badge bg="transparent" className="border border-dark text-dark py-2 px-3 rounded-0 fw-normal">📍 INDIA</Badge>
              <Badge bg="transparent" className="border border-dark text-dark py-2 px-3 rounded-0 fw-normal">🧠 SELF-TAUGHT</Badge>
              <Badge bg="transparent" className="border border-dark text-dark py-2 px-3 rounded-0 fw-normal">🔥 PASSIONATE DEVELOPER</Badge>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
