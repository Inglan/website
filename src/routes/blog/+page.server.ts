import type { PageServerLoad } from './$types';
import { getPosts } from './get-posts';

export const load: PageServerLoad = async ({ params }) => {
	const posts = await getPosts();

	return { posts };
};
