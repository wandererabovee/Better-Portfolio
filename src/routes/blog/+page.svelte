<script lang="ts">
  import PageLayout from '$lib/components/PageLayout.svelte';
  import TopicFilter from '$lib/components/TopicFilter.svelte';
  export let data;

  let selectedTopic = 'All';

  $: filteredPosts = selectedTopic === 'All'
    ? data.posts
    : data.posts.filter((post) => post.topics.includes(selectedTopic));
</script>

<PageLayout {...data.hero} />

<div class="container">
  <TopicFilter
    {selectedTopic}
    topics={data.topics}
    on:changeTopic={(e) => selectedTopic = e.detail}
  />

  <div class="post-list">
    {#each filteredPosts as post}
      <div class="post-item">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
        <span class="post-date">{new Date(post.date).toLocaleDateString()}</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .post-list {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .post-item {
    display: flex;
    justify-content: space-between;
  }

  .post-date {
    color: gold;
  }
</style>
