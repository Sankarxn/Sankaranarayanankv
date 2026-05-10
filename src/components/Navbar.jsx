import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4 ls-tight">
          SANKARA<span className="text-accent">NARAYANAN</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" className="border-0 shadow-none" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Philosophy</Nav.Link>
            <Nav.Link href="#skills">Services</Nav.Link>
            <Nav.Link href="#projects">Work</Nav.Link>
            <Nav.Link href="#contact" className="nav-cta ms-lg-3 mt-3 mt-lg-0">
              Book a Call
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
