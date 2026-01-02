import React from 'react';

const Journey = () => {
  return (
    <section id="journey" className="section">
      <div className="stack">
        <h2>Journey</h2>

        <p className="text-muted">
          A progression shaped by real systems, production responsibility,
          and learning how software behaves outside textbooks.
        </p>

        <div className="divider" />

        {/* Phase 1 */}
        <div className="stack">
          <h3>Foundations — Internships</h3>
          <p>
            I started my career working across backend and frontend systems,
            building APIs, interfaces, and learning how real-world products are shipped.
          </p>
          <p>
            This phase taught me fundamentals —
            writing maintainable code, understanding data flow,
            and respecting production constraints.
          </p>
          <p className="text-muted small">
            Django · React · Python · Serverless · Cloud basics
          </p>
        </div>

        <div className="divider" />

        {/* Phase 2 */}
        <div className="stack">
          <h3>Growth — Software Engineer</h3>
          <p>
            Transitioned into building backend-heavy systems where correctness,
            performance, and long-term maintainability mattered.
          </p>
          <p>
            Worked extensively with graph data models, optimized Cypher queries,
            and designed APIs in Go that power complex backend workflows.
          </p>
          <p className="text-muted small">
            Go · Neo4j · Distributed thinking · API design
          </p>
        </div>

        <div className="divider" />

        {/* Phase 3 */}
        <div className="stack">
          <h3>Responsibility — Production Systems</h3>
          <p>
            Took ownership of systems where failures had real impact.
            Learned to debug edge cases, handle data inconsistencies,
            and design with future change in mind.
          </p>
          <p>
            This stage shaped how I think —
            less about writing code fast,
            more about writing code that survives.
          </p>
          <p className="text-muted small">
            System design · Debugging · Trade-offs · Ownership
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
