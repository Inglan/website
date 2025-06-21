<script lang="ts">
	let { children } = $props();
</script>

<div class="prose prose-invert">
	{@render children()}
</div>
