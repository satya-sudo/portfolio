import React from 'react';
import { useEffect } from 'react';
/* Layout */
import Sidebar from './components/layout/Sidebar';

/* Sections */
import Hero from './components/sections/Hero';
import Journey from './components/sections/Journey';
import Systems from './components/sections/Systems';
import Writing from './components/sections/Writing';
import Beyond from './components/sections/Beyond';
import Philosophy from './components/sections/Philosophy';
import Connect from './components/sections/Connect';

/* Styles */
import './styles/global.css';
import './styles/layout.css';
import './styles/typography.css';
import './styles/components.css';
import './styles/sidebar.css';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow');
  
    const moveGlow = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.style.opacity = '1';
    };
  
    window.addEventListener('mousemove', moveGlow);
  
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);
  return (
    <div className="page">
      <Sidebar />

      <main className="main">
      <div className="ambient-line" />
        <section className="section">
          <Hero />
        </section>

        <section className="section">
          <Journey />
        </section>

        <section className="section">
          <Systems />
        </section>

        <section className="section section--narrow">
          <Writing />
        </section>

        <section className="section">
          <Beyond />
        </section>

        <section className="section section--narrow">
          <Philosophy />
        </section>

        <section className="section">
          <Connect />
        </section>
      </main>
      <div className="cursor-glow" />
    </div>
  );
};

export default App;
