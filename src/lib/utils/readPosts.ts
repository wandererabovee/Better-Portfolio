import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.resolve('src/content/posts');

export function readPosts() {
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      topics: Array.isArray(data.topics)
        ? data.topics
        : data.topic
        ? [data.topic]
        : [],
      html: content
    };    
  });
}
