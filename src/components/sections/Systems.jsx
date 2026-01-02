import React from 'react';

const Systems = () => {
  return (
    <section id="systems" className="section">
      <div className="stack">
        <h2>Systems I Built</h2>

        <p className="text-muted">
          I gravitate towards systems where correctness, failure handling,
          and long-term evolution matter more than surface-level features.
        </p>

        <div className="divider" />

        {/* Pub Sub */}
        <div className="stack">
          <h3>Distributed Pub-Sub System (Go)</h3>

          <p>
            I built a lightweight pub-sub system in Go to understand how
            event-driven systems behave under load and partial failures.
          </p>

          <p>
            The focus wasn’t raw throughput, but predictable delivery,
            backpressure handling, and clean producer–consumer decoupling.
          </p>

          <p className="text-muted small">
            Learnings: concurrency patterns, message flow guarantees,
            failure as a first-class concern
          </p>
        </div>

        <div className="divider" />

        {/* URL Shortener */}
        <div className="stack">
          <h3>Distributed URL Shortener</h3>

          <p>
            This project explored the trade-offs involved in generating
            short, unique identifiers under concurrent access.
          </p>

          <p>
            I focused on deterministic ID generation, avoiding collisions,
            and designing APIs that stay simple as scale increases.
          </p>

          <p className="text-muted small">
            Learnings: consistency vs availability, ID strategies,
            API design under scale
          </p>
        </div>

        <div className="divider" />

        {/* Event Trigger System */}
        <div className="stack">
          <h3>Event & Trigger Platform (Parallel Cron Runner)</h3>

          <p>
            Built a Go-based event and trigger system that runs scheduled
            jobs in parallel, similar to a distributed cron runner.
          </p>

          <p>
            The system supports trigger-based execution, controlled
            concurrency, and safe parallelism without overwhelming workers.
          </p>

          <p className="text-muted small">
            Learnings: goroutines, worker pools, scheduling, graceful failure
          </p>
        </div>

        <div className="divider" />

        {/* Go Editor */}
        <div className="stack">
          <h3>Go-Edit — vi-style Editor</h3>

          <p>
            I built a terminal-based editor in Go to understand text editing
            from first principles rather than relying on abstractions.
          </p>

          <p>
            Implementing modes, buffers, and key handling taught me how
            deeply simple tools are engineered.
          </p>

          <p className="text-muted small">
            Learnings: state machines, terminal IO, performance trade-offs
          </p>
        </div>

        <div className="divider" />

        {/* Infra */}
        <div className="stack">
          <h3>Infrastructure & Cloud Work</h3>

          <p>
            Alongside application code, I’ve worked extensively with
            cloud-native infrastructure and deployment workflows.
          </p>

          <p>
            This includes building serverless systems on AWS,
            containerizing services with Docker,
            and running workloads on Kubernetes.
          </p>

          <p className="text-muted small">
            AWS · Serverless Framework · Docker · Kubernetes · CI/CD
          </p>
        </div>
      </div>
    </section>
  );
};

export default Systems;
