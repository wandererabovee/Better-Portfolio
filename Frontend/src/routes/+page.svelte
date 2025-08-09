<script lang="ts">
	import Projects from '$lib/components/Projects.svelte';
	import Blog from '$lib/components/Blog.svelte';
</script>


<section>
  <Blog filterable={false} />
</section>

<section>
  <Projects filterable={false} />
</section>
