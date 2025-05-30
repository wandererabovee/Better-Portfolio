<script>
  import PageLayout from '$lib/components/PageLayout.svelte';
  import TopicFilter from '$lib/components/TopicFilter.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  export let data;

  let selectedTopic = 'All';

  $: filteredProjects = selectedTopic === 'All'
    ? data.projects
    : data.projects.filter((project) => project.topic === selectedTopic);
</script>

<PageLayout {...data.hero} />

<div class="container">
  <!-- Move TopicFilter INSIDE container and ABOVE the cards -->
  <TopicFilter
    {selectedTopic}
    topics={data.topics}
    on:changeTopic={(e) => selectedTopic = e.detail}
  />

  <div class="project-cards">
    {#each filteredProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</div>
