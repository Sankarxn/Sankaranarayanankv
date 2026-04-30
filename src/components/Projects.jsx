import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const projectsData = [
  {
    name: 'CN Systemz',
    category: 'LANDING PAGE',
    desc: 'A modern and responsive landing page developed for a computer sales and service center. Built with ReactJS, CSS, and JavaScript.',
    img: 'https://placehold.co/600x400?text=CN+Systemz',
    link: 'https://cnsystemz.netlify.app/'
  },
  {
    name: 'Eswarprasad Resume',
    category: 'PORTFOLIO',
    desc: 'A fully responsive frontend resume website developed for a Clinical Engineer. Built with HTML5, CSS3, JavaScript, and Bootstrap.',
    img: 'https://placehold.co/600x400?text=Eswarprasad',
    link: 'https://eswarprasad-ke.netlify.app/'
  },
  {
    name: 'Aentree Digital',
    category: 'AGENCY WEBSITE',
    desc: 'A modern and responsive agency website built for Aentree, a digital agency focused on helping businesses grow through powerful digital solutions.',
    img: 'https://placehold.co/600x400?text=Aentree',
    link: 'https://aentree.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <div className="mb-5" data-aos="fade-up">
          <h6 className="text-accent ls-wide mb-3 fw-bold">CURATED COLLECTION</h6>
          <h2 className="display-4 fw-bold">Selected Work</h2>
        </div>
        <Row>
          {projectsData.map((project, index) => (
            <Col lg={6} key={index} className="mb-5" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div className="project-card">
                <div className="project-img-wrapper">
                  <img src={project.img} alt={project.name} />
                  <div className="project-overlay">
                    <a href={project.link} className="btn-view text-decoration-none">View Project →</a>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-accent fw-bold small text-uppercase ls-wide">{project.category}</span>
                  <h3 className="h3 fw-bold mt-2">{project.name}</h3>
                  <p className="text-secondary mb-0">{project.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
