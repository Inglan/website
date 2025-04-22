<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import { menuOpen } from '$lib/state.svelte';
</script>

<div class="fixed top-5 right-5 flex h-15 w-15 rounded-full backdrop-blur-lg" id="menu"></div>

<div
	class="bg-surface1/50 fixed top-5 right-5 flex h-15 w-15 items-center justify-center rounded-full backdrop-blur-lg duration-200 hover:scale-[1.1] active:scale-[0.95]"
	id="menutrigger"
>
	<div class="group flex flex-col items-center justify-center gap-[3px]" id="menuicon">
		<div
			class="bg-text h-[2px] w-[18px] rounded-full duration-200 group-[.open]:translate-y-[5px] group-[.open]:rotate-45"
		></div>
		<div class="bg-text h-[2px] w-[18px] rounded-full duration-200 group-[.open]:w-0"></div>
		<div
			class="bg-text h-[2px] w-[18px] rounded-full duration-200 group-[.open]:-translate-y-[5px] group-[.open]:-rotate-45"
		></div>
	</div>
</div>
