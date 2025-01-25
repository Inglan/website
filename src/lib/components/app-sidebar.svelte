<script lang="ts">
	// UI Components
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	// Icons
	import Home from 'svelte-material-icons/Home.svelte';
	import Code from 'svelte-material-icons/CodeTags.svelte';
	import User from 'svelte-material-icons/Account.svelte';
	import Github from 'svelte-material-icons/Github.svelte';
	import Mail from 'svelte-material-icons/Email.svelte';

	// Types
	import type { ComponentProps } from 'svelte';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

	// Navigation items
	const navigation = [
		{ title: 'Home', url: '/', icon: Home },
		{ title: 'Projects', url: '/projects', icon: Code },
		{ title: 'About me', url: '/about', icon: User }
	];
</script>

<Sidebar.Root variant="floating" {...restProps}>
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
									{item.title}
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				{/each}
			</Sidebar.Menu>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer>
		<Sidebar.Group>
			<Sidebar.Menu class="gap-3">
				<Sidebar.MenuItem class="flex flex-row justify-center gap-3">
					<Button size="icon" variant="secondary" href="https://github.com/Inglan">
						<Github />
					</Button>
					<Button size="icon" variant="secondary" href="mailto:me@ingo.au">
						<Mail />
					</Button>
				</Sidebar.MenuItem>
				<Sidebar.MenuItem class="text-center">Made with ♥️ in Svelte</Sidebar.MenuItem>
			</Sidebar.Menu>
		</Sidebar.Group>
	</Sidebar.Footer>
</Sidebar.Root>
