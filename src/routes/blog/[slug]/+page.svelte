<script lang="ts">
  export let data;
</script>

<div class="container">
  <h1>{data.title}</h1>
  <p class="date">{data.date}</p>

  <div class="content">
    {@html data.html}
  </div>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .content {
    line-height: 1.6;
    font-size: 1rem;
  }

  .content p {
    margin-bottom: 1rem;
  }
</style>

