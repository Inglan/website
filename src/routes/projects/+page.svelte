<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';

	import SvelteSeo from 'svelte-seo';

	// Icons
	import Github from 'svelte-material-icons/Github.svelte';
	import Earth from 'svelte-material-icons/Earth.svelte';

	const projects = [
		{
			title: 'MemoryOverflow',
			description:
				'A simple platformer game written in Godot for a school project. But with some totally real memory leak issues :)',
			links: [
				{ name: 'Source Code', icon: Github, link: 'https://github.com/Inglan/MemoryOverflow' }
			],
			slug: 'memoryoverflow'
		},

		{
			title: 'uRun',
			description:
				'Some scripts to let you execute arbitrary code using uBlock Origin filters. Very buggy.',
			links: [{ name: 'Source Code', icon: Github, link: 'https://github.com/uStuff/uRun' }],
			slug: ''
		},
		{
			title: 'Star Battles',
			description:
				'A simple 2D space shooter game created and compiled with Turbowarp. Most game logic was written by a friend, I did the UI. Also the name is not inspired from anything at all trust me bro.',
			links: [
				{
					name: 'Website',
					icon: Earth,
					link: 'https://smastudiosau.github.io/projects/starbattle/'
				},
				{ name: 'Source Code', icon: Github, link: 'https://github.com/SMAStudiosAU/Star-Battles' }
			],
			slug: ''
		},
		{
			title: 'Noe Co. Website',
			description: "A website developed in Svelte for a friend's game development company.",
			links: [
				{ name: 'Website', icon: Earth, link: 'https://noeco.xyz/' },
				{ name: 'Source Code', icon: Github, link: 'https://github.com/NoeCoOfficial/www' }
			],
			slug: ''
		},
		{
			title: 'This website',
			description:
				"This very website is built in Svelte by me. It's open source so you can check out the code if you want.",
			links: [
				{ name: 'Website', icon: Earth, link: '/' },
				{ name: 'Source Code', icon: Github, link: 'https://github.com/Inglan/website' }
			],
			slug: ''
		}
	];
</script>

<SvelteSeo title="Projects - Ingo" />

<div class="m-auto grid max-w-screen-lg grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
	<Card.Root class="flex items-center justify-center">
		<h1>Projects</h1>
	</Card.Root>
	{#each projects as project}
		<Card.Root class="flex flex-col">
			<Card.Header>
				<Card.Title>{project.title}</Card.Title>
			</Card.Header>
			<Card.Content class="flex-grow">{project.description}</Card.Content>
			<Card.Footer>
				<div class="flex w-full flex-row gap-3">
					{#if project.slug}
						<Button href={`projects/${project.slug}`}>Read More</Button>
					{/if}
					{#each project.links as link}
						<Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
									{#snippet child({ props })}
										<a target="_blank" href={link.link} {...props}>
											<div class="sr-only">{link.name}</div>
											<link.icon />
										</a>
									{/snippet}
								</Tooltip.Trigger>
								<Tooltip.Content>
									<p>{link.name}</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider>
					{/each}
				</div>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
