<script lang="ts">
  export let topics: string[] = [];
  export let selectedTopic: string = 'All';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function setTopic(topic: string) {
    dispatch('changeTopic', topic);
  }
</script>

<div class="topic-box">
  {#each ['All', ...topics] as topic}
    <button
      class:selected={topic === selectedTopic}
      on:click={() => setTopic(topic)}
    >
      {topic}
    </button>
  {/each}
</div>

<style>
  .topic-box {
    background-color: var(--color-secondary);
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 2rem 0;
  }

button {
  background: none;
  border: none;
  color: var(--color-text);
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-radius: 5px;
  transition: color 0.2s;
}

button:hover {
  color: var(--color-muted);
}

button.selected {
  color: var(--color-muted);
  font-weight: bold;
}


</style>
