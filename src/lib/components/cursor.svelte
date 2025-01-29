<script lang="ts">
	import { onMount } from 'svelte';

	let timeout: number;
	const cursorSnapPadding = 5;
	const transitionDuration = 200;

	onMount(() => {
		const cursor = document.getElementById('cursor');

		function updateCursor(e: MouseEvent) {
			if (
				e.target &&
				'tagName' in e.target &&
				((e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'BUTTON')
			) {
				var elementDimemsions = (e.target as HTMLElement).getBoundingClientRect();
				var borderRadius = window.getComputedStyle(e.target as HTMLElement).borderRadius;
				cursor?.animate(
					{
						top: `${elementDimemsions.top - cursorSnapPadding}px`,
						left: `${elementDimemsions.left - cursorSnapPadding}px`,
						width: `${elementDimemsions.width + cursorSnapPadding * 2}px`,
						height: `${elementDimemsions.height + cursorSnapPadding * 2}px`,
						scale: 1,
						borderRadius: borderRadius
					},
					{
						duration: transitionDuration,
						fill: 'forwards'
					}
				);
			} else {
				cursor?.animate(
					{
						top: `${e.clientY - 48 / 2}px`,
						left: `${e.clientX - 48 / 2}px`,
						width: '48px',
						height: '48px',
						borderRadius: '24px'
					},
					{
						duration: transitionDuration,
						fill: 'forwards'
					}
				);
			}

			clearTimeout(timeout);
			timeout = setTimeout(() => {
				cursor?.classList.add('opacity-0');
			}, 2000);

			cursor?.classList.remove('opacity-0');
		}

		window.addEventListener('mousemove', updateCursor);

		window.document.body.addEventListener('mouseleave', () => {
			cursor?.classList.add('opacity-0');
		});

		window.document.body.addEventListener('mouseenter', () => {
			cursor?.classList.remove('opacity-0');
		});

		window.document.body.addEventListener('mousedown', (e) => {
			updateCursor(e);
			cursor?.classList.add('scale-90');
		});

		window.document.body.addEventListener('mouseup', (e) => {
			updateCursor(e);
			cursor?.classList.remove('scale-90');
		});
	});
</script>

<div
	id="cursor"
	class="pointer-events-none fixed z-50 h-16 w-16 rounded-3xl bg-white mix-blend-difference duration-200"
></div>
