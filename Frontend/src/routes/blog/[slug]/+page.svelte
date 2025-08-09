<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';

  let blog = {
    title: '',
    subtitle: 'The tools, ideas, and trade-offs behind my favorite personal project',
    date: '',
    topic: '',
    author: 'Mike Smith',
    content: ''
  };
  let error = '';
  let contentContainer: HTMLDivElement;

  onMount(async () => {
    if (!browser) return;

    const slug = $page.params.slug;

    try {
      const res = await fetch(`http://localhost:8010/api/blog/${slug}`);
      if (!res.ok) throw new Error('Failed to fetch blog');

      // Merge fetched data into defaults so we keep author if missing
      const data = await res.json();
      blog = { ...blog, ...data };
    } catch (err) {
      console.error(err);
      error = 'Blog post not found.';
    }
  });

  afterUpdate(() => {
    if (contentContainer && blog.content) {
      // Remove <hr> lines
      const cleanedContent = blog.content.replace(/<hr\s*\/?>/gi, '');
      contentContainer.innerHTML = cleanedContent;
    }
  });
</script>

{#if error}
  <p class="error">{error}</p>
{:else}
  <article class="blog-post">
    <header class="post-header">
      <h1 class="title">{blog.title}</h1>

      {#if blog.topic}
        <p class="topic">{blog.topic}</p>
      {/if}

      {#if blog.subtitle}
        <p class="subtitle">{blog.subtitle}</p>
      {/if}

      <div class="meta">
        <p class="author">by {blog.author}</p>
        {#if blog.date}
          <p class="date">
            {new Date(blog.date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        {/if}
      </div>
    </header>

    <div class="content" bind:this={contentContainer} />
  </article>
{/if}

<style>
  .blog-post {
    max-width: 800px;
    margin: 3rem auto;
    padding: 0 1.5rem;
  }

  .post-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  .topic {
    font-size: 1rem;
    font-style: italic;
    opacity: 0.8;
    margin-bottom: 0.25rem;
  }

  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.85;
  }

  .meta {
    text-align: right;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    opacity: 0.85;
  }

  .author {
    margin: 0;
  }

  .date {
    margin: 0;
    font-size: 0.85rem;
  }

  /* Markdown content */
  .content h2 {
    margin-top: 2rem;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .content h3 {
    margin-top: 1.5rem;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .content p {
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }

  .content ul, .content ol {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .content li {
    margin-bottom: 0.5rem;
  }

  .content a {
    text-decoration: underline;
  }

  .content img {
    max-width: 100%;
    border-radius: 4px;
    margin: 1rem 0;
  }
</style>
