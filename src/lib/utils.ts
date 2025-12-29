import type { Component } from 'svelte';

export interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
	author: string;
	tags: string[];
	published: boolean;
}

export async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/lib/content/blog/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } as Post;
			post.published !== false && posts.push(post);
		}
	}

	posts = posts.sort((first, second) =>
		new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}
