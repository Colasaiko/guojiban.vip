import { site } from '../data/site';

const abs = (path: string) => new URL(path, site.url).href;

// 站点主体：首页 WebSite、文章 publisher 共用
export const organization = {
  '@type': 'Organization',
  name: site.name,
  url: abs('/'),
  logo: abs('/favicon.svg'),
};

// 博客文章与专题页的 Article 结构化数据
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  published: Date;
  modified: Date;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: abs('/og-default.jpg'),
    datePublished: opts.published.toISOString(),
    dateModified: opts.modified.toISOString(),
    inLanguage: 'zh-CN',
    author: { '@type': 'Organization', name: opts.author ?? `${site.name}编辑部`, url: abs('/about/') },
    publisher: organization,
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.path) },
  };
}

// 首页：WebSite + Organization
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', name: site.name, url: abs('/'), inLanguage: 'zh-CN', publisher: organization },
    organization,
  ],
};
