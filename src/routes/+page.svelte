<script lang="ts">
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	const sidebar = useSidebar();

	import { onMount } from 'svelte';

	function hideSidebar() {
		if (sidebar.state == 'expanded') {
			sidebar.toggle();
		}
	}

	function showSidebar() {
		if (sidebar.state == 'collapsed') {
			sidebar.toggle();
		}
	}
	onMount(() => {
		const sidebarScrollYThreshold = 20;
		var lastScrollY = 0;
		if (window.scrollY < sidebarScrollYThreshold) {
			hideSidebar();
			document.getElementById('sidebar-trigger')?.classList.remove('bg-secondary');
		}
		const handleScroll = () => {
			if (!sidebar.isMobile) {
				const currentScrollY = window.scrollY;
				if (sidebarScrollYThreshold < currentScrollY && sidebarScrollYThreshold > lastScrollY) {
					showSidebar();
					document.getElementById('sidebar-trigger')?.classList.add('bg-secondary');
				} else if (
					sidebarScrollYThreshold > currentScrollY &&
					sidebarScrollYThreshold < lastScrollY
				) {
					hideSidebar();
					document.getElementById('sidebar-trigger')?.classList.remove('bg-secondary');
				}
			}
			lastScrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);
	});
</script>

<div class="flex h-screen p-2 pl-0"></div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
