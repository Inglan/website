// Some code from https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`/src/content/projects/${params.project}.md`);
		const { title } = post.metadata;
		const content = post.default;

		return {
			content,
			title
		};
	} catch (e) {
		throw error(404, 'Project not found');
	}
}
