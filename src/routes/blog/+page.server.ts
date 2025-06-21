import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const posts = [
		{
			title: 'First Post',
			slug: 'first-post',
			image: 'https://picsum.photos/200/300',
			description: 'This is the content of the first post.This is the content of the first post.'
		},
		{
			title: 'Second Post',
			slug: 'second-post',
			image: 'https://picsum.photos/200/300',
			description: 'This is the content of the second post.'
		}
	];

	return { posts };
};
