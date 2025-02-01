<script lang="ts">
	import { onMount } from 'svelte';

	// Constants
	const CURSOR_SIZES = {
		default: 48,
		enlarged: 80
	};

	const TRANSITION_DURATION = 200;
	const HIDE_CURSOR_DELAY = 2000;
	const DEFAULT_SNAP_PADDING = 5;

	// Helper functions
	function createCursorAnimation(options: {
		top: number;
		left: number;
		width: number;
		height: number;
		borderRadius: string | number;
	}) {
		return {
			top: `${options.top}px`,
			left: `${options.left}px`,
			width: `${options.width}px`,
			height: `${options.height}px`,
			borderRadius:
				typeof options.borderRadius === 'number'
					? `${options.borderRadius}px`
					: options.borderRadius
		};
	}

	function handleElementCursor(cursor: HTMLElement, e: MouseEvent, element: HTMLElement) {
		if (element.dataset.cursor === 'enlarge') {
			const size = CURSOR_SIZES.enlarged;
			cursor.animate(
				createCursorAnimation({
					top: e.clientY - size / 2,
					left: e.clientX - size / 2,
					width: size,
					height: size,
					borderRadius: size / 2
				}),
				{ duration: TRANSITION_DURATION, fill: 'forwards' }
			);
		} else {
			var elementDimemsions = element.getBoundingClientRect();
			var borderRadius = window.getComputedStyle(element).borderRadius;
			cursor.animate(
				createCursorAnimation({
					top: elementDimemsions.top - cursorSnapPadding,
					left: elementDimemsions.left - cursorSnapPadding,
					width: elementDimemsions.width + cursorSnapPadding * 2,
					height: elementDimemsions.height + cursorSnapPadding * 2,
					borderRadius: borderRadius
				}),
				{ duration: TRANSITION_DURATION, fill: 'forwards' }
			);
		}
	}

	let timeout: number;
	let cursorSnapPadding = DEFAULT_SNAP_PADDING;

	onMount(() => {
		const cursor = document.getElementById('cursor');

		function hideCursor() {
			cursor?.classList.add('opacity-0');
		}

		function showCursor() {
			cursor?.classList.remove('opacity-0');
		}

		function updateCursor(e: MouseEvent) {
			if (
				cursor &&
				e.target &&
				'tagName' in e.target &&
				((e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'BUTTON')
			) {
				handleElementCursor(cursor, e, e.target as HTMLElement);
			} else {
				const size = CURSOR_SIZES.default;
				cursor?.animate(
					createCursorAnimation({
						top: e.clientY - size / 2,
						left: e.clientX - size / 2,
						width: size,
						height: size,
						borderRadius: size / 2
					}),
					{ duration: TRANSITION_DURATION, fill: 'forwards' }
				);
			}

			clearTimeout(timeout);
			timeout = setTimeout(() => {
				hideCursor();
			}, HIDE_CURSOR_DELAY);

			showCursor();
		}

		window.addEventListener('mousemove', updateCursor);

		window.document.body.addEventListener('mouseleave', () => {
			hideCursor();
		});

		window.document.body.addEventListener('mouseenter', () => {
			showCursor();
		});

		window.document.body.addEventListener('mousedown', (e) => {
			if (
				e.target &&
				'tagName' in e.target &&
				((e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'BUTTON')
			) {
				cursorSnapPadding = 0;
			} else {
				cursor?.classList.add('scale-90');
			}
			updateCursor(e);
		});

		window.document.body.addEventListener('mouseup', (e) => {
			cursorSnapPadding = DEFAULT_SNAP_PADDING;
			updateCursor(e);
			cursor?.classList.remove('scale-90');
		});
	});
</script>

<div
	id="cursor"
	class="pointer-events-none fixed z-50 hidden h-16 w-16 rounded-3xl bg-white mix-blend-difference duration-200 md:block"
></div>
