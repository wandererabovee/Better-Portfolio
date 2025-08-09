<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import TopicFilter from './TopicFilter.svelte';

	export let filterable = false;

	let blogs = [];
	let filtered = [];
	let topics: string[] = [];
	let selected = 'All';

	onMount(async () => {
		const res = await fetch('http://localhost:8010/api/blog');
		const data = await res.json();

		blogs = data;
		filtered = data;
		topics = [...new Set(data.map(b => b.topic))];
	});

	function handleSelect(topic: string) {
		selected = topic;
		filtered = topic === 'All' ? blogs : blogs.filter(b => b.topic === topic);
	}
</script>

<div class="container">
	{#if !filterable}
		<div class="section-header">
			<h2>latest Blog Posts</h2>
			<button on:click={() => goto('/blog')}>See All</button>
		</div>
	{/if}

	{#if filterable}
		<TopicFilter {topics} {selected} onSelect={handleSelect} />
	{/if}

	<div class="blog-list">
		{#each (filterable ? filtered : blogs.slice(0, 3)) as blog}
			<div class="blog-item">
				<a class="blog-title" href={`/blog/${blog.slug}`}>{blog.title}</a>
				<p class="blog-date">
					{new Date(blog.date).toLocaleDateString('en-GB', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric'
					})}
				</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		padding-top: 0rem;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.section-header h2 {
		font-size: 1.75rem;
		color: white;
	}

	.section-header button {
		background-color: transparent;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-weight: 500;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.section-header button:hover {
		background-color: var(--color-accent-dark);
	}

	.blog-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1rem;
	}

	.blog-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 0.5rem;
	}

	.blog-title {
		font-size: 1rem;
		font-weight: 500;
		color: white;
		text-decoration: none;
	}

	.blog-title:hover {
	}

	.blog-date {
		color: white;
		font-size: 0.9rem;
	}
</style>
