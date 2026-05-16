import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    number: '01',
    name: 'CN Systemz',
    category: 'E-COMMERCE GROWTH',
    desc: 'Redesigned the digital storefront for a hardware retailer to prioritize lead capture. By optimizing the product enquiry flow and reducing load times by 60%, the site now generates a consistent stream of high-quality sales enquiries.',
    img: 'https://placehold.co/800x450/1A1A1A/C8A96E?text=CN+Systemz',
    link: 'https://cnsystemz.netlify.app/',
    tags: ['Conversion Rate Optimization', 'Performance Rebuild', 'Lead Gen'],
  },
  {
    number: '02',
    name: 'Eswarprasad',
    category: 'PERSONAL BRAND',
    desc: 'Developed a high-authority portfolio for a technical specialist. Focused on a "Search-First" architecture that achieved a perfect 100/100 Lighthouse score, positioning the client as a top-tier expert in their field.',
    img: 'https://placehold.co/800x450/F5F2EE/1A1A1A?text=Eswarprasad+Resume',
    link: 'https://eswarprasad-ke.netlify.app/',
    tags: ['Technical SEO', 'Accessibility', 'Lighthouse 100'],
  },
  {
    number: '03',
    name: 'Aentree Digital',
    category: 'AGENCY PLATFORM',
    desc: 'Built a premium agency website designed to convert cold traffic into high-ticket leads. Implemented advanced storytelling animations and a frictionless UX to establish immediate brand credibility.',
    img: 'https://placehold.co/800x450/111111/C8A96E?text=Aentree+Digital',
    link: 'https://aentree.vercel.app/',
    tags: ['Brand Authority', 'Animated UX', 'Lead Capture'],
  },
  {
    number: '04',
    name: 'Ember & oak',
    category: 'Restaurant Website',
    desc: 'Crafted a visually stunning website for a boutique restaurant, focusing on an immersive user experience. The site features dynamic menu displays and seamless reservation integration, resulting in a 40% increase in online bookings.',
    img: 'https://placehold.co/800x450/1A1A1A/C8A96E?text=Ember+%26+oak',
    link: 'https://ember0ak.netlify.app/',
    tags: ['Restaurant Website', 'Performance Optimization', 'Lead Gen'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <Container>

        {/* Header */}
        <Row className="align-items-end mb-5" data-aos="fade-up">
          <Col lg={7}>
            <h6 className="text-accent ls-wide mb-3 fw-bold" style={{ fontSize: '0.75rem' }}>
              CURATED COLLECTION
            </h6>
            <h2 className="display-4 fw-bold mb-0">Selected Work</h2>
          </Col>
          <Col lg={5} className="mt-4 mt-lg-0 d-flex align-items-center gap-3 justify-content-lg-end">
            <a
              href="https://github.com/Sankarxn"
              target="_blank"
              rel="noreferrer"
              className="d-inline-flex align-items-center gap-2 text-decoration-none fw-bold"
              style={{ fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--charcoal)', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '2px' }}
            >
              <FaGithub size={16} /> View All on GitHub
            </a>
          </Col>
        </Row>

        {/* Project Cards */}
        <Row className="g-4">
          {projectsData.map((project, index) => (
            <Col lg={6} key={project.number} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-card h-100">
                {/* Image */}
                <div className="project-img-wrapper">
                  <img src={project.img} alt={project.name} loading="lazy" />
                  <div className="project-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-view text-decoration-none"
                    >
                      <FaExternalLinkAlt size={14} style={{ marginRight: 8 }} />
                      View Project
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="project-body">
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <span className="project-number">{project.number} — {project.category}</span>
                  </div>
                  <h3 className="h4 fw-bold mb-2">{project.name}</h3>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live Site <FaArrowRight size={12} />
                  </a>
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
