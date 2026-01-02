export default function Writing() {
  return (
    <section id="writing" className="section section--narrow">
      <h2>Writing</h2>

      <p className="text-muted">
        Writing is how I slow my thinking down and validate clarity.
      </p>

      <div className="divider" />

      <div className="stack" style={{ gap: '24px' }}>
        <a className="editorial-link" href="https://dev.to/satyam_shree_087caef77512/a-practical-guide-to-temporal-versioning-in-neo4j-nodes-relationships-and-historical-graph-1m5g" target="_blank" rel="noreferrer">
          <p>Temporal Versioning in Neo4j</p>
        </a>

        <a className="editorial-link" href="https://dev.to/satyam_shree_087caef77512/building-a-mini-kafka-in-go-my-journey-creating-go-pub-sub-5a5k" target="_blank" rel="noreferrer">
          <p>Building a Mini Kafka in Go</p>
        </a>

        <a className="editorial-link" href="https://dev.to/satyam_shree_087caef77512/sometimes-small-ideas-teach-you-the-biggest-lessons-356m" target="_blank" rel="noreferrer">
          <p>Sometimes Small Ideas Teach You the Biggest Lessons</p>
        </a>
      </div>
    </section>
  );
}
