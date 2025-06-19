<script lang="ts">
	import { page } from '$app/state';
	import clsx from 'clsx';

	const menuItems = [
		{ url: '/', label: 'Home' },
		{ url: '/about', label: 'About' },
		{ url: '/projects', label: 'Projects' },
		{ url: '/blog', label: 'Blog' },
		{ url: '/contact', label: 'Contact' }
	];
</script>

{#snippet menuItem(url: string, label: string)}
	<a
		href={url}
		class={clsx(
			'text-7xl hover:text-foreground duration-300',
			page.url.pathname === url ? 'text-primary' : 'text-muted'
		)}>{label}</a
	>
{/snippet}

<div class="min-w-96 h-screen sticky top-0 left-0 flex justify-center p-4 px-10 flex-col gap-4">
	{#each menuItems as item}
		{@render menuItem(item.url, item.label)}
	{/each}
</div>
