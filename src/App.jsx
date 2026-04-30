import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './styles/custom.scss';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Collaborate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
