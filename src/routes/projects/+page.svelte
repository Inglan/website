<script lang="ts">
	export let data;

	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<div class="m-auto grid max-w-screen-lg grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
	<h1 class="flex items-center justify-center">Projects</h1>
	{#each data.projects as project}
		<Card.Root>
			<Card.Header>
				<Card.Title>{project.title}</Card.Title>
			</Card.Header>
			<Card.Content>
				{project.excerpt}
			</Card.Content>
			<Card.Footer>
				<Button href={project.slug}>Read More</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
