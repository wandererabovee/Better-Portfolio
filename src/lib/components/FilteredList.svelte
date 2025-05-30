<script lang="ts">
  import TopicFilter from '$lib/components/TopicFilter.svelte';
  import { createEventDispatcher } from 'svelte';

  export let items: Array<{ topic: string }>;
  export let selectedTopic = 'All';

  const dispatch = createEventDispatcher();

  $: topics = ['All', ...Array.from(new Set(items.map(item => item.topic)))];

  $: filtered = selectedTopic === 'All'
    ? items
    : items.filter(item => item.topic === selectedTopic);

  function handleChangeTopic(e) {
    selectedTopic = e.detail;
  }
</script>

<TopicFilter {topics} {selectedTopic} on:changeTopic={handleChangeTopic} />

<slot {filtered} />
