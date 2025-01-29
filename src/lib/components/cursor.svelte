<script lang="ts">
	import { onMount } from 'svelte';

	let scale = 1;
	let timeout: number;

	onMount(() => {
		const cursor = document.getElementById('cursor');

		window.addEventListener('mousemove', (e) => {
			cursor?.animate(
				{
					top: `${e.clientY - 48 / 2}px`,
					left: `${e.clientX - 48 / 2}px`,
					scale: scale
				},
				{
					duration: 300,
					fill: 'forwards'
				}
			);

			if (
				e.target &&
				'tagName' in e.target &&
				((e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'BUTTON')
			) {
				scale = 1.5;
			} else {
				scale = 1;
			}

			clearTimeout(timeout);
			timeout = setTimeout(() => {
				cursor?.classList.add('opacity-0');
			}, 2000);

			cursor?.classList.remove('opacity-0');
		});

		window.document.body.addEventListener('mouseleave', () => {
			cursor?.classList.add('opacity-0');
		});

		window.document.body.addEventListener('mouseenter', () => {
			cursor?.classList.remove('opacity-0');
		});
	});
</script>

<div
	id="cursor"
	class="pointer-events-none fixed z-50 h-16 w-16 rounded-full bg-white mix-blend-difference duration-200"
></div>
