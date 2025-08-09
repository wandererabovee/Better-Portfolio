<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import TopicFilter from '$lib/components/TopicFilter.svelte';

	export let filterable = false;

	let projects = [];
	let filtered = [];
	let selectedTopic = 'All';
	let topics: string[] = [];

	onMount(async () => {
		const res = await fetch('http://localhost:8010/api/projects');
		const data = await res.json();

		projects = data;
		filtered = data;
		topics = [...new Set(data.map(p => p.topic))];
	});

	function handleSelect(topic: string) {
		selectedTopic = topic;
		filtered = topic === 'All'
			? projects
			: projects.filter(p => p.topic === topic);
	}
</script>

<div class="container">
	{#if !filterable}
		<div class="projects-header">
			<h2>Latest Projects</h2>
			<button on:click={() => goto('/projects')}>See All</button>
		</div>
	{/if}

	{#if filterable}
		<TopicFilter {topics} {selectedTopic} onSelect={handleSelect} />
	{/if}

	<div class="project-cards">
		{#each (filterable ? filtered : projects.slice(0, 3)) as project}
			<div class="card">
				<p class="card-date">{new Date(project.date).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' })}</p>
				<h3 class="card-title">{project.title}</h3>
				<p class="card-description">{project.description}</p>
				<div class="card-actions">
					{#if project.demoUrl}
						<a class="card-action-button" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
					{/if}
					{#if project.articleUrl}
						<a class="card-action-button" href={project.articleUrl}>Article</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
.projects-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.projects-header h2 {
	font-size: 1.75rem;
	color: white;
}

.projects-header button {
	background-color: transparent;
	color: white;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	font-weight: 500;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.projects-header button:hover {
	background-color: var(--color-accent-dark);
}

.project-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
}


.card {
	background-color: var(--color-secondary);
	padding: 1.5rem;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
	transform: translateY(-4px);
	box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.card-date {
	color: var(--text-color);
	font-size: 0.85rem;
	margin: 0;
}

.card-title {
	font-size: 1.25rem;
	color: white;
	margin: 0;
}

.card-description {
	color: #ccc;
	margin: 0;
}

.card-actions {
	display: flex;
	gap: 0.75rem;
	margin-top: auto;
}

.card-action-button {
	background-color: var(--tertiary-color);
	color: var(--text-color);
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	font-weight: 500;
	text-decoration: none;
	transition: background-color 0.2s ease;
}

.card-action-button:hover {
	color: var(--color-muted);
}
</style>
