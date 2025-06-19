<script lang="ts">
	import '../app.css';
	import Menu from '$lib/components/menu.svelte';

	let { children } = $props();
</script>

<div class="flex flex-row w-full">
	<Menu />
	<div class="w-full">
		<main class="container mx-auto">
			{@render children()}
		</main>
	</div>
</div>
