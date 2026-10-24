import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { allBrands, type BrandInfo } from '../src/data/brands.ts';
import { reviewsDetailMap } from '../src/data/reviewsDetail.ts';

const jichangbuyDir = 'C:/Users/USER/Desktop/BLOG/Github内容/jichangbuy/brands';
const targetFile = path.resolve('src/data/brands.ts');

const updatedBrands: BrandInfo[] = allBrands.map(b => {
  const fileSlug = b.slug === 'flyv' ? 'feiv' : b.slug;
  const filePath = path.join(jichangbuyDir, `${fileSlug}.md`);
  let jcData: any = {};
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (m) {
      try { jcData = YAML.parse(m[1]); } catch (e) {}
    }
  }

  const detail = reviewsDetailMap[b.slug];
  const lowest = detail?.pricing?.lowestPlanSummary;
  const coupon = detail?.pricing?.couponInfo;

  // 1. Minimum price
  let minMonthly = b.minMonthly;
  if (lowest) {
    if (lowest.discountPrice) {
      const priceClean = lowest.discountPrice.replace('¥', '').trim();
      const num = parseFloat(priceClean);
      minMonthly = `¥${isNaN(num) ? priceClean : num.toString()} 起`;
    } else if (lowest.originalPrice) {
      const origClean = lowest.originalPrice.replace('¥', '').trim();
      const num = parseFloat(origClean);
      minMonthly = `¥${isNaN(num) ? origClean : num.toString()} 起`;
    }
  }
  if (b.slug === 'bitznet') {
    minMonthly = '¥15.8/月起 (三年付折合)';
  } else if (b.slug === 'nanocloud') {
    minMonthly = '¥1 起';
  }

  // 2. Devices
  let devices = b.devices;
  if (jcData.deviceLimit && typeof jcData.deviceLimit === 'string') {
    devices = jcData.deviceLimit.trim();
  }

  // 3. Speed
  let speed = b.speed;
  if (jcData.speedLimit && typeof jcData.speedLimit === 'string') {
    speed = jcData.speedLimit.trim();
  }

  // 4. Coupon
  const couponCode = coupon?.code || b.coupon;
  const couponDiscount = coupon?.discount || b.couponDiscount;

  // 5. Features
  const features = b.features.map(f => {
    if (f.includes('月付') && f.includes('起')) {
      return `券后 ${minMonthly}`;
    }
    return f;
  });

  // Specific brand custom summaries & tag polishes
  let summary = b.summary;
  let tag = b.tag;
  let pros = b.pros;
  let cons = b.cons;

  if (b.slug === 'weifeng') {
    tag = '站长核心主推 · 全IPLC专线';
    summary = '微风网络采用全 IPLC 专线与 VLESS 协议架构，主打全节点不限速且不限制设备同时接入。套餐月流量从 100GB 覆盖至 1200GB，同时提供 270GB 与 570GB 固定总量的不限时备用流量包。支持 Netflix、Disney+ 与 ChatGPT 等主流使用场景。当前官方提供全场 7 折优惠码 weifeng90（清风年付折合约 ¥7.99/月，乘风月付折后 ¥17.50 起）。';
    devices = '不限制设备同时接入';
    speed = '标称不限速';
  } else if (b.slug === 'wuyou') {
    tag = '站长核心主推 · 全IPLC专线';
    summary = '无忧链接采用全 IPLC 专线架构与全节点 x1 倍率，官方资料标称不限制速度、不限制客户端数量。提供 40GB 至 1000GB 的多档常规月流量方案、100GB 与 300GB 永久不限时固定流量包，以及企业级定制方案。官方提供 iOS、Android、Windows、macOS 四平台自研客户端。结算时使用专属优惠码 wuyou666 享 8 折特惠（舒心链接月付折后 ¥15.20 起，MINI链接年付折合约 ¥6.58/月）。';
    devices = '不限制客户端数量';
    speed = '官方标称不限制速度';
    pros = [
      '严格源自 jichangbuy 数据库，全 IPLC 专线 + 四平台自研客户端，支持 8 折券 wuyou666',
      '不限制客户端及设备数量，提供 100GB 与 300GB 永久不限时备用包'
    ];
  } else if (b.slug === 'firefly') {
    tag = '站长核心主推 · 全IPLC专线';
    summary = 'FireFly 萤火虫于 2026 年创立，采用全 IPLC 物理专线与现代 VLESS 协议，全节点标称不限速，且不限制客户端及设备数量。当前提供 60GB 至 1000GB 的多档月流量套餐以及 100GB 不限时固定流量包。支持原生 IP 与主流流媒体、AI 工具。新用户使用专属优惠码 firefly 享 8 折特惠（Firefly Lite 月付折后 ¥20.00 起，年付版折合约 ¥8.00/月）。';
    devices = '不限制客户端及设备数量';
    speed = '官方标称不限速';
    pros = [
      '全 IPLC 专线 + VLESS 协议，全节点不限速且不限制设备连接数量',
      '支持新用户 8 折优惠码 firefly，支持 100GB 不限时备用包'
    ];
  } else if (b.slug === 'dalao') {
    tag = '站长核心主推 · 全IPLC专线';
    summary = '大佬云采用企业级全 IPLC 国际专线与 Shadowsocks 协议，提供年付活动包、月付（120GB 至 1200GB）及季付订阅，以及 200GB 不限时一次性流量包。官方资料标明不限制同时在线设备数量，原生 IP 稳定解锁 Netflix 与 ChatGPT。专属优惠码 dly888 仅限新用户首次购买月付订阅套餐享 7 折优惠（初云入门版月付折后仅 ¥16.10 起，年付包折合 ¥8.00/月）。';
    devices = '不限制同时在线设备';
    speed = '官方标称不限速';
    pros = [
      '企业级 IPLC 专线，不限制同时在线设备数量，支持 7 折优惠码 dly888',
      '原生 IP 支持主流流媒体与 AI，提供 200GB 不限时备用包'
    ];
  } else if (b.slug === 'feimao') {
    tag = '站长核心主推 · 全IPLC专线';
    summary = '飞猫云采用全 IPLC 专线出口与原生 IP 架构，单节点峰值带宽标称最高达 2.5Gbps，支持主流流媒体与 ChatGPT 智能工具。套餐覆盖 100GB 至 1000GB 多档月流量方案以及不限时固定总量包，且不限制设备连接数量。结算页输入专属优惠码 flycat888 可为符合条件的常规月付套餐提供 8 折优惠（飞猫·星耀版月付折后 ¥20.00 起，学生版年付折合约 ¥7.00/月）。';
    devices = '不限制设备连接数量';
    speed = '官方标称最高 2.5Gbps';
    pros = [
      '全 IPLC 专线 + 原生 IP，标称最高 2.5Gbps，不限制设备连接数量',
      '支持专属特惠券 flycat888（8折），提供学生版轻量年付方案'
    ];
  } else if (b.slug === 'muguang') {
    devices = '不限制同时在线设备数量';
    speed = '官方标注全程不限速';
    summary = '暮光加速采用 Shadowsocks 协议、BGP 多线路智能调度与专线级出口架构，提供 70GB 至 1500GB 月流量方案、三档不限时流量包以及独享私人定制节点。官方页面标明全程不限速且不限制同时在线设备数量。全面支持 Netflix、Disney+ 与 AI 工具。当前优惠码 mm88 可享 8 折优惠（暮光·基础版月付折后 ¥16.00 起）。';
  } else if (b.slug === 'lingmao') {
    devices = '不限制客户端及设备数量';
    speed = '官方标称不限速';
    summary = '灵猫提供全 IPLC 专线与全节点 x1 计费倍率，官方标称不限速且不限制客户端与设备数量。当前套餐覆盖 45GB 至 300GB 月流量，同时提供 100GB 与 500GB 不限时固定总量包。符合条件的常规月付套餐使用优惠码 lingmao 享 8 折优惠（月付Small折后 ¥20.00 起）。';
  } else if (b.slug === 'shanyue') {
    devices = '不限制同时使用客户端数量';
    speed = '官方标注晚高峰不限速';
    summary = '闪跃采用全 IPLC 专线架构与原生 IP，常规节点全为 x1 计费倍率，官方资料标明晚高峰不限速且不限制客户端数量。提供 60GB 至 1000GB 的多档月流量方案，以及 100GB、200GB 不限时固定总量包。使用专属优惠码 shanyue 享 8 折特惠（闪动套餐月付折后 ¥19.20 起）。';
  } else if (b.slug === 'kuajie') {
    devices = '不限制设备登录数量';
    speed = '官方标称不限速';
    summary = '跨界云主打 IPLC 高端物理专线，全节点 1 倍率且官方标称不限速，明确支持多设备同时登录共同消耗流量。主力套餐覆盖 120GB 至 1800GB 月流量，同时提供 60GB、120GB 及 240GB 不限时固定流量包。结算使用优惠码 kuajie 享 8 折特惠（轻云 Lite 月付折后 ¥16.00 起）。';
  }

  return {
    ...b,
    tag,
    speed,
    devices,
    minMonthly,
    coupon: couponCode,
    couponDiscount,
    summary,
    features,
    pros,
    cons,
    updatedAt: '2026-10-20'
  };
});

const contentToWrite = `export interface BrandInfo {
  slug: string;
  name: string;
  tag: string;
  category: 'primary' | 'extended';
  score: string;
  speed: string;
  latency: string;
  packetLoss: string;
  lineType: string;
  streaming: string;
  aiSupport: string;
  devices: string;
  minMonthly: string;
  coupon: string;
  couponDiscount: string;
  targetUrl: string;
  summary: string;
  features: string[];
  pros: string[];
  cons: string[];
  updatedAt: string;
}

export const allBrands: BrandInfo[] = ${JSON.stringify(updatedBrands, null, 2)};

export function getBrandBySlug(slug: string): BrandInfo | undefined {
  return allBrands.find(b => b.slug === slug);
}
`;

fs.writeFileSync(targetFile, contentToWrite, 'utf8');
console.log(`Successfully synchronized all ${updatedBrands.length} brands in src/data/brands.ts!`);
