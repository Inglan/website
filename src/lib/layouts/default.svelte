<script lang="ts">
	let { children } = $props();
	import Content from '$lib/components/content.svelte';
</script>

<Content>{@render children()}</Content>
