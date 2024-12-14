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
	<div id="backgroundshapecontainer">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
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
		class="flex max-w-prose flex-col items-start justify-center md:flex-row"
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

	#backgroundshapecontainer {
		position: absolute;
		width: 100%;
		height: 100%;
		animation: backgroundshapecontainer 20s infinite linear;
		filter: blur(1000px) brightness(0.5);
		transition-duration: 300ms;
		overflow: hidden;
	}

	#backgroundshapecontainer div {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: white;
		mask-repeat: no-repeat;
		mask-size: contain;
		mask-position: center;
	}

	#backgroundshapecontainer div:nth-child(1) {
		background: linear-gradient(45deg, #f5e0dc, #f2cdcd, #f5c2e7);
		animation: fadeInOut 10s infinite;
		animation-delay: 1s;
		opacity: 0;
		mask-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjRkYwMDY2IiBkPSJNNDIuMSwtNTQuOEM1MC42LC00Myw1MC44LC0yNiw1Mi4yLC0xMC4zQzUzLjcsNS4zLDU2LjMsMTkuNyw1MC45LDI5LjZDNDUuNCwzOS42LDMyLDQ1LjIsMTcuMyw1Mi44QzIuNyw2MC41LC0xMy4yLDcwLjEsLTI1LjUsNjdDLTM3LjksNjMuOSwtNDYuOCw0OCwtNTYuMSwzMi4yQy02NS40LDE2LjUsLTc1LjIsMC43LC03Ni4yLC0xN0MtNzcuMywtMzQuNywtNjkuNywtNTQuMywtNTUuNiwtNjUuMUMtNDEuNCwtNzYsLTIwLjcsLTc3LjksLTIsLTc1LjVDMTYuOCwtNzMuMiwzMy42LC02Ni42LDQyLjEsLTU0LjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIgLz4KPC9zdmc+');
	}

	#backgroundshapecontainer div:nth-child(2) {
		background: linear-gradient(45deg, #cba6f7, #f38ba8, #eba0ac);
		animation: fadeInOut 10s infinite;
		animation-delay: 3s;
		opacity: 0;
		mask-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjRkYwMDY2IiBkPSJNNTEuOSwtNjMuNEM2My4zLC01Mi4zLDY1LjksLTMyLjIsNjYuMiwtMTQuMUM2Ni41LDQsNjQuNSwyMC4xLDU2LjksMzIuNkM0OS40LDQ1LDM2LjEsNTMuOSwyMi4yLDU3LjVDOC4zLDYxLC02LjMsNTkuMiwtMjAuNiw1NC44Qy0zNC45LDUwLjQsLTQ4LjksNDMuNCwtNTkuMiwzMS40Qy02OS41LDE5LjQsLTc2LjEsMi40LC03MiwtMTEuMkMtNjcuOCwtMjQuOSwtNTMsLTM1LjIsLTM5LjIsLTQ1LjhDLTI1LjQsLTU2LjUsLTEyLjcsLTY3LjYsMy44LC03Mi4xQzIwLjMsLTc2LjYsNDAuNSwtNzQuNSw1MS45LC02My40WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwIDEwMCkiIC8+Cjwvc3ZnPgo=');
	}

	#backgroundshapecontainer div:nth-child(3) {
		background: linear-gradient(45deg, #fab387, #f9e2af, #a6e3a1);
		animation: fadeInOut 10s infinite;
		animation-delay: 5s;
		opacity: 0;
		mask-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjRkYwMDY2IiBkPSJNNTIuMiwtNTcuOEM2Ny45LC00OSw4MS4xLC0zMi44LDgyLjYsLTE1LjhDODQuMiwxLjMsNzQuMSwxOS4xLDYyLjEsMzIuMUM1MC4yLDQ1LjEsMzYuMiw1My4yLDIxLjcsNTcuNUM3LjMsNjEuNywtNy44LDYyLjIsLTIwLjUsNTcuMkMtMzMuMiw1Mi4yLC00My42LDQxLjcsLTU1LjYsMjguNEMtNjcuNiwxNS4yLC04MS4yLC0wLjgsLTgyLjEsLTE3LjdDLTgyLjksLTM0LjcsLTcxLjEsLTUyLjcsLTU1LjMsLTYxLjVDLTM5LjUsLTcwLjIsLTE5LjgsLTY5LjcsLTAuOCwtNjguOEMxOC4yLC02Ny45LDM2LjUsLTY2LjUsNTIuMiwtNTcuOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIiAvPgo8L3N2Zz4K');
	}

	#backgroundshapecontainer div:nth-child(4) {
		background: linear-gradient(45deg, #94e2d5, #89dceb, #74c7ec);
		animation: fadeInOut 10s infinite;
		animation-delay: 7s;
		opacity: 0;
		mask-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjRkYwMDY2IiBkPSJNNDguNywtNTIuM0M2NSwtNDQuNCw4MS40LC0zMC44LDgzLjQsLTE1LjNDODUuMywwLjEsNzIuOSwxNy41LDU5LjgsMjkuMUM0Ni42LDQwLjcsMzIuOSw0Ni41LDE4LjIsNTMuM0MzLjUsNjAuMSwtMTIsNjcuOSwtMjYuMiw2NS42Qy00MC40LDYzLjIsLTUzLjMsNTAuNywtNTguNSwzNi40Qy02My43LDIyLC02MS4xLDUuOSwtNTkuNiwtMTEuOEMtNTgsLTI5LjQsLTU3LjMsLTQ4LjUsLTQ3LjYsLTU3LjVDLTM3LjgsLTY2LjUsLTE4LjksLTY1LjQsLTEuMywtNjMuOEMxNi4yLC02Mi4yLDMyLjUsLTYwLjEsNDguNywtNTIuM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIiAvPgo8L3N2Zz4K');
	}

	#backgroundshapecontainer div:nth-child(5) {
		background: linear-gradient(45deg, #89b4fa, #b4befe, #cba6f7);
		animation: fadeInOut 10s infinite;
		animation-delay: 9s;
		opacity: 0;
		mask-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjRkYwMDY2IiBkPSJNNTIuNiwtNjMuMkM2NC43LC01Mi42LDY4LjcsLTMyLjcsNjcuNSwtMTUuNEM2Ni4zLDEuOCw2MCwxNi40LDUzLDMyLjZDNDYsNDguNywzOC4zLDY2LjUsMjUuMyw3Mi40QzEyLjQsNzguMywtNS45LDcyLjQsLTE5LjUsNjMuMkMtMzMuMSw1NC4xLC00Miw0MS44LC00OS4zLDI4LjdDLTU2LjYsMTUuNiwtNjIuMywxLjgsLTU5LjIsLTkuNkMtNTYuMiwtMjEsLTQ0LjUsLTMwLC0zMy4yLC00MC44Qy0yMS44LC01MS42LC0xMC45LC02NC4xLDQuNywtNjkuN0MyMC4zLC03NS4yLDQwLjUsLTczLjgsNTIuNiwtNjMuMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCAxMDApIiAvPgo8L3N2Zz4K');
	}

	@keyframes fadeInOut {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}

	@keyframes backgroundshapecontainer {
		0% {
			transform: scale(0.8);
		}
		50% {
			transform: scale(1);
		}
		100% {
			transform: scale(0.8);
		}
	}
</style>
