<script lang="ts" module>
	// sample data
	const data = {
		versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
		navMain: [
			{
				title: 'Getting Started',
				url: '#',
				items: [
					{
						title: 'Installation',
						url: '#'
					},
					{
						title: 'Project Structure',
						url: '#'
					}
				]
			},
			{
				title: 'Building Your Application',
				url: '#',
				items: [
					{
						title: 'Routing',
						url: '#'
					},
					{
						title: 'Data Fetching',
						url: '#',
						isActive: true
					},
					{
						title: 'Rendering',
						url: '#'
					},
					{
						title: 'Caching',
						url: '#'
					},
					{
						title: 'Styling',
						url: '#'
					},
					{
						title: 'Optimizing',
						url: '#'
					},
					{
						title: 'Configuring',
						url: '#'
					},
					{
						title: 'Testing',
						url: '#'
					},
					{
						title: 'Authentication',
						url: '#'
					},
					{
						title: 'Deploying',
						url: '#'
					},
					{
						title: 'Upgrading',
						url: '#'
					},
					{
						title: 'Examples',
						url: '#'
					}
				]
			},
			{
				title: 'API Reference',
				url: '#',
				items: [
					{
						title: 'Components',
						url: '#'
					},
					{
						title: 'File Conventions',
						url: '#'
					},
					{
						title: 'Functions',
						url: '#'
					},
					{
						title: 'next.config.js Options',
						url: '#'
					},
					{
						title: 'CLI',
						url: '#'
					},
					{
						title: 'Edge Runtime',
						url: '#'
					}
				]
			},
			{
				title: 'Architecture',
				url: '#',
				items: [
					{
						title: 'Accessibility',
						url: '#'
					},
					{
						title: 'Fast Refresh',
						url: '#'
					},
					{
						title: 'Svelte Compiler',
						url: '#'
					},
					{
						title: 'Supported Browsers',
						url: '#'
					},
					{
						title: 'Rollup',
						url: '#'
					}
				]
			}
		]
	};
</script>

<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Home from 'lucide-svelte/icons/home';
	import Code from 'lucide-svelte/icons/code';
	import User from 'lucide-svelte/icons/user';
	import type { ComponentProps } from 'svelte';
	import { Separator } from 'bits-ui';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

	const navigation = [
		{
			title: 'Home',
			url: '/',
			icon: Home
		},
		{
			title: 'Projects',
			url: '/projects',
			icon: Code
		},
		{
			title: 'About me',
			url: '/about',
			icon: User
		}
	];
</script>

<Sidebar.Root variant="sidebar" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/" {...props}>
							<div
								class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
							>
								In
							</div>
							<div class="flex flex-col gap-0.5 leading-none">
								<span class="font-semibold">Ingo Wolf</span>
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Separator />
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.Menu>
				{#each navigation as item}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton size="lg">
							{#snippet child({ props })}
								<a href={item.url} {...props}>
									<item.icon />
									{item.title}</a
								>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				{/each}
			</Sidebar.Menu>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
