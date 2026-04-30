import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-light">
      <Container>
        <div className="mb-5" data-aos="fade-up">
          <h6 className="text-accent ls-wide mb-3 fw-bold">MY JOURNEY</h6>
          <h2 className="display-4 fw-bold">Experience</h2>
        </div>
        <Row className="g-5">
          <Col md={6} data-aos="fade-up">
            <div className="border-start border-dark border-2 ps-4 py-2">
              <h3 className="h4 fw-bold mb-1">Frontend Developer</h3>
              <p className="text-accent small fw-bold text-uppercase mb-4 ls-wide">Freelance & Independent</p>
              <ul className="text-secondary ps-3">
                <li className="mb-3">Designing and building custom responsive websites for businesses, creators, and professionals.</li>
                <li className="mb-3">Developing high-conversion landing pages and interactive portfolio sites.</li>
                <li className="mb-0">Implementing modern UI components using React, Tailwind CSS, and Bootstrap.</li>
              </ul>
            </div>
          </Col>
          <Col md={6} data-aos="fade-up" data-aos-delay="200">
            <div className="border-start border-dark border-2 ps-4 py-2">
              <h3 className="h4 fw-bold mb-1">Web Consultant</h3>
              <p className="text-accent small fw-bold text-uppercase mb-4 ls-wide">SEO & Deployment</p>
              <ul className="text-secondary ps-3">
                <li className="mb-3">Providing end-to-end web solutions including domain setup, hosting, and live deployment.</li>
                <li className="mb-3">Managing hosting environments on platforms like Vercel and Hostinger.</li>
                <li className="mb-0">Executing on-page SEO optimization to improve search rankings and online visibility.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
