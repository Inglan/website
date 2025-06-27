<script lang="ts">
	let { children } = $props();
</script>

<div
	class="prose prose-lg prose-custom md:prose-xl mx-auto p-3 prose-headings:font-normal prose-h1:text-6xl"
>
	{@render children()}
</div>
