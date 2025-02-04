<script lang="ts">
	// Svelte Kit imports
	import { page } from '$app/state';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';

	// Style imports
	import '../app.css';
	import '$lib/assets/stylesheets/prism-holi-theme.css';
	import '@fontsource/inter';

	// UI Components
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Cursor from '$lib/components/cursor.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';

	// Transitions
	import { fade } from 'svelte/transition';
	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	// Scroll handling after navigation
	afterNavigate(() => {
		disableScrollHandling();
		setTimeout(() => {
			scrollTo(0, 0);
		}, 150);
	});

	let { children } = $props();
</script>

<Sidebar.Provider style="--sidebar-width: 19rem;" open={page.url.pathname == '/' ? false : true}>
	<!-- Sidebar Component -->
	<AppSidebar />

	<Sidebar.Inset>
		{#key page.url.pathname}
			<main tabindex="-1" in:fade|global={transitionIn} out:fade|global={transitionOut}>
				{@render children()}
			</main>
		{/key}
		<!-- Sidebar Trigger Button -->
		<Sidebar.Trigger
			id="sidebar-trigger"
			class="fixed bottom-2 translate-x-2 bg-secondary p-6 opacity-100 transition-all"
		/>
	</Sidebar.Inset>
</Sidebar.Provider>

<Toaster />
<Cursor />

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
