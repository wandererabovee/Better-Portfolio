<script>
  export let title;
  export let link;
</script>

<div class="section-header">
  <h2>{title}</h2>
  <a href={link} class="view-all">View all</a>
</div>

<style>
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    width: 100%;
    margin: 2rem 0 1rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .view-all {
    padding: 0.4rem 1rem;
    border: 2px solid #2a4f6d;
    border-radius: 6px;
    color: white;
    text-decoration: none;
    transition: background 0.3s;
  }

  .view-all:hover {
    background-color: #2a4f6d;
  }
</style>
