import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import headers from '../../data/headers.json';
import type { PageServerLoad } from './$types';

const postsDir = 'src/content/posts';

export const load: PageServerLoad = () => {
  const files = fs.readdirSync(postsDir);

  const posts = files.map((file: string) => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { data } = matter(content);
    const slug = file.replace('.md', '');
    return {
      title: data.title,
      date: data.date,
      slug
    };
  });

  return {
    hero: headers.blog,
    posts
  };
};
