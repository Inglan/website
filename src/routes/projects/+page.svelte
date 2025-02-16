<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo title="Projects - Ingo" />

<div class="m-auto grid max-w-screen-lg grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
	<Card.Root class="flex items-center justify-center">
		<h1>Projects</h1>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>MemoryOverflow</Card.Title>
		</Card.Header>
		<Card.Content>
			A simple platformer game written in Godot for a school project. But with some totally real
			memory leak issues :)
		</Card.Content>
		<Card.Footer>
			<Button href="projects/memoryoverflow">Read More</Button>
		</Card.Footer>
	</Card.Root>
</div>
