<script lang="ts">
	let { children, title, image, posted, updated } = $props();
</script>

<div class="prose prose-lg md:prose-xl prose-invert mx-auto p-3">
	<img src={image} class="w-full h-96 object-cover rounded-xl" alt="" />
	<h1>{title}</h1>
	{@render children()}
</div>
