import { useEffect, useState } from 'react';

const sections = [
  ['hero', 'Identity'],
  ['journey', 'Journey'],
  ['systems', 'Systems'],
  ['writing', 'Writing'],
  ['beyond', 'Beyond'],
  ['philosophy', 'Philosophy'],
  ['connect', 'Connect']
];

export default function Sidebar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      let current = 'hero';
      sections.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside className="sidebar">
      <h3>Satyam</h3>
      <p className="text-muted small">Software Engineer</p>

      <nav>
        {sections.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
