<script lang="ts">
	import '../app.css';
	import Menu from '$lib/components/menu.svelte';

	import { page } from '$app/state';
	import { fade, fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	let { children } = $props();
</script>

<div class="flex flex-row w-full">
	<Menu />
	<div class="w-full">
		{#key page.url}
			<main
				in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 300 }}
				out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
			>
				{@render children()}
			</main>
		{/key}
	</div>
</div>
