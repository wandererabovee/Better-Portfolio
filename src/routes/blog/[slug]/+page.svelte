<script lang="ts">
  export let data;
</script>

<div class="container">
  <article>
    <h1>{data.title}</h1>
    <p class="date">{new Date(data.date).toLocaleDateString()}</p>
    <div class="content">
      {@html data.html}
    </div>
  </article>
</div>

<style>
  .date {
    color: --color-accent;
    margin-bottom: 1rem;
  }

  .content :global(p) {
    margin-bottom: 1rem;
  }
</style>
