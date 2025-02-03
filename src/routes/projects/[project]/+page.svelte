<script lang="ts">
	export let data;
</script>

<article>
	<svelte:component this={data.content} />
</article>