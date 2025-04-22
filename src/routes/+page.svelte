<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
</script>

<Menu />
{#each Array(100)}
	<div>
		<h1>Page Content</h1>
		<p>This is some page content that will be repeated.</p>
	</div>
{/each}
