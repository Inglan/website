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
	import ChevronRight from 'svelte-material-icons/ChevronRight.svelte';

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
		gsap.from('#projects > *', {
			opacity: 0,
			y: 50,
			duration: 0.5,
			ease: 'expo.out',
			stagger: 0.1,
			scrollTrigger: {
				trigger: '#projects',
				scrub: true
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

<!-- Projects -->

<div class="section">
	<h2 class="coloredtext text-center">Projects</h2>

	<div class="max-w-full overflow-hidden">
		<div
			class="m-auto grid max-w-screen-lg grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3"
			id="projects"
		>
			{#each projects as project}
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
			{/each}
			<Button
				class="col-span-1 h-full w-full no-underline md:col-span-2 lg:col-span-1"
				variant="outline"
				href="/projects"
			>
				More
				<ChevronRight />
			</Button>
		</div>
	</div>
</div>

<div class="section">
	I'm gonna put some text here at some point
	<br />
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque blandit lacus vel lectus sagittis,
	consectetur interdum est ornare. Etiam accumsan, orci eu porta congue, mi eros vestibulum arcu, quis
	gravida risus nibh nec lorem. Maecenas posuere, risus sit amet pretium ultrices, purus lacus vulputate
	elit, eu sollicitudin libero tortor sit amet leo. Vestibulum tincidunt et enim nec lobortis. Morbi
	nibh dolor, facilisis sit amet maximus ac, dignissim non nunc. Donec sodales mi ut erat porta faucibus
	sit amet at odio. Proin porta pellentesque libero, a faucibus velit convallis vitae. Suspendisse non
	justo nisl. Vivamus volutpat feugiat lacus non faucibus. Duis dictum faucibus mi, nec euismod lorem
	tristique vitae. Sed dapibus, nibh fermentum interdum dapibus, neque felis fermentum est, vitae semper
	felis libero quis nunc. Donec sagittis scelerisque semper. Mauris posuere dolor a orci dapibus scelerisque.
</div>
