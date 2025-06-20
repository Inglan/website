<script lang="ts">
	import { page } from '$app/state';
	import clsx from 'clsx';

	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	import IconMenu from '~icons/material-symbols/menu-rounded';

	const menuItems = [
		{ url: '/', label: 'Home' },
		{ url: '/about', label: 'About' },
		{ url: '/projects', label: 'Projects' },
		{ url: '/blog', label: 'Blog' },
		{ url: '/contact', label: 'Contact' }
	];

	let mobileMenuOpen = $state(false);
</script>

{#snippet menuItem(url: string, label: string)}
	<a
		href={url}
		onclick={() => {
			mobileMenuOpen = false;
		}}
		class={clsx(
			'text-7xl hover:text-foreground duration-300',
			page.url.pathname === url ? 'text-primary' : 'text-muted'
		)}>{label}</a
	>
{/snippet}

<div
	class="min-w-96 h-screen sticky top-0 left-0 justify-center p-4 px-10 flex-col gap-4 border-r border-dashed hidden md:flex"
>
	{#each menuItems as item}
		{@render menuItem(item.url, item.label)}
	{/each}
</div>

<Drawer.Root bind:open={mobileMenuOpen} direction="left">
	<Drawer.Content>
		<div class="flex flex-col gap-4 p-5 h-full justify-end">
			{#each menuItems as item}
				{@render menuItem(item.url, item.label)}
			{/each}
		</div>
	</Drawer.Content>
</Drawer.Root>

<Button
	class="fixed bottom-3 left-3 text-2xl size-15 md:hidden"
	size="icon"
	variant="outline"
	onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
>
	<IconMenu class="size-7" />
</Button>
