<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import ClassNames from 'embla-carousel-class-names';
	import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

	import Github from 'svelte-material-icons/Github.svelte';
	import Earth from 'svelte-material-icons/Earth.svelte';

	const sidebar = useSidebar();

	const projects = [
		{
			title: 'MemoryOverflow',
			description:
				'A simple platformer game written in Godot for a school project. But with some totally real memory leak issues :)',
			links: [
				{ name: 'Source Code', icon: Github, link: 'https://github.com/Inglan/MemoryOverflow' }
			]
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
			]
		},
		{
			title: 'uRun',
			description: 'Execute arbitrary code using uBlock Origin filters.',
			links: [{ name: 'Source Code', icon: Github, link: 'https://github.com/uStuff/uRun' }]
		},
		{
			title: 'Noe Co. Website',
			description: "A website developed in Svelte for a friend's game development company.",
			links: [
				{ name: 'Website', icon: Earth, link: 'https://noeco.xyz/' },
				{ name: 'Source Code', icon: Github, link: 'https://github.com/NoeCoOfficial/www' }
			]
		}
	];

	import { onMount, onDestroy } from 'svelte';

	function hideSidebar() {
		if (sidebar.state == 'expanded') {
			sidebar.toggle();
		}
	}

	function showSidebar() {
		if (sidebar.state == 'collapsed') {
			sidebar.toggle();
		}
	}

	let handleScroll = () => {};

	onMount(() => {
		const sidebarScrollYThreshold = 1;
		var openedSidebar = false;

		handleScroll = () => {
			if (window.scrollY > sidebarScrollYThreshold && !openedSidebar) {
				if (!sidebar.isMobile) {
					showSidebar();
				}
				openedSidebar = true;
			} else if (window.scrollY < sidebarScrollYThreshold && openedSidebar) {
				if (!sidebar.isMobile) {
					hideSidebar();
				}
				openedSidebar = false;
			}
		};

		window.addEventListener('scroll', handleScroll);

		const sidebarTrigger = document.getElementById('sidebar-trigger');

		setTimeout(() => {
			if (sidebarTrigger) {
				sidebarTrigger.addEventListener('mouseenter', showSidebar);
				sidebarTrigger.addEventListener('click', sidebar.toggle);
			}
		}, 300);

		// loop through the things
		const things = document.getElementById('things');
		const thingsChildren = things?.children;
		if (thingsChildren) {
			let i = 0;
			setInterval(() => {
				thingsChildren[i].classList.add('opacity-0');
				thingsChildren[i].classList.remove('scale-100');
				thingsChildren[i].classList.add('blur-md');
				thingsChildren[i].classList.add('scale-50');
				i = (i + 1) % thingsChildren.length;
				thingsChildren[i].classList.remove('opacity-0');
				thingsChildren[i].classList.remove('scale-50');
				thingsChildren[i].classList.remove('blur-md');
				thingsChildren[i].classList.add('scale-100');
			}, 2000);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<div class="hero flex h-screen flex-col items-center justify-center gap-3 p-2 pl-0">
	<div
		class="absolute left-0 z-10 hidden h-screen w-20 cursor-pointer items-center justify-center bg-background md:flex"
		role="none"
		id="sidebar-trigger"
	>
		<span class="-rotate-90 text-xl text-slate-500">Menu</span>
	</div>
	<div class="z-10 flex w-fit flex-col gap-3 drop-shadow-xl">
		<div class="text-4xl duration-500 md:text-6xl">
			Hi, I'm <span class="coloredtext">Ingo Wolf</span>,
		</div>
		<div class="flex flex-row text-2xl duration-500 md:text-4xl">
			and I&nbsp;
			<div id="things" class="[&>*]:filter-blur-5 [&>*]:absolute [&>*]:duration-300">
				<span>develop websites</span>
				<span class="scale-50 opacity-0 blur-md">code stuff</span>
				<span class="scale-50 opacity-0 blur-md">make games</span>
				<span class="scale-50 opacity-0 blur-md">mess with ai</span>
				<span class="scale-50 opacity-0 blur-md">use arch btw</span>
			</div>
		</div>
	</div>
</div>

<Carousel.Root
	class="w-[calc(100vw)] md:mx-auto md:max-w-prose"
	opts={{
		loop: true
	}}
	plugins={[
		Autoplay({
			delay: 2000,
			stopOnInteraction: false,
			stopOnFocusIn: false,
			stopOnMouseEnter: true
		}),
		ClassNames(),
		WheelGesturesPlugin()
	]}
>
	<Carousel.Content
		class="[&>*:not(.is-snapped)>*]:scale-95 [&>*:not(.is-snapped)]:opacity-50 [&>*]:transition-opacity [&>*]:duration-300"
	>
		{#each projects as project}
			<Carousel.Item class="basis-2/3">
				<Card.Root class="flex h-full flex-col bg-transparent">
					<Card.Header>
						<Card.Title>{project.title}</Card.Title>
					</Card.Header>
					<Card.Content class="flex-grow">
						<p>{project.description}</p>
					</Card.Content>
					<Card.Footer>
						<div class="flex w-full flex-row justify-end gap-3">
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
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous class="hidden md:flex" />
	<Carousel.Next class="hidden md:flex" />
</Carousel.Root>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<style>
	.coloredtext {
		background: linear-gradient(45deg, #fab387, #f38ba8);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
