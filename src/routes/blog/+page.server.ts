import { readPosts } from '../../lib/utils/readPosts';
import headers from '../../data/headers.json';

export async function load() {
  const posts = await readPosts();

  const topics = Array.from(
    new Set(posts.flatMap(post => post.topics ?? []))
  );

  return {
    hero: headers.blog,
    posts,
    topics
  };
}
