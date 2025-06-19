<script lang="ts">
	import { page } from '$app/state';
	import clsx from 'clsx';
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
	{@render menuItem('/', 'Home')}
	{@render menuItem('/about', 'About')}
	{@render menuItem('/projects', 'Projects')}
	{@render menuItem('/blog', 'Blog')}
	{@render menuItem('/contact', 'Contact')}
</div>
