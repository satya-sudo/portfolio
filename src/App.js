import { useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';

import Hero from './components/sections/Hero';
import Journey from './components/sections/Journey';
import Systems from './components/sections/Systems';
import Writing from './components/sections/Writing';
import Beyond from './components/sections/Beyond';
import Philosophy from './components/sections/Philosophy';
import Connect from './components/sections/Connect';

import './styles/global.css';
import './styles/layout.css';
import './styles/typography.css';
import './styles/components.css';
import './styles/sidebar.css';

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Sidebar />
      <main className="main">
        <Hero />
        <Journey />
        <Systems />
        <Writing />
        <Beyond />
        <Philosophy />
        <Connect />
      </main>
    </div>
  );
}
