<script>
  export let project;
</script>

<div class="card">
  <p class="card-date">{new Date(project.date).toLocaleDateString()}</p>
  <h3 class="card-title">{project.title}</h3>
  <p class="card-description">{project.description}</p>
  <div class="card-actions">
    {#if project.demoUrl}
      <a class="card-action-button" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
    {/if}
    {#if project.articleUrl}
      <a class="card-action-button" href={project.articleUrl}>Blog</a>
    {/if}
  </div>
</div>

<style>
  .card {
    background-color: var(--color-secondary);
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  .card-date {
    color: var(--text-color);
    font-size: 0.9rem;
    margin: 0;
  }

  .card-title {
    font-size: 1.25rem;
    color: white;
    margin: 0;
  }

  .card-description {
    color: #ccc;
    margin: 0;
  }

  .card-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: auto;
  }

  .card-action-button {
    background-color: var(--tertiary-color,rgb(24, 195, 161));
    color: black;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }

  .card-action-button:hover {
    background-color: #16a085;
  }
</style>
