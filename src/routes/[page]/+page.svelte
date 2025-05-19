<script>
  import PageLayout from '$lib/components/PageLayout.svelte';
  export let data;
</script>

<PageLayout
  title={data.hero.title}
  subtitle={data.hero.subtitle}
  image={data.hero.image}
/>
