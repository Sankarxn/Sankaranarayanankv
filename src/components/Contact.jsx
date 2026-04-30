import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-light">
      <Container>
        <Row className="g-5">
          <Col lg={5} data-aos="fade-right">
            <h2 className="display-4 fw-bold mb-5">Let's <span className="text-accent">Connect</span></h2>
            
            <div className="mb-5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28a745' }}></div>
                <span className="small fw-bold text-uppercase ls-wide">Available for work</span>
              </div>
              <img 
                src={profileImg} 
                alt="Sankaranarayanan" 
                className="img-fluid rounded-4 grayscale mb-5"
                style={{ filter: 'grayscale(100%)', objectFit: 'cover', aspectRatio: '1/1' }}
              />
            </div>

            <div className="d-flex flex-column gap-4">
              <a href="mailto:kvsankaranpvt@gmail.com" className="d-flex align-items-center gap-3 text-decoration-none text-dark hover-accent">
                <FaEnvelope size={24} className="text-accent" />
                <span className="fw-bold">kvsankaranpvt@gmail.com</span>
              </a>
              <a href="https://wa.me/917012099077" className="d-flex align-items-center gap-3 text-decoration-none text-dark hover-accent">
                <FaWhatsapp size={24} className="text-accent" />
                <span className="fw-bold">+91 70120 99077</span>
              </a>
              <div className="d-flex align-items-center gap-3 text-dark">
                <FaMapMarkerAlt size={24} className="text-accent" />
                <span className="fw-bold">Kerala, India</span>
              </div>
            </div>
          </Col>

          <Col lg={7} data-aos="fade-left">
            <div className="bg-white p-5 h-100 border border-dark border-opacity-10">
              <Form action="https://api.staticforms.dev/submit" method="POST">
                {/* Static Forms API Key - PASTE YOUR KEY FROM EMAIL BELOW */}
                <input type="hidden" name="apiKey" value="sf_ececf43671f37cd851f28f23" />
                
                {/* Optional: The subject for the email you receive */}
                <input type="hidden" name="subject" value="New Portfolio Message" />
                
                {/* Optional: Redirect back to your site after sending (replace with your URL) */}
                <input type="hidden" name="redirectTo" value="https://sankaranarayanan.vercel.app/" />
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="small fw-bold text-uppercase ls-wide">Full Name</Form.Label>
                      <Form.Control name="name" type="text" placeholder="your name" className="rounded-0 p-3 border-dark border-opacity-25 shadow-none" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="small fw-bold text-uppercase ls-wide">Email Address</Form.Label>
                      <Form.Control name="email" type="email" placeholder="yourname@gmail.com" className="rounded-0 p-3 border-dark border-opacity-25 shadow-none" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold text-uppercase ls-wide">Subject</Form.Label>
                  <Form.Control name="subject" type="text" placeholder="what is this about?" className="rounded-0 p-3 border-dark border-opacity-25 shadow-none" required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold text-uppercase ls-wide">Message</Form.Label>
                  <Form.Control name="message" as="textarea" rows={6} placeholder="write your message here..." className="rounded-0 p-3 border-dark border-opacity-25 shadow-none" required />
                </Form.Group>
                <Button type="submit" className="btn-bold btn-whatsapp w-100 py-3 mt-3">
                  Send Message
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
