<script lang="ts">
  import PageLayout from '$lib/components/PageLayout.svelte';
  export let data;
</script>

<PageLayout {...data.hero} />

<div class="container">
  <h2>Blog Posts</h2>

  <div class="blog-list">
    {#each data.posts as post}
      <div class="post-item">
        <a class="post-title" href={`/blog/${post.slug}`}>{post.title}</a>
        <a class="post-date" href={`/blog/${post.slug}`}>
          {new Date(post.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          })}
        </a>
      </div>
    {/each}
  </div>
</div>


<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .blog-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .post-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .post-title {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }

  .post-date {
    color: #f5c518;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .post-title:hover,
  .post-date:hover {
    opacity: 0.8;
  }
</style>