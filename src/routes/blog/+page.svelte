<script lang="ts">
	import Content from '$lib/components/content.svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog - Ingo's Site</title>
</svelte:head>

<Content>
	<h1>Blog</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 not-prose">
		{#each data.posts as post}
			<a href={post.slug} class="block h-full">
				<Card.Root class="pt-0 h-full">
					<img src={post.image} class="w-full aspect-video rounded object-cover" alt="" />
					<Card.Header>
						<Card.Title>{post.title}</Card.Title>
						<Card.Description class="line-clamp-2">{post.description}</Card.Description>
					</Card.Header>
				</Card.Root>
			</a>
		{/each}
	</div>
</Content>
