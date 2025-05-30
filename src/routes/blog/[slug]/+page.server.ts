import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const file = fs.readFileSync(`src/content/posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);

  return {
    ...data,
    html: marked(content),
  };
}
