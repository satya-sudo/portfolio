import React from 'react';

const Connect = () => {
  return (
    <section id="connect" className="section">
      <div className="stack">
        <h2>Connect</h2>

        <p className="text-muted">
          If something here resonated, I’m open to thoughtful conversations.
        </p>

        <div className="divider" />

        <div className="inline">
          <a href="mailto:satyamshree22@gmail.com">
            <span className="tag">Email</span>
          </a>

          <a
            href="https://github.com/satya-sudo"
            target="_blank"
            rel="noreferrer"
          >
            <span className="tag">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/satyam-shree-524208193/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="tag">LinkedIn</span>
          </a>
        </div>

        <div className="divider" />

        <p className="text-muted small">
          Thanks for taking the time to read.
        </p>
      </div>
    </section>
  );
};

export default Connect;
