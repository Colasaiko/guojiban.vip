import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { categories, categoryHref, site } from '../data/site';
import { allBrands } from '../data/brands';
import { tagsWithPages } from '../utils/tags';

type Entry = { path: string; lastmod?: string };

const day = (d: Date) => d.toISOString().slice(0, 10);
const latest = (dates: string[]) => dates.length ? dates.reduce((a, b) => (a > b ? a : b)) : undefined;

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({data}) => !data.draft);
  const topics = await getCollection('topics');
  const reviews = await getCollection('reviews');
  // 测速页的更新日期取最新一次实测日期
  const testDates = reviews.map(r => (r.data as { latestTest?: { date: string } }).latestTest?.date).filter((d): d is string => Boolean(d));
  const postDates = posts.map(p => day(p.data.updatedDate));
  const brandDates = allBrands.map(b => b.updatedAt);

  // lastmod 只使用内容里真实存在的日期；没有可靠日期的静态页不写 lastmod
  const entries: Entry[] = [
    { path: '/', lastmod: latest(postDates) },
    { path: '/resources/' },
    { path: '/tizi/' },
    { path: '/brands/' },
    { path: '/blog/', lastmod: latest(postDates) },
    { path: '/topics/' },
    { path: '/compare/' },
    { path: '/about/' },
    { path: '/data/', lastmod: latest(testDates) },
    { path: '/reviews/', lastmod: latest(brandDates) },
    // 机场测评大全是独立页面，不论是否已有正式文章都提交
    { path: '/jichang/' },
    // 空分类只有占位提示，不提交
    ...categories
      .map(c => ({ c, dates: posts.filter(p => p.data.category === c.slug).map(p => day(p.data.updatedDate)) }))
      .filter(({ c, dates }) => c.slug !== 'airports' && dates.length > 0)
      .map(({ c, dates }) => ({ path: categoryHref(c.slug), lastmod: latest(dates) })),
    ...posts.map(p => ({ path: `/blog/${p.id}/`, lastmod: day(p.data.updatedDate) })),
    ...topics.map(t => ({ path: `/topics/${t.id}/`, lastmod: day(t.data.updatedDate) })),
    ...[...tagsWithPages(posts)].map(tag => ({
      path: `/tag/${tag}/`,
      lastmod: latest(posts.filter(p => p.data.tags.includes(tag)).map(p => day(p.data.updatedDate))),
    })),
    ...allBrands.filter(b => b.category === 'primary').map(b => ({ path: `/reviews/${b.slug}/`, lastmod: b.updatedAt })),
  ];

  const urls = entries.map(({ path, lastmod }) =>
    `<url><loc>${new URL(path, site.url).href}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
  ).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type':'application/xml; charset=utf-8' } });
};
