import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const skillsData = [
  {
    num: '01',
    title: 'Frontend Development',
    desc: 'Building interactive and dynamic user interfaces with modern web technologies.',
    tags: ['React', 'HTML', 'CSS']
  },
  {
    num: '02',
    title: 'Frameworks & Libraries',
    desc: 'Utilizing powerful frameworks to rapidly build responsive and premium designs.',
    tags: ['Bootstrap', 'Tailwind CSS']
  },
  {
    num: '03',
    title: 'Hosting & Deployment',
    desc: 'Ensuring seamless live deployment and reliable hosting for web applications.',
    tags: ['Vercel', 'Hostinger', 'Live Deployment']
  },
  {
    num: '04',
    title: 'Web Solutions',
    desc: 'Crafting tailored solutions including business websites, landing pages, and portfolio sites.',
    tags: ['Business Sites', 'Portfolios', 'Landing Pages']
  },
  {
    num: '05',
    title: 'Performance & SEO',
    desc: 'Optimizing websites for search engine visibility and lightning-fast loading speeds.',
    tags: ['SEO Optimization', 'Performance', 'Vitals']
  },
  {
    num: '06',
    title: 'Responsive Design',
    desc: 'Creating pixel-perfect, user-friendly experiences across all devices and screen sizes.',
    tags: ['Mobile-First', 'UI/UX', 'Responsive']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-light">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="text-accent ls-wide mb-3 fw-bold">END-TO-END EXPERTISE</h6>
          <h2 className="display-4 fw-bold">What I Do</h2>
        </div>
        <Row className="g-4">
          {skillsData.map((skill, index) => (
            <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="numbered-card h-100 bg-white">
                <span className="number">{skill.num}</span>
                <h3 className="h4 fw-bold mb-3">{skill.title}</h3>
                <p className="text-secondary small mb-4">{skill.desc}</p>
                <div className="d-flex flex-wrap gap-2">
                  {skill.tags.map((tag, tIndex) => (
                    <Badge key={tIndex} bg="light" className="text-dark fw-normal rounded-pill px-3 py-2">{tag}</Badge>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
