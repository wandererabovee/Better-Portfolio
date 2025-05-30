<script>
  export let projects = [];
</script>

<div class="container">
  <h2>Projects</h2>
  <div class="project-grid">
    {#each projects as project}
      <div class="project-card">
        <div class="project-topic">{project.topic}</div>
        <h3 class="project-title">{project.title}</h3>
        <p class="project-description">{project.description}</p>
        <p class="project-date">{new Date(project.date).toLocaleDateString()}</p>
        <div class="project-links">
          <a class="card-action-button" href={project.articleUrl}>Read</a>
          <a class="card-action-button" href={project.demoUrl} target="_blank">Demo</a>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .project-card {
    background-color: var(--secondary-color, #2d4a67);
    padding: 1.25rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  .project-topic {
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--highlight-color, #5fdde5);
    margin-bottom: 0.5rem;
  }

  .project-title {
    margin: 0;
    font-size: 1.3rem;
    color: white;
  }

  .project-description {
    margin: 0.5rem 0;
    color: #ccc;
  }

  .project-date {
    font-size: 0.8rem;
    color: #aaa;
  }

  .project-links {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
  }

  .card-action-button {
    background-color: var(--secondary-color, #2d4a67);
    color: white;
    border: 1px solid var(--tertiary-color, #5fdde5);
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .card-action-button:hover {
    background-color: var(--tertiary-color, #5fdde5);
    color: black;
  }
</style>
