<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import '@fontsource/inter';
</script>

<Sidebar.Provider style="--sidebar-width: 19rem;" open={false}>
	<AppSidebar />
	<Sidebar.Inset>
		{@render children()}
		<Sidebar.Trigger
			id="sidebar-trigger"
			class="fixed bottom-2 translate-x-2 bg-background p-6 transition-all duration-300"
		/>
	</Sidebar.Inset>
</Sidebar.Provider>

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
