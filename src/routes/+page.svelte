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
		var openedSidebar = true;
		if (window.scrollY < sidebarScrollYThreshold) {
			hideSidebar();
			document.getElementById('sidebar-trigger')?.classList.remove('bg-secondary');
			openedSidebar = false;
		}
		const handleScroll = () => {
			if (!sidebar.isMobile) {
				if (window.scrollY > sidebarScrollYThreshold && !openedSidebar) {
					showSidebar();
					document.getElementById('sidebar-trigger')?.classList.add('bg-secondary');
					openedSidebar = true;
				} else if (window.scrollY < sidebarScrollYThreshold && openedSidebar) {
					hideSidebar();
					document.getElementById('sidebar-trigger')?.classList.remove('bg-secondary');
					openedSidebar = false;
				}
			}
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
