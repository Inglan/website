<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';
	import type { ComponentProps } from 'svelte';
	import { useSidebar } from './context.svelte.js';
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte';

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		...restProps
	}: ComponentProps<typeof Button> & {
		onclick?: (e: MouseEvent) => void;
	} = $props();

	const sidebar = useSidebar();
</script>

<Button
	type="button"
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	data-sidebar="trigger"
	variant="ghost"
	size="icon"
	class={className}
	{...restProps}
>
	<ChevronRight
		class={(sidebar.open && !sidebar.isMobile ? 'rotate-180' : '') +
			(sidebar.isMobile ? ' -rotate-90' : '') +
			' scale-125 duration-300'}
	/>
	<span class="sr-only">Toggle Sidebar</span>
</Button>
