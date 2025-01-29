<script lang="ts">
	import { onMount } from 'svelte';

	let scale = 1;
	let timeout: number;

	onMount(() => {
		const cursor = document.getElementById('cursor');

		window.addEventListener('mousemove', (e) => {
			if (
				e.target &&
				'tagName' in e.target &&
				((e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'BUTTON')
			) {
				var elementDimemsions = (e.target as HTMLElement).getBoundingClientRect();
				var borderRadius = window.getComputedStyle(e.target as HTMLElement).borderRadius;
				var pad = 5;
				cursor?.animate(
					{
						top: `${elementDimemsions.top - pad}px`,
						left: `${elementDimemsions.left - pad}px`,
						width: `${elementDimemsions.width + pad * 2}px`,
						height: `${elementDimemsions.height + pad * 2}px`,
						scale: 1,
						borderRadius: borderRadius
					},
					{
						duration: 300,
						fill: 'forwards'
					}
				);
				scale = 1.5;
			} else {
				cursor?.animate(
					{
						top: `${e.clientY - 48 / 2}px`,
						left: `${e.clientX - 48 / 2}px`,
						width: '48px',
						height: '48px',
						borderRadius: '24px',
						scale: scale
					},
					{
						duration: 300,
						fill: 'forwards'
					}
				);
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
	class="pointer-events-none fixed z-50 h-16 w-16 rounded-3xl bg-white mix-blend-difference transition-opacity duration-200"
></div>
