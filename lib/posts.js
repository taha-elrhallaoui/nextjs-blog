import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPost(id) {
  const name = path.join(postsDirectory, `${id}.md`);
  const content = fs.readFileSync(name, 'utf-8');
  const grayMatter = matter(content);
  const processedContent = await remark()
    .use(remarkHtml)
    .process(grayMatter.content);
  const html = processedContent.toString();
  return {
    id,
    html,
    ...grayMatter.data,
  };
}

export async function getPostIDs() {
  const names = fs.readdirSync(postsDirectory);
  return names.map((name) => name.replace(/\.md$/, ''));
}

export async function getPosts() {
  const names = fs.readdirSync(postsDirectory);
  const posts = Promise.all(
    names.map((name) => {
      const id = name.replace(/\.md$/, '');
      return getPost(id);
    })
  );
  return await posts;
}

export async function getSortedPosts() {
  const posts = await getPosts();
  return posts.sort(({ date: a }, { date: b }) => (a < b ? 1 : a > b ? -1 : 0));
}
