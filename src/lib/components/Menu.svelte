<script lang="ts">
	import clsx from 'clsx';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let gsapctx: gsap.Context;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
	});

	import { menuState } from '$lib/state.svelte';
	import { onMount } from 'svelte';

	$effect(() => {
		if (menuState.open) {
			gsap.set('#menu', {
				display: 'flex',
				opacity: 1,
				x: 0,
				y: 0,
				scale: 1,
				delay: 0.1
			});
			gsap.from('#menu > a', {
				delay: 0.1,
				duration: 0.2,
				x: 10,
				opacity: 0,
				ease: 'power2.out',
				stagger: 0.1
			});
		} else if (!menuState.open) {
			gsap.to('#menu', {
				duration: 0.2,
				x: 10,
				opacity: 0,
				ease: 'power2.out'
			});
			gsap.set('#menu', {
				delay: 0.2,
				display: 'none'
			});
		}
	});
</script>

<div
	class={clsx(
		'fixed top-5 right-5 flex h-20 w-20 rounded-full ',
		menuState.open && 'bg-crust/95 open'
	)}
	id="menubackground"
></div>

<div id="menu" class="fixed top-0 right-0 hidden h-full w-lg max-w-full flex-col gap-3 p-3">
	<a href="/">home</a>
	<a href="/">home</a>
	<a href="/">home</a>
	<a href="/">home</a>
	<a href="/">home</a>
</div>

<button
	class="bg-surface1/50 fixed top-5 right-5 flex h-20 w-20 items-center justify-center rounded-full backdrop-blur-lg duration-200 hover:scale-[1.1] active:scale-[0.95]"
	onclick={() => (menuState.open = !menuState.open)}
	id="menutrigger"
	aria-label="Menu"
>
	<div
		class={clsx(
			'group menuicon flex scale-200 flex-col items-center justify-center gap-[3px]',
			menuState.open && 'open'
		)}
		id="menuicon"
	>
		<div
			class="bg-text h-[2px] w-[18px] rounded-full duration-200 group-[.open]:translate-y-[5px] group-[.open]:rotate-45"
		></div>
		<div class="bg-text h-[2px] w-[18px] rounded-full duration-200 group-[.open]:w-0"></div>
		<div
			class="bg-text h-[2px] w-[18px] rounded-full duration-200 group-[.open]:-translate-y-[5px] group-[.open]:-rotate-45"
		></div>
	</div>
</button>

<style>
	#menubackground {
		transition:
			all 0.5s,
			background-color 0.5s 0.5s;
	}
	#menubackground.open {
		width: calc(max(100vw, 100vh) * 3);
		height: calc(max(100vw, 100vh) * 3);
		top: calc((0px - max(100vw, 100vh) * 1.5) + 20px);
		right: calc((0px - max(100vw, 100vh) * 1.5) + 20px);
		transition:
			all 0.5s,
			background-color 0s;
	}
</style>
