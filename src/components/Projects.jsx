import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    number: '01',
    name: 'CN Systemz',
    category: 'LANDING PAGE',
    desc: 'A modern and responsive landing page for a computer sales and service center. Focused on clean UI, fast load times, and clear call-to-actions to drive customer enquiries.',
    img: 'https://placehold.co/800x450/1A1A1A/C8A96E?text=CN+Systemz',
    link: 'https://cnsystemz.netlify.app/',
    tags: ['ReactJS', 'CSS3', 'JavaScript', 'Netlify'],
  },
  {
    number: '02',
    name: 'Eswarprasad Resume',
    category: 'PORTFOLIO',
    desc: 'A fully responsive frontend resume/portfolio for a Clinical Engineer. Structured for readability with a professional layout, subtle animations, and downloadable CV.',
    img: 'https://placehold.co/800x450/F5F2EE/1A1A1A?text=Eswarprasad+Resume',
    link: 'https://eswarprasad-ke.netlify.app/',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
  },
  {
    number: '03',
    name: 'Aentree Digital',
    category: 'AGENCY WEBSITE',
    desc: 'A modern agency website for Aentree — a digital brand focused on helping businesses grow. Features animated sections, a services showcase, and a lead-generation contact form.',
    img: 'https://placehold.co/800x450/111111/C8A96E?text=Aentree+Digital',
    link: 'https://aentree.vercel.app/',
    tags: ['React', 'Vite', 'SCSS', 'Vercel'],
  },
];

const filters = ['ALL', 'LANDING PAGE', 'PORTFOLIO', 'AGENCY WEBSITE'];

const Projects = () => {
  const [active, setActive] = useState('ALL');

  const filtered = active === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.category === active);

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

        {/* Filters */}
        <div className="d-flex flex-wrap gap-2 mb-5" data-aos="fade-up" data-aos-delay="100">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="project-filter-btn"
              data-active={active === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <Row className="g-4">
          {filtered.map((project, index) => (
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
