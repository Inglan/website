<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-row w-full">
	<div class="min-w-96 h-screen sticky top-0 left-0 flex justify-center p-4 flex-col gap-4">
		<a href="/" class="text-7xl text-primary duration-100">Home</a>
		<a href="/projects" class="text-7xl text-foreground/50 hover:text-foreground duration-100"
			>Projects</a
		>
		<a href="/about" class="text-7xl text-foreground/50 hover:text-foreground duration-100">About</a
		>
		<a href="/blog" class="text-7xl text-foreground/50 hover:text-foreground duration-100">Blog</a>
		<a href="/contact" class="text-7xl text-foreground/50 hover:text-foreground duration-100"
			>Contact</a
		>
	</div>
	<div class="w-full">
		<main class="p-4 container mx-auto">
			{@render children()}
		</main>
	</div>
</div>
