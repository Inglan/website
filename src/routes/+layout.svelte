<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import '@fontsource/inter';
	import { page } from '$app/state';

	import posthog from 'posthog-js';

	posthog.init('phc_1rTfejgP2wgjE7B769DxyoAaxsd2G5buNRHM9G1F2hK', {
		api_host: 'https://us.i.posthog.com',
		person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
	});
</script>

<Sidebar.Provider style="--sidebar-width: 19rem;" open={page.url.pathname == '/' ? false : true}>
	<AppSidebar />
	<Sidebar.Inset>
		{@render children()}
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
