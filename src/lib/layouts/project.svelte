<script lang="ts">
	export let title;

	import SvelteSeo from 'svelte-seo';

	import { Button } from '$lib/components/ui/button/index.js';

	import Back from 'svelte-material-icons/ArrowLeft.svelte';
</script>

<SvelteSeo title={title + ' - Ingo'} />

<article class="m-auto max-w-screen-lg p-4">
	<div class="flex flex-col gap-3 md:flex-row md:items-center">
		<Button
			onclick={() => {
				history.back();
			}}
			size="icon"
			variant="ghost"><Back /></Button
		>
		<h1>{title}</h1>
	</div>
	<slot></slot>
</article>
