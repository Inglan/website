<script lang="ts">
	let { children } = $props();
</script>

<div class="prose prose-lg md:prose-xl prose-invert mx-auto p-3">
	{@render children()}
</div>
