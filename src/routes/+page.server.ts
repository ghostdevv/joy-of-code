import { fetchJSON } from '$lib/site/posts'
import { error } from '@sveltejs/kit'

export async function load({ fetch }) {
	try {
		const posts = await fetchJSON('/api/posts?limit=10', fetch)
		return { posts }
	} catch (e) {
		throw error(404, (e as Error).message)
	}
}
