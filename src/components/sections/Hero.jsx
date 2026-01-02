import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <div className="stack">
        <h1>
          Satyam Shree
        </h1>

        <p className="text-muted">
          Software Engineer — Builder of systems & self.
        </p>

        <div className="divider" />

        <p>
          I design software the way I live —
          <br />
          with intent, patience, and curiosity.
        </p>

        <div className="inline">
          <span className="tag">Go</span>
          <span className="tag">Distributed Systems</span>
          <span className="tag">Graphs</span>
          <span className="tag">Writing</span>
          <span className="tag">Riding</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
