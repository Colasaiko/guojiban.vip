import { getCollection } from 'astro:content';
import type { BrandReviewDetail, ReviewLatestTest } from '../types/review';

// 从品牌 md 的 latestTest 中取出列表页、评测页顶部要用的关键数值；没有测试时返回「待测试」
export function testSummary(test?: ReviewLatestTest) {
  const pick = (label: string) => test?.metrics.find(m => m.label === label)?.value;
  return {
    tested: Boolean(test),
    speed: pick('下载速度') ?? '待测试',
    latency: pick('延迟') ?? '待测试',
    packetLoss: pick('丢包率'),
    node: test?.node,
    date: test?.date,
  };
}

export type BrandTestInfo = ReturnType<typeof testSummary> & {
  // 没有测试时的状态文字：洽谈中 / 待测试
  pendingText: string;
  // 当次测试里官方不支持或打不开的网站（如香港节点的 ChatGPT、Claude）
  unavailable: string[];
};

// 列表页（首页、/brands/、/compare/、/tizi/）共用：按品牌 slug 读取测试摘要，与评测页同源
export async function getBrandTests(): Promise<Record<string, BrandTestInfo>> {
  const reviews = await getCollection('reviews');
  return Object.fromEntries(reviews.map(r => {
    const d = r.data as unknown as BrandReviewDetail;
    return [d.slug, {
      ...testSummary(d.latestTest),
      pendingText: d.testStatus ? '与官方洽谈中' : '待测试',
      unavailable: (d.latestTest?.services ?? []).filter(s => !/^\d/.test(s.latency)).map(s => s.name),
    }];
  }));
}
