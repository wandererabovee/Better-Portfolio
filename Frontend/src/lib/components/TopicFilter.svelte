<script lang="ts">
	export let topics: string[] = [];
	export let selectedTopic: string = 'All';
	export let onSelect: (topic: string) => void = () => {};
</script>

<div class="topics-bar">
	{#each ['All', ...topics] as topic}
		<button
			class:selected={selectedTopic === topic}
			on:click={() => onSelect(topic)}>
			{topic}
		</button>
	{/each}
</div>

<style>
	.topics-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		background-color: #123950;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		margin-bottom: 1.5rem;
	}

	button {
		background: transparent;
		color: white;
		border: none;
		cursor: pointer;
		padding: 0.4rem 0.8rem;
		border-radius: 0.3rem;
		font-size: 0.95rem;
	}

	button.selected {
		background: #0c2c3f;
		font-weight: bold;
	}
</style>
