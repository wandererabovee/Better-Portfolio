import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const slug = params.slug;
  const filepath = path.resolve(`src/content/posts/${slug}.md`);

  if (!fs.existsSync(filepath)) {
    throw error(404, `Post not found: ${slug}`);
  }

  try {
    const fileContent = fs.readFileSync(filepath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      title: data.title,
      date: data.date,
      html: marked(content)
    };
  } catch (err) {
    console.error('❌ Failed to parse blog post:', err);
    throw error(500, 'Error parsing blog content');
  }
};
