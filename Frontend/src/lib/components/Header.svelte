<script lang="ts">
	import { page } from '$app/stores';
	import { getPageHeader } from '$lib/api';
	import { browser } from '$app/environment';

	let title = '';
	let subtitle = '';
	let image = '';

	$: currentSlug = $page.params.slug;

	$: if (browser && !currentSlug) {
		const path = $page.url.pathname;
		const key = path === '/' ? 'home' : path.slice(1);
		getPageHeader(key).then((data) => {
			title = data.title;
			subtitle = data.subtitle;
			image = data.image;
		});
	}
</script>

{#if !currentSlug}
<section class="page-hero">
	<div class="container hero-content">
		<div class="text-box">
			<div class="text">
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>
		</div>

		{#if image}
			<div class="image-box">
				<img src={image} alt="Header illustration" />
			</div>
		{/if}
	</div>
</section>
{/if}


<style>
	.page-hero {
	color: white;
	padding: 0rem 0rem 0rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	}

	.hero-content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		max-width: 900px;
		width: 100%;
		gap: 5rem;
	}

	.text-box {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 1rem;
	}

	.text {
		max-width: 700px;
	}

	.image-box {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: bold;
	}

	p {
		font-size: 1.2rem;
	}

	img {
		width: 150px;
		height: 150px;
	}
</style>
