<script lang="ts">
	import { onMount } from 'svelte';

	let size = 40;

	onMount(() => {
		const cursor = document.getElementById('cursor');

		window.addEventListener('mousemove', (e) => {
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

			if (
				e.target &&
				'tagName' in e.target &&
				((e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'BUTTON')
			) {
				size = 60;
			} else {
				size = 40;
			}
		});

		window.document.body.addEventListener('mouseleave', () => {
			size = 0;
			cursor?.animate(
				{
					width: `${size}px`,
					height: `${size}px`
				},
				{
					duration: 500,
					fill: 'forwards'
				}
			);
		});

		window.document.body.addEventListener('mouseenter', () => {
			size = 40;
			cursor?.animate(
				{
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
