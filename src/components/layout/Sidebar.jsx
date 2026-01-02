import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Identity' },
  { id: 'journey', label: 'Journey' },
  { id: 'systems', label: 'Systems' },
  { id: 'writing', label: 'Writing' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'connect', label: 'Connect' }
];

const Sidebar = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero';

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="sidebar">
      {/* Identity */}
      <div style={{ marginBottom: '64px' }}>
        <h3 style={{ fontWeight: 500 }}>Satyam</h3>
        <p className="text-muted small">Software Engineer</p>
      </div>

      {/* Navigation */}
      <nav>
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
