import React from 'react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="section section--narrow">
      <div className="stack">
        <h2>Philosophy</h2>

        <p className="text-muted">
          A few principles that quietly guide how I work and live.
        </p>

        <div className="divider" />

        <div className="stack">
          <p>
            I am uncomfortable with stagnation.
            Repetition without learning drains me.
          </p>

          <p>
            I value clarity over cleverness.
            Simple systems that evolve are better than complex ones that impress.
          </p>

          <p>
            I believe responsibility shapes engineers.
            Ownership teaches things no course ever will.
          </p>

          <p>
            I don’t chase tools or trends.
            I chase understanding — slowly, deliberately, and deeply.
          </p>
        </div>

        <div className="divider" />

        <p className="text-muted small">
          Still learning. Still building.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
