<script lang="ts">
	// UI Components
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import Blurredbackground from '$lib/components/blurredbackground.svelte';

	// Carousel Plugins
	import Autoplay from 'embla-carousel-autoplay';
	import ClassNames from 'embla-carousel-class-names';
	import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

	// Animation Library
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	let gsapctx: gsap.Context;

	// Icons
	import Github from 'svelte-material-icons/Github.svelte';
	import Earth from 'svelte-material-icons/Earth.svelte';

	// Svelte Lifecycle
	import { onMount, onDestroy } from 'svelte';

	import SvelteSeo from 'svelte-seo';

	const sidebar = useSidebar();

	// Projects data
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
			description:
				'Some scripts to let you execute arbitrary code using uBlock Origin filters. Very buggy.',
			links: [{ name: 'Source Code', icon: Github, link: 'https://github.com/uStuff/uRun' }]
		},
		{
			title: 'Noe Co. Website',
			description: "A website developed in Svelte for a friend's game development company.",
			links: [
				{ name: 'Website', icon: Earth, link: 'https://noeco.xyz/' },
				{ name: 'Source Code', icon: Github, link: 'https://github.com/NoeCoOfficial/www' }
			]
		},
		{
			title: 'This website',
			description:
				"This very website is built in Svelte by me. It's open source so you can check out the code if you want.",
			links: [
				{ name: 'Website', icon: Earth, link: '/' },
				{ name: 'Source Code', icon: Github, link: 'https://github.com/Inglan/website' }
			]
		}
	];

	// Sidebar functions
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

	// Constants
	const SIDEBAR_SCROLL_THRESHOLD = 100;
	const THINGS_ROTATION_INTERVAL = 1600;
	const HERO_ANIMATION_DELAY = 0.3;
	const BLUR_AMOUNT = '12px';

	// Animation configurations
	const heroTextAnimation = {
		opacity: 0,
		y: 50,
		scale: 0.9,
		duration: 0.5,
		ease: 'expo.out',
		stagger: 0.1
	};

	const secondaryHeroTextAnimation = {
		opacity: 0,
		scale: 0.5,
		duration: 0.5,
		filter: `blur(${BLUR_AMOUNT})`,
		ease: 'expo.out',
		stagger: 0.1
	};

	// Helper function to setup hero animations
	function setupHeroAnimations(timeline: gsap.core.Timeline) {
		timeline
			.from('.herotext', heroTextAnimation, 0.3)
			.from('.secondaryherotext', secondaryHeroTextAnimation, 1.2)
			.from(
				'#hero-sidebar-trigger',
				{
					opacity: 0,
					duration: 0.5,
					x: -50,
					ease: 'expo.out'
				},
				0
			);
	}

	// Helper function to setup scroll triggers
	function setupScrollTriggers() {
		gsap.from('.projects-carousel', {
			opacity: 0,
			y: 50,
			duration: 0.5,
			ease: 'expo.out',
			scrollTrigger: {
				trigger: '.projects-carousel'
			}
		});
	}

	onMount(() => {
		let openedSidebar = false;

		handleScroll = () => {
			if (window.scrollY > SIDEBAR_SCROLL_THRESHOLD && !openedSidebar) {
				if (!sidebar.isMobile) {
					showSidebar();
				}
				openedSidebar = true;
			} else if (window.scrollY < SIDEBAR_SCROLL_THRESHOLD && openedSidebar) {
				if (!sidebar.isMobile) {
					hideSidebar();
				}
				openedSidebar = false;
			}
		};

		window.addEventListener('scroll', handleScroll);

		const sidebarTrigger = document.getElementById('hero-sidebar-trigger');

		if (sidebarTrigger) {
			sidebarTrigger.addEventListener('click', sidebar.toggle);
		}

		// Loop through the things
		const things = document.getElementById('things');
		const thingsChildren = things?.children;
		if (thingsChildren) {
			let i = 0;
			setInterval(() => {
				thingsChildren[i].classList.add('opacity-0', 'blur-md', 'scale-50');
				thingsChildren[i].classList.remove('scale-100');
				i = (i + 1) % thingsChildren.length;
				thingsChildren[i].classList.remove('opacity-0', 'blur-md', 'scale-50');
				thingsChildren[i].classList.add('scale-100');
			}, THINGS_ROTATION_INTERVAL);
		}

		// Register scrolltrigger plugin
		gsap.registerPlugin(ScrollTrigger);

		gsapctx = gsap.context(() => {
			let heroTimeline = gsap.timeline({ delay: HERO_ANIMATION_DELAY });
			setupHeroAnimations(heroTimeline);
			setupScrollTriggers();
		});
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);

			gsapctx.revert(); // Cleanup
		}
	});
</script>

<SvelteSeo title="Ingo" description="Hi, I'm Ingo, and I develop websites" />

<!-- Hero Section -->

<Blurredbackground />
<div
	class="hero flex h-screen max-w-full flex-col items-center justify-center gap-3 overflow-hidden p-2 pl-0"
>
	<a
		class="absolute left-0 z-10 hidden h-screen w-20 cursor-pointer items-center justify-center no-underline md:flex"
		role="none"
		id="hero-sidebar-trigger"
		data-cursor="enlarge"
	>
		<span class="pointer-events-none -rotate-90 select-none text-xl">Menu</span>
	</a>
	<div class="z-10 flex w-fit flex-col drop-shadow-xl">
		<div class="flex flex-row gap-3 text-4xl duration-500 lg:text-6xl [&>span]:block [&>span]:py-2">
			<span class="herotext">Hi,</span> <span class="herotext">I'm</span>
			<span class="coloredtext herotext" id="name">Ingo Wolf,</span>
		</div>
		<div class="flex flex-row gap-2 text-2xl opacity-100 duration-500 lg:text-4xl">
			<span class="secondaryherotext">and</span> <span class="secondaryherotext">I</span>
			<div id="things" class="[&>*]:filter-blur-5 [&>*]:absolute [&>*]:duration-300">
				<span class="scale-50 opacity-0 blur-md">develop websites</span>
				<span class="scale-50 opacity-0 blur-md">code stuff</span>
				<span class="scale-50 opacity-0 blur-md">make games</span>
				<span class="scale-50 opacity-0 blur-md">mess with ai</span>
				<span class="scale-50 opacity-0 blur-md">use arch btw</span>
			</div>
		</div>
	</div>
</div>

<!-- Projects Carousel -->

<div class="section">
	<h2 class="coloredtext text-center">Projects</h2>
</div>

<div class="max-w-full overflow-hidden">
	<Carousel.Root
		class="projects-carousel section w-[calc(100vw)] max-w-full md:mx-auto md:max-w-prose"
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
		<Carousel.Previous class="hidden xl:flex" />
		<Carousel.Next class="hidden xl:flex" />
	</Carousel.Root>
</div>
