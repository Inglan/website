<script lang="ts">
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
		const sidebarScrollYThreshold = 20;
		var openedSidebar = true;
		if (window.scrollY < sidebarScrollYThreshold) {
			hideSidebar();
			document.getElementById('sidebar-trigger')?.classList.remove('bg-secondary');
			openedSidebar = false;
		}
		const handleScroll = () => {
			if (!sidebar.isMobile) {
				if (window.scrollY > sidebarScrollYThreshold && !openedSidebar) {
					showSidebar();
					document.getElementById('sidebar-trigger')?.classList.add('bg-secondary');
					openedSidebar = true;
				} else if (window.scrollY < sidebarScrollYThreshold && openedSidebar) {
					hideSidebar();
					document.getElementById('sidebar-trigger')?.classList.remove('bg-secondary');
					openedSidebar = false;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
	});
</script>

<div class="hero flex h-screen items-center justify-center p-2 pl-0">
	<div id="backgroundshapecontainer">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="z-10">aasdfasdfasdf asdfkas fasf sadfkl ajs ldk</div>
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<style>
	#backgroundshapecontainer {
		position: absolute;
		width: 100%;
		height: 80%;
		animation: backgroundshapecontainer 10s infinite alternate linear;
		filter: blur(1000px) brightness(0.5);
		transition-duration: 300ms;
	}

	#backgroundshapecontainer div {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: white;
		border-radius: 200px;
	}

	#backgroundshapecontainer div:nth-child(1) {
		background: linear-gradient(45deg, #f5e0dc, #f2cdcd, #f5c2e7);
		animation: fadeInOut 10s infinite;
		animation-delay: 1s;
		opacity: 0;
	}

	#backgroundshapecontainer div:nth-child(2) {
		background: linear-gradient(45deg, #cba6f7, #f38ba8, #eba0ac);
		animation: fadeInOut 10s infinite;
		animation-delay: 3s;
		opacity: 0;
	}

	#backgroundshapecontainer div:nth-child(3) {
		background: linear-gradient(45deg, #fab387, #f9e2af, #a6e3a1);
		animation: fadeInOut 10s infinite;
		animation-delay: 5s;
		opacity: 0;
	}

	#backgroundshapecontainer div:nth-child(4) {
		background: linear-gradient(45deg, #94e2d5, #89dceb, #74c7ec);
		animation: fadeInOut 10s infinite;
		animation-delay: 7s;
		opacity: 0;
	}

	#backgroundshapecontainer div:nth-child(5) {
		background: linear-gradient(45deg, #89b4fa, #b4befe, #cba6f7);
		animation: fadeInOut 10s infinite;
		animation-delay: 9s;
		opacity: 0;
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
			transform: scale(0.7);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
