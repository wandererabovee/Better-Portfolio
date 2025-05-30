<script lang="ts">
  export let items: { title: string; slug: string; date?: string }[] = [];
  export let basePath = ''; 
</script>

<div class="item-list">
  {#each items as item}
    <div class="item">
      <a href={`${basePath}/${item.slug}`}>{item.title}</a>
      {#if item.date}
        <span class="item-date">{new Date(item.date).toLocaleDateString()}</span>
      {/if}
    </div>
  {/each}
</div>

<style>
  .item-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.5rem;
  }

  .item a {
    color: white;
    font-weight: bold;
  }

  .item-date {
    color: gold;
    font-size: 0.875rem;
  }
</style>
