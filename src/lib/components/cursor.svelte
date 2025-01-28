<script lang="ts">
	import { onMount } from 'svelte';

	let size = 50;

	onMount(() => {
		window.addEventListener('mousemove', (e) => {
			const cursor = document.getElementById('cursor');
			cursor?.animate(
				{
					top: `${e.clientY - size / 2}px`,
					left: `${e.clientX - size / 2}px`,
					width: `${size}px`,
					height: `${size}px`
				},
				{
					duration: 500,
					fill: 'forwards'
				}
			);
		});
	});
</script>

<div
	id="cursor"
	class="pointer-events-none fixed z-50 h-12 w-12 rounded-full bg-white mix-blend-difference"
></div>
