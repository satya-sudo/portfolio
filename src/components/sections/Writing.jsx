import React from 'react';

const Writing = () => {
  return (
    <section id="writing" className="section section--narrow">
      <div className="stack">
        <h2>Writing</h2>

        <p className="text-muted">
          I write to slow my thinking down.
          Writing is how I validate that I truly understand something.
        </p>

        <div className="divider" />

        <p>
          My writing focuses on distributed systems, graph modeling,
          and lessons that emerge only after building and breaking things.
        </p>

        <div className="divider" />

        <div className="stack">
          <p className="text-muted small">Selected articles</p>

          <a
            href="https://dev.to/satyam_shree_087caef77512/a-practical-guide-to-temporal-versioning-in-neo4j-nodes-relationships-and-historical-graph-1m5g"
            target="_blank"
            rel="noreferrer"
          >
            <p>Temporal Versioning in Neo4j: Modeling History in Graphs</p>
          </a>

          <a
            href="https://dev.to/satyam_shree_087caef77512/building-a-mini-kafka-in-go-my-journey-creating-go-pub-sub-5a5k"
            target="_blank"
            rel="noreferrer"
          >
            <p>Building a Mini Kafka in Go</p>
          </a>

          <a
            href="https://dev.to/satyam_shree_087caef77512/sometimes-small-ideas-teach-you-the-biggest-lessons-356m"
            target="_blank"
            rel="noreferrer"
          >
            <p>Sometimes Small Ideas Teach You the Biggest Lessons</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Writing;
