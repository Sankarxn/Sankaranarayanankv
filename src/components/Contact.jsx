import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-light">
      <Container>
        <Row className="g-5">
          <Col lg={5} data-aos="fade-right">
            <h6 className="text-accent ls-wide mb-3 fw-bold" style={{ fontSize: '0.85rem' }}>
              NEXT STEPS
            </h6>
            <h2 className="display-4 fw-bold mb-4">Start your <span className="text-accent">Growth</span> Strategy</h2>
            <p className="text-secondary mb-5" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Ready to stop guessing and start growing? Whether you need a full redesign or a strategic performance audit, I’m here to help you build a high-performance digital asset.
            </p>
            
            <div className="mb-5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28a745' }}></div>
                <span className="small fw-bold text-uppercase ls-wide">Available For Projects</span>
              </div>
              <img 
                src={profileImg} 
                alt="Sankaranarayanan - Website Developer" 
                className="img-fluid rounded-4 grayscale mb-5 shadow-sm"
                style={{ filter: 'grayscale(100%)', objectFit: 'cover', aspectRatio: '1/1', maxWidth: '300px' }}
              />
            </div>

            <div className="d-flex flex-column gap-4">
              <a href="mailto:kvsankaranpvt@gmail.com" className="d-flex align-items-center gap-3 text-decoration-none text-dark hover-accent" aria-label="Send me an email">
                <FaEnvelope size={24} className="text-accent" aria-hidden="true" />
                <span className="fw-bold">kvsankaranpvt@gmail.com</span>
              </a>
              <a href="https://wa.me/917012099077" className="d-flex align-items-center gap-3 text-decoration-none text-dark hover-accent" aria-label="Message me on WhatsApp">
                <FaWhatsapp size={24} className="text-accent" aria-hidden="true" />
                <span className="fw-bold">+91 70120 99077</span>
              </a>
              <div className="d-flex align-items-center gap-3 text-dark">
                <FaMapMarkerAlt size={24} className="text-accent" />
                <span className="fw-bold">Kerala, India</span>
              </div>
            </div>
          </Col>

          <Col lg={7} data-aos="fade-left">
            <div className="bg-white p-5 h-100 border border-dark border-opacity-10 shadow-sm">
              <h4 className="fw-bold mb-4">Tell me about your project</h4>
              <Form action="https://api.staticforms.dev/submit" method="POST">
                <input type="hidden" name="apiKey" value="sf_ececf43671f37cd851f28f23" />
                <input type="hidden" name="subject" value="New Project Enquiry" />
                <input type="hidden" name="redirectTo" value="https://sankaranarayanan.me/" />
                
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName" className="mb-4">
                      <Form.Label className="small fw-bold text-uppercase ls-wide">Full Name</Form.Label>
                      <Form.Control name="name" type="text" placeholder="Your Name" className="rounded-0 p-3 border-dark border-opacity-25 shadow-none" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-4">
                      <Form.Label className="small fw-bold text-uppercase ls-wide">Email Address</Form.Label>
                      <Form.Control name="email" type="email" placeholder="name@example.com" className="rounded-0 p-3 border-dark border-opacity-25 shadow-none" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formService" className="mb-4">
                  <Form.Label className="small fw-bold text-uppercase ls-wide">What do you need?</Form.Label>
                  <Form.Select name="service" className="rounded-0 p-3 border-dark border-opacity-25 shadow-none" required>
                    <option value="">Select an option</option>
                    <option value="New Website Development">New Website Development</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Performance & SEO Audit">Strategic Performance Audit</option>
                    <option value="Conversion Optimization">Conversion Optimization</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formWebsite" className="mb-4">
                  <Form.Label className="small fw-bold text-uppercase ls-wide">Current Website (if any)</Form.Label>
                  <Form.Control name="website_url" type="url" placeholder="https://yoursite.com" className="rounded-0 p-3 border-dark border-opacity-25 shadow-none" />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label className="small fw-bold text-uppercase ls-wide">Briefly describe your goals</Form.Label>
                  <Form.Control name="message" as="textarea" rows={4} placeholder="What business problem are we solving?" className="rounded-0 p-3 border-dark border-opacity-25 shadow-none" required />
                </Form.Group>
                <Button type="submit" className="btn-bold btn-whatsapp w-100 py-3 mt-3 d-flex align-items-center justify-content-center gap-2">
                  BOOK A STRATEGY CALL <FaArrowRight size={14} />
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
