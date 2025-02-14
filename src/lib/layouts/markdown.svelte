<script lang="ts">
	export let title;

	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo title={title + ' - Ingo'} />

<article class="m-auto max-w-screen-lg p-4">
	<h1>{title}</h1>
	<slot></slot>
</article>
