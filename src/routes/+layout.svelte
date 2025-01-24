<script lang="ts">
	// Svelte Kit imports
	import { page } from '$app/state';
	let { children } = $props();

	// Style imports
	import '../app.css';
	import '@fontsource/inter';

	// UI Components
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
</script>

<Sidebar.Provider style="--sidebar-width: 19rem;" open={page.url.pathname == '/' ? false : true}>
	<!-- Sidebar Component -->
	<AppSidebar />
	<Sidebar.Inset>
		{@render children()}
		<!-- Sidebar Trigger Button -->
		<Sidebar.Trigger
			id="sidebar-trigger"
			class="fixed bottom-2 translate-x-2 bg-secondary p-6 transition-all duration-300"
		/>
	</Sidebar.Inset>
</Sidebar.Provider>

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
