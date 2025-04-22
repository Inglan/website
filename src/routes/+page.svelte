<script lang="ts">
	import clsx from 'clsx';

	import Menu from '$lib/components/Menu.svelte';
	import { menuState } from '$lib/state.svelte';
</script>

<div
	class={clsx(
		'fixed top-5 right-5 flex h-20 w-20 rounded-full backdrop-blur-lg',
		menuState.open && 'bg-surface1/50 open'
	)}
	id="menubackground"
></div>

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
			width 1s,
			height 1s,
			top 1s,
			right 1s,
			background-color 1s 1s;
	}
	#menubackground.open {
		width: calc(max(100vw, 100vh) * 4);
		height: calc(max(100vw, 100vh) * 4);
		top: calc((0px - max(100vw, 100vh) * 2) + 20px);
		right: calc((0px - max(100vw, 100vh) * 2) + 20px);
		transition:
			width 1s,
			height 1s,
			top 1s,
			right 1s,
			background-color 0s;
	}
</style>
