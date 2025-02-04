<script lang="ts">
	export let data;

	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

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
