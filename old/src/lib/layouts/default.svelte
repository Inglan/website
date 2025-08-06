<script lang="ts">
	let { children, title } = $props();
	import Content from '$lib/components/content.svelte';
</script>

<svelte:head>
	{#if title}
		<title>{title + " - Ingo's Site"}</title>
	{/if}
</svelte:head>

<Content>{@render children()}</Content>
