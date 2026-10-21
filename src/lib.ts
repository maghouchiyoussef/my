import { getCollection } from 'astro:content';

// المقالات المنشورة فقط، من الأحدث إلى الأقدم
export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
