<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	const sidebar = useSidebar();

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
				<span class="scale-50 opacity-0 blur-md">use arch btw</span>
				<span class="scale-50 opacity-0 blur-md">code stuff</span>
			</div>
		</div>
	</div>
</div>

<Carousel.Root
	class="mx-auto max-w-prose"
	opts={{
		loop: true
	}}
	plugins={[
		Autoplay({
			delay: 2000,
			stopOnInteraction: false
		})
	]}
>
	<Carousel.Content>
		<Carousel.Item>
			<Card.Root class="flex h-full w-full flex-col bg-transparent">
				<Card.Header>
					<Card.Title>Project Alpha</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>A revolutionary new app that changes the way you think about productivity.</p>
				</Card.Content>
				<div class="flex-grow"></div>
			</Card.Root>
		</Carousel.Item>
		<Carousel.Item>
			<Card.Root class="flex h-full w-full flex-col bg-transparent">
				<Card.Header>
					<Card.Title>Project Beta</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>An innovative platform for seamless collaboration and communication.</p>
				</Card.Content>
				<div class="flex-grow"></div>
			</Card.Root>
		</Carousel.Item>
		<Carousel.Item>
			<Card.Root class="flex h-full w-full flex-col bg-transparent">
				<Card.Header>
					<Card.Title>Project Gamma</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>A cutting-edge tool for managing your personal finances with ease.</p>
				</Card.Content>
				<div class="flex-grow"></div>
			</Card.Root>
		</Carousel.Item>
		<Carousel.Item>
			<Card.Root class="flex h-full w-full flex-col bg-transparent">
				<Card.Header>
					<Card.Title>Project Delta</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>An advanced analytics platform for gaining insights into your data.</p>
				</Card.Content>
				<div class="flex-grow"></div>
			</Card.Root>
		</Carousel.Item>
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>

<!-- <div class="flex flex-col gap-3 p-2">
	<h2 class="coloredtext text-center text-4xl">Projects</h2>

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
</div> -->

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
