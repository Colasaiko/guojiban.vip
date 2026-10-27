// IndexNow 推送：把 dist/sitemap.xml 里的 URL 提交给 Bing 等支持 IndexNow 的搜索引擎。
// 需要先 npm run build，并且网站已上线、https://guojiban.vip/<key>.txt 可以访问。
//
// 用法：
//   node scripts/indexnow.mjs                      预览将提交的全部 URL（不发送）
//   node scripts/indexnow.mjs --since 2026-10-23   只预览 lastmod 不早于该日期的 URL
//   node scripts/indexnow.mjs --since 2026-10-23 --submit   实际提交
import fs from 'node:fs';
import path from 'node:path';

const HOST = 'guojiban.vip';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const submit = args.includes('--submit');
const sinceIndex = args.indexOf('--since');
const since = sinceIndex >= 0 ? args[sinceIndex + 1] : undefined;

const keyFile = fs.readdirSync('public').find(f => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('public/ 下没有找到 IndexNow key 文件（32 位十六进制文件名的 .txt）');
const key = path.basename(keyFile, '.txt');

const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
// sitemap 每个 <url> 分行缩进，允许标签之间有空白
const entries = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]+)<\/lastmod>\s*)?<\/url>/g)]
  .map(([, loc, lastmod]) => ({ loc, lastmod }));
const urls = entries
  .filter(e => !since || (e.lastmod && e.lastmod >= since))
  .map(e => e.loc);

console.log(`共 ${urls.length} 个 URL${since ? `（lastmod >= ${since}）` : ''}：`);
urls.forEach(u => console.log('  ' + u));

if (!submit) {
  console.log('\n预览模式，未提交。确认无误后加上 --submit 实际提交。');
  process.exit(0);
}
if (urls.length === 0) process.exit(0);

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls }),
});
console.log(`\nIndexNow 响应：${res.status} ${res.statusText}`);
if (!res.ok) process.exit(1);
