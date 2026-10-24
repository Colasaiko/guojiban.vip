import type { CollectionEntry } from 'astro:content';

// 标签至少被这么多篇文章使用才生成独立标签页，避免大量只有一张卡片的薄页面
export const MIN_POSTS_PER_TAG = 3;

export function tagsWithPages(posts: CollectionEntry<'blog'>[]): Set<string> {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return new Set([...counts].filter(([, n]) => n >= MIN_POSTS_PER_TAG).map(([tag]) => tag));
}
