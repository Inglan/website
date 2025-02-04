<script lang="ts">
	import { onMount } from 'svelte';

	import Check from 'svelte-material-icons/Check.svelte';
	import Copy from 'svelte-material-icons/ContentCopy.svelte';
	import { fade } from 'svelte/transition';
	import { toast } from 'svelte-sonner';

	let icon = '';

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
			var borderRadius = Number(window.getComputedStyle(element).borderRadius.replace('px', ''));
			cursor.animate(
				createCursorAnimation({
					top: elementDimemsions.top - cursorSnapPadding,
					left: elementDimemsions.left - cursorSnapPadding,
					width: elementDimemsions.width + cursorSnapPadding * 2,
					height: elementDimemsions.height + cursorSnapPadding * 2,
					borderRadius: Math.max(borderRadius, 5)
				}),
				{ duration: TRANSITION_DURATION, fill: 'forwards' }
			);
		}

		if (element.tagName == 'PRE') {
			icon = 'copy';
		} else {
			icon = '';
		}
	}

	let timeout: number;
	let cursorSnapPadding = DEFAULT_SNAP_PADDING;

	onMount(() => {
		const cursor = document.getElementById('cursor');

		function hideCursor() {
			cursor?.classList.add('opacity-0');
			cursor?.classList.add('blur-lg');
		}

		function showCursor() {
			cursor?.classList.remove('opacity-0');
			cursor?.classList.remove('blur-lg');
		}

		function updateCursor(e: MouseEvent) {
			if (
				cursor &&
				e.target &&
				'tagName' in e.target &&
				((e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'BUTTON' ||
					(e.target as HTMLElement).tagName === 'PRE')
			) {
				handleElementCursor(cursor, e, e.target as HTMLElement);
			} else {
				icon = '';
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
				cursor &&
				e.target &&
				'tagName' in e.target &&
				((e.target as HTMLElement).tagName === 'A' ||
					(e.target as HTMLElement).tagName === 'PRE' ||
					(e.target as HTMLElement).tagName === 'BUTTON') &&
				!((e.target as HTMLElement).dataset.cursor === 'enlarge')
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

			if (e.target && (e.target as HTMLElement).tagName === 'PRE') {
				try {
					navigator.clipboard.writeText((e.target as HTMLElement).innerText);
					icon = 'copied';
					toast.success('Copied to clipboard');
				} catch (e) {
					toast.error('Failed to copy to clipboard', { description: String(e) });
				}
			}
		});
	});
</script>

<div
	id="cursor"
	class="pointer-events-none fixed z-[999999999999999999] hidden h-16 w-16 items-center justify-center rounded-3xl bg-white mix-blend-difference duration-200 md:flex [&>*]:absolute"
>
	{#if icon == 'copy'}
		<div transition:fade={{ duration: 100 }} class="flex items-center justify-center gap-2">
			<Copy color="black" />
			<span class="text-black">Click to copy</span>
		</div>
	{/if}
	{#if icon == 'copied'}
		<div transition:fade={{ duration: 100 }} class="flex items-center justify-center gap-2">
			<Check color="black" />
			<span class="text-black">Copied!</span>
		</div>
	{/if}
</div>
