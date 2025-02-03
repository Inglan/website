const projectPaths = import.meta.glob('$lib/content/projects/*.md');

export async function load() {
	let projects: {
		title: string;
		excerpt: string;
		slug: string;
	}[] = [];

	for (const path in projectPaths) {
		import(path).then((project) => {
			let title = project.metadata.title;
			let excerpt = project.metadata.excerpt;
			let splitPath = path.split('/');
			let slug = '/projects/' + splitPath[splitPath.length - 1].replace('.md', '');

			projects.push({
				title,
				excerpt,
				slug
			});
		});
	}

	return { projects };
}
