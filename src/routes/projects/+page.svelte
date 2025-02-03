<script lang="ts">
	export let data;
</script>

{#each data.projects as project}
	<a href={project.slug}>
		{project.title}
	</a>
{/each}
