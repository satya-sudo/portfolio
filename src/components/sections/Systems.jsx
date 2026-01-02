export default function Systems() {
  return (
    <section id="systems" className="section">
      <h2>Systems I Built</h2>

      <p className="text-muted">
        I gravitate towards systems where failure modes,
        concurrency, and evolution matter.
      </p>

      <div className="divider" />

      <h3>Distributed Pub-Sub System (Go)</h3>
      <p>
        Built to understand event-driven systems, backpressure,
        and producer–consumer decoupling.
      </p>
      <p className="text-muted small">
        Concurrency · Message guarantees · Failure handling
      </p>

      <div className="divider" />

      <h3>Event & Trigger Platform (Parallel Cron Runner)</h3>
      <p>
        A Go-based trigger system executing scheduled jobs in parallel
        with controlled concurrency.
      </p>
      <p className="text-muted small">
        Worker pools · Scheduling · Safe parallelism
      </p>

      <div className="divider" />

      <h3>Distributed URL Shortener</h3>
      <p>
        Explored deterministic ID generation and consistency
        under concurrent writes.
      </p>

      <div className="divider" />

      <h3>Infrastructure & Cloud</h3>
      <p>
        Extensive work with AWS serverless systems,
        Dockerized services, and Kubernetes-based deployments.
      </p>
      <p className="text-muted small">
        AWS · Serverless Framework · Docker · Kubernetes
      </p>
    </section>
  );
}
