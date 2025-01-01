<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { register } from 'swiper/element/bundle';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	const sidebar = useSidebar();

	import { onMount } from 'svelte';

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
	onMount(() => {
		register();

		const sidebarScrollYThreshold = 1;
		var openedSidebar = true;
		if (window.scrollY < sidebarScrollYThreshold) {
			hideSidebar();
			document.getElementById('sidebar-trigger')?.classList.remove('bg-secondary');
			openedSidebar = false;
		}
		const handleScroll = () => {
			if (window.scrollY > sidebarScrollYThreshold && !openedSidebar) {
				if (!sidebar.isMobile) {
					showSidebar();
				}
				document.getElementById('sidebar-trigger')?.classList.add('bg-secondary');
				openedSidebar = true;
			} else if (window.scrollY < sidebarScrollYThreshold && openedSidebar) {
				if (!sidebar.isMobile) {
					hideSidebar();
				}
				document.getElementById('sidebar-trigger')?.classList.remove('bg-secondary');
				openedSidebar = false;
			}
		};

		window.addEventListener('scroll', handleScroll);

		const things = ['develop websites', 'use arch btw', 'code stuff'];
		let currentIndex = 0;
		setInterval(() => {
			const thingElement = document.getElementById('thing');
			if (thingElement) {
				thingElement.style.opacity = '0';
				setTimeout(() => {
					thingElement.textContent = things[currentIndex];
					thingElement.style.opacity = '1';
					currentIndex = (currentIndex + 1) % things.length;
				}, 500);
			}
		}, 5000);
	});
</script>

<div class="hero f flex h-screen flex-col items-center justify-center gap-2 p-2 pl-0">
	<div class="z-10 flex w-fit flex-col gap-2 drop-shadow-xl">
		<div class="text-4xl duration-500 md:text-6xl">
			Hi, I'm <span class="colored">Ingo Wolf</span>,
		</div>
		<div class="text-2xl duration-500 md:text-4xl">
			and I <span id="thing" class="duration-500">code stuff</span>
		</div>
	</div>
</div>

<div class="flex flex-col gap-2 p-2">
	<h2 class="colored text-center text-4xl">Projects</h2>

	<swiper-container
		space-between="10"
		loop="true"
		class="hidden md:max-w-screen-lg xl:block"
		slides-per-view="2"
		centered-slides="true"
		free-mode-enabled="true"
		autoplay-delay="1000"
	>
		<swiper-slide>
			<Card.Root class="flex h-full w-full flex-col bg-transparent">
				<Card.Header>
					<Card.Title>Project Alpha</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>A revolutionary new app that changes the way you think about productivity.</p>
				</Card.Content>
				<div class="flex-grow"></div>
			</Card.Root>
		</swiper-slide>
		<swiper-slide>
			<Card.Root class="flex h-full w-full flex-col bg-transparent">
				<Card.Header>
					<Card.Title>Project Beta</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>An innovative platform for seamless collaboration and communication.</p>
				</Card.Content>
				<div class="flex-grow"></div>
			</Card.Root>
		</swiper-slide>
		<swiper-slide>
			<Card.Root class="flex h-full w-full flex-col bg-transparent">
				<Card.Header>
					<Card.Title>Project Gamma</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>A cutting-edge tool for managing your personal finances with ease.</p>
				</Card.Content>
				<div class="flex-grow"></div>
			</Card.Root>
		</swiper-slide>
		<swiper-slide>
			<Card.Root class="flex h-full w-full flex-col bg-transparent">
				<Card.Header>
					<Card.Title>Project Delta</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>An advanced analytics platform for gaining insights into your data.</p>
				</Card.Content>
				<div class="flex-grow"></div>
			</Card.Root>
		</swiper-slide>
		<swiper-slide>
			<Card.Root class="flex h-full w-full flex-col bg-transparent">
				<Card.Header>
					<Card.Title>Project Epsilon</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>A state-of-the-art solution for automating your workflow.</p>
				</Card.Content>
				<div class="flex-grow"></div>
			</Card.Root>
		</swiper-slide>
	</swiper-container>
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<style>
	.colored {
		background: linear-gradient(45deg, #fab387, #f38ba8);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
