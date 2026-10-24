export interface BrandInfo {
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

export const allBrands: BrandInfo[] = [
  {
    "slug": "weifeng",
    "name": "微风网络",
    "tag": "站长核心主推 · 全IPLC专线",
    "category": "primary",
    "score": "9.8",
    "speed": "标称不限速",
    "latency": "25 ms",
    "packetLoss": "部分节点Timeout",
    "lineType": "IPLC",
    "streaming": "Netflix / Disney+ / HBO Max / TikTok",
    "aiSupport": "ChatGPT / Claude / Gemini",
    "devices": "不限制设备同时接入",
    "minMonthly": "¥17.5 起",
    "coupon": "weifeng90",
    "couponDiscount": "7折特惠",
    "targetUrl": "https://edp01.breezenetaff.com/#/?code=6ehSdfxw",
    "summary": "微风网络采用全 IPLC 专线与 VLESS 协议架构，主打全节点不限速且不限制设备同时接入。套餐月流量从 100GB 覆盖至 1200GB，同时提供 270GB 与 570GB 固定总量的不限时备用流量包。支持 Netflix、Disney+ 与 ChatGPT 等主流使用场景。当前官方提供全场 7 折优惠码 weifeng90（清风年付折合约 ¥7.99/月，乘风月付折后 ¥17.50 起）。",
    "features": [
      "全 IPLC 专线",
      "VLESS 协议",
      "券后 ¥17.5 起",
      "不限设备数量",
      "支持不限时套餐"
    ],
    "pros": [
      "严格源自 jichangbuy 数据库，全 IPLC 专线 + VLESS 协议，全场 7 折优惠码 weifeng90",
      "不限制设备同时接入数量，提供 270G 与 570G 不限时备用流量包"
    ],
    "cons": [
      "2026-10-20 实测显示部分节点存在 Timeout 波动，建议先以月付验证本地兼容性"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "feimao",
    "name": "飞猫云",
    "tag": "站长核心主推 · 全IPLC专线",
    "category": "primary",
    "score": "9.8",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制设备连接数量",
    "minMonthly": "¥20 起",
    "coupon": "flycat888",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://flycat1.flycatvipaff.cc/#/?code=UUcH5yh9",
    "summary": "飞猫云采用全 IPLC 专线出口与原生 IP 架构，单节点峰值带宽标称最高达 2.5Gbps，支持主流流媒体与 ChatGPT 智能工具。套餐覆盖 100GB 至 1000GB 多档月流量方案以及不限时固定总量包，且不限制设备连接数量。结算页输入专属优惠码 flycat888 可为符合条件的常规月付套餐提供 8 折优惠（飞猫·星耀版月付折后 ¥20.00 起，学生版年付折合约 ¥7.00/月）。",
    "features": [
      "IPLC 专线",
      "最高 2.5Gbps",
      "原生 IP 解锁",
      "不限制设备数",
      "券后 ¥20 起"
    ],
    "pros": [
      "全 IPLC 专线 + 原生 IP，标称最高 2.5Gbps，不限制设备连接数量",
      "支持专属特惠券 flycat888（8折），提供学生版轻量年付方案"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "muguang",
    "name": "暮光加速",
    "tag": "站长核心主推 · 优质线路",
    "category": "primary",
    "score": "9.7",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "BGP多线专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制同时在线设备数量",
    "minMonthly": "¥16 起",
    "coupon": "mm88",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://varnexa.twilightaff.com/#/?code=1eGqV85O",
    "summary": "暮光加速采用 Shadowsocks 协议、BGP 多线路智能调度与专线级出口架构，提供 70GB 至 1500GB 月流量方案、三档不限时流量包以及独享私人定制节点。官方页面标明全程不限速且不限制同时在线设备数量。全面支持 Netflix、Disney+ 与 AI 工具。当前优惠码 mm88 可享 8 折优惠（暮光·基础版月付折后 ¥16.00 起）。",
    "features": [
      "Shadowsocks",
      "BGP智能多线",
      "券后 ¥16 起",
      "支持私人定制节点",
      "支持不限时套餐"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 mm88（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "dalao",
    "name": "大佬云",
    "tag": "站长核心主推 · 全IPLC专线",
    "category": "primary",
    "score": "9.7",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制同时在线设备",
    "minMonthly": "¥16.1 起",
    "coupon": "dly888",
    "couponDiscount": "7折特惠",
    "targetUrl": "https://a01vipaff.dalaoyunaff.com/#/?code=4hRU02Tt",
    "summary": "大佬云采用企业级全 IPLC 国际专线与 Shadowsocks 协议，提供年付活动包、月付（120GB 至 1200GB）及季付订阅，以及 200GB 不限时一次性流量包。官方资料标明不限制同时在线设备数量，原生 IP 稳定解锁 Netflix 与 ChatGPT。专属优惠码 dly888 仅限新用户首次购买月付订阅套餐享 7 折优惠（初云入门版月付折后仅 ¥16.10 起，年付包折合 ¥8.00/月）。",
    "features": [
      "IPLC 专线",
      "Shadowsocks",
      "不限制在线设备",
      "券后 ¥16.1 起",
      "原生 IP 解锁"
    ],
    "pros": [
      "企业级 IPLC 专线，不限制同时在线设备数量，支持 7 折优惠码 dly888",
      "原生 IP 支持主流流媒体与 AI，提供 200GB 不限时备用包"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "firefly",
    "name": "FireFly 萤火虫",
    "tag": "站长核心主推 · 全IPLC专线",
    "category": "primary",
    "score": "9.7",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制客户端及设备数量",
    "minMonthly": "¥20 起",
    "coupon": "firefly",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://vip02.fireflyaff.com/#/?code=mcYQUZxG",
    "summary": "FireFly 萤火虫于 2026 年创立，采用全 IPLC 物理专线与现代 VLESS 协议，全节点标称不限速，且不限制客户端及设备数量。当前提供 60GB 至 1000GB 的多档月流量套餐以及 100GB 不限时固定流量包。支持原生 IP 与主流流媒体、AI 工具。新用户使用专属优惠码 firefly 享 8 折特惠（Firefly Lite 月付折后 ¥20.00 起，年付版折合约 ¥8.00/月）。",
    "features": [
      "IPLC 专线",
      "VLESS 协议",
      "全节点不限速",
      "不限客户端与设备",
      "券后 ¥20 起"
    ],
    "pros": [
      "全 IPLC 专线 + VLESS 协议，全节点不限速且不限制设备连接数量",
      "支持新用户 8 折优惠码 firefly，支持 100GB 不限时备用包"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "lingmao",
    "name": "灵猫",
    "tag": "站长核心主推 · IPLC",
    "category": "primary",
    "score": "9.7",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制客户端及设备数量",
    "minMonthly": "¥20 起",
    "coupon": "lingmao",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://vip02.civetaff.com/#/?code=2Ai6V6Ub",
    "summary": "灵猫提供全 IPLC 专线与全节点 x1 计费倍率，官方标称不限速且不限制客户端与设备数量。当前套餐覆盖 45GB 至 300GB 月流量，同时提供 100GB 与 500GB 不限时固定总量包。符合条件的常规月付套餐使用优惠码 lingmao 享 8 折优惠（月付Small折后 ¥20.00 起）。",
    "features": [
      "IPLC 专线",
      "全节点 x1 倍率",
      "全节点不限速",
      "券后 ¥20 起",
      "支持不限时套餐"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 lingmao（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "shanyue",
    "name": "闪跃",
    "tag": "站长核心主推 · IPLC",
    "category": "primary",
    "score": "9.6",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制同时使用客户端数量",
    "minMonthly": "¥19.2 起",
    "coupon": "shanyue",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://vip02.flashleapaff.com/#/?code=hCwClNUi",
    "summary": "闪跃采用全 IPLC 专线架构与原生 IP，常规节点全为 x1 计费倍率，官方资料标明晚高峰不限速且不限制客户端数量。提供 60GB 至 1000GB 的多档月流量方案，以及 100GB、200GB 不限时固定总量包。使用专属优惠码 shanyue 享 8 折特惠（闪动套餐月付折后 ¥19.20 起）。",
    "features": [
      "IPLC 专线",
      "全节点 x1 倍率",
      "原生 IP 解锁",
      "券后 ¥19.2 起",
      "不限制设备数"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 shanyue（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "wuyou",
    "name": "无忧链接",
    "tag": "站长核心主推 · 全IPLC专线",
    "category": "primary",
    "score": "9.6",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制客户端数量",
    "minMonthly": "¥15.2 起",
    "coupon": "wuyou666",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://wep01.worryfreeaff.com/#/?code=ydtFVWqU",
    "summary": "无忧链接采用全 IPLC 专线架构与全节点 x1 倍率，官方资料标称不限制速度、不限制客户端数量。提供 40GB 至 1000GB 的多档常规月流量方案、100GB 与 300GB 永久不限时固定流量包，以及企业级定制方案。官方提供 iOS、Android、Windows、macOS 四平台自研客户端。结算时使用专属优惠码 wuyou666 享 8 折特惠（舒心链接月付折后 ¥15.20 起，MINI链接年付折合约 ¥6.58/月）。",
    "features": [
      "IPLC 专线",
      "全平台自研客户端",
      "全节点 x1 倍率",
      "券后 ¥15.2 起",
      "永久流量包"
    ],
    "pros": [
      "严格源自 jichangbuy 数据库，全 IPLC 专线 + 四平台自研客户端，支持 8 折券 wuyou666",
      "不限制客户端及设备数量，提供 100GB 与 300GB 永久不限时备用包"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "kuajie",
    "name": "跨界云",
    "tag": "站长核心主推 · IPLC",
    "category": "primary",
    "score": "9.6",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制设备登录数量",
    "minMonthly": "¥16 起",
    "coupon": "kuajie",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://vip02.kuajieaff.com/#/?code=HRzqSLrR",
    "summary": "跨界云主打 IPLC 高端物理专线，全节点 1 倍率且官方标称不限速，明确支持多设备同时登录共同消耗流量。主力套餐覆盖 120GB 至 1800GB 月流量，同时提供 60GB、120GB 及 240GB 不限时固定流量包。结算使用优惠码 kuajie 享 8 折特惠（轻云 Lite 月付折后 ¥16.00 起）。",
    "features": [
      "IPLC 高端线路",
      "全节点 1x 倍率",
      "原生 IP 解锁",
      "多设备登录",
      "券后 ¥16 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 kuajie（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "flyv",
    "name": "FlyV",
    "tag": "精选品牌 · 多链路BGP调度及专线架构",
    "category": "extended",
    "score": "9.5",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "多链路BGP/专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限在线设备数",
    "minMonthly": "¥20 起",
    "coupon": "fly20",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://varnexa.flyvaff.com/#/?code=6ae5FH9i",
    "summary": "FlyV（飞V）提供多链路 BGP 智能调度及 IEPL/IPLC 专线架构，部分套餐采用 Shadowsocks 协议并标示原生 IP，全面解锁 Netflix、Disney+、YouTube 及 ChatGPT 4、Claude Opus 等开发级 AI 场景。全节点统一 1x 计费且不限制在线设备数。新客结算可使用 fly20 享 8 折特惠，年付轻量版与一次性流量包除外。",
    "features": [
      "BGP调度专线",
      "Shadowsocks",
      "开发级 AI 解锁",
      "不限制在线设备",
      "券后 ¥20 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 fly20（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "guangnian",
    "name": "光年梯",
    "tag": "精选品牌 · 全程 IPLC 专线",
    "category": "extended",
    "score": "9.5",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "全程 IPLC 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制同时在线客户端数量",
    "minMonthly": "¥14.4 起",
    "coupon": "GNTHP80",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://ggmq.gntaff.com/#/?code=k0rrn5UQ",
    "summary": "光年梯提供全程 IPLC 专线网络与原生 IP，官方标示单节点峰值达 2.5Gbps，支持智能路由解析与全球节点覆盖。支持 Netflix、Disney+ 与 ChatGPT 全面解锁，不限制在线设备数量。活动期间提供专属优惠码 GNTHP80 享 8 折优惠，适用于常规周期套餐，一次性流量包除外。",
    "features": [
      "全程 IPLC 专线",
      "最高 2.5Gbps",
      "原生 IP",
      "不限在线设备",
      "券后 ¥14.4 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "官方直发平民资费"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "lingdong",
    "name": "灵动云",
    "tag": "精选品牌 · 纯专线+BGP三网优化",
    "category": "extended",
    "score": "9.5",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "纯专线+BGP三网优化",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "多设备同时在线",
    "minMonthly": "¥16 起",
    "coupon": "zq88",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://varnexa.lingdongaff.com/#/?code=TIMwZeIR",
    "summary": "灵动云凭借纯专线加 BGP 三网优化的强力架构，确保晚高峰期间依然不限速。采用 Shadowsocks 协议，所有节点均为 1x 倍率，提供原生纯净 IP，完美解锁 Netflix、Disney+、HBO 及 ChatGPT、Claude 等应用。多设备同时在线无压力，年付及长周期结算可使用优惠码 zq88 享 8 折优惠。",
    "features": [
      "纯专线+BGP优化",
      "晚高峰不限速",
      "全节点 1x 倍率",
      "Shadowsocks",
      "券后 ¥16 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "官方直发平民资费"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "invisible",
    "name": "隐形人",
    "tag": "精选品牌 · IEPL 专线",
    "category": "extended",
    "score": "9.4",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IEPL 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制在线设备数",
    "minMonthly": "¥19.2 起",
    "coupon": "yxr888",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://varnexa.invisibleaff.com/#/?code=8jyAXfu3",
    "summary": "隐形人（Invisible）致力于提供全天候无感极速网络体验，采用高级 IEPL 专线搭配 VLESS 协议，全节点无套路 1x 倍率且全程不限速。节点覆盖港台日新美等 60+ 节点，全面支持 Netflix、Prime Video、Disney+ 与 ChatGPT、Copilot 等工具，不限制在线设备数。常规套餐使用优惠码 yxr888 可享 8 折特惠。",
    "features": [
      "IEPL 专线",
      "VLESS 协议",
      "全节点 1x 倍率",
      "全程不限速",
      "券后 ¥19.2 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 yxr888（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "guangsu",
    "name": "光速云",
    "tag": "精选品牌 · IPLC（主套餐）",
    "category": "extended",
    "score": "9.4",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "主套餐不限设备，多端同时在线",
    "minMonthly": "¥18.4 起",
    "coupon": "AMM",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://mdlky.gsyaff.com/#/?code=GKfXFvJh",
    "summary": "光速云提供轻量年付方案、148GB 至 900GB 常规月流量套餐、347GB 不限时固定总量包及企业定制服务。主套餐采用全球 IPLC 专线与原生 IP，单节点峰值标称最高 2.5Gbps，支持主流流媒体与 ChatGPT 智能交互。新用户结算时输入专属优惠码 AMM 即可享 8 折优惠。",
    "features": [
      "全球 IPLC 专线",
      "最高 2.5Gbps",
      "原生 IP",
      "支持不限时套餐",
      "券后 ¥18.4 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 AMM（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "yifan",
    "name": "一翻云",
    "tag": "精选品牌 · IEPL专线",
    "category": "extended",
    "score": "9.4",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IEPL 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制同时在线设备",
    "minMonthly": "¥18 起",
    "coupon": "1FLYYUN",
    "couponDiscount": "9折特惠",
    "targetUrl": "https://wzjc.1flyunaff.cc/#/?code=e61goYLt",
    "summary": "一翻云提供全 IEPL 高端专线网络，官方提供全平台自研客户端，无需手动导入订阅配置。拥有 60+ 优质节点，全面支持 Netflix、Disney+ 等主流流媒体及 ChatGPT 等 AI 工具，全程不限速且不限制同时在线设备数量。新用户在结算页使用优惠码 1FLYYUN 即可享受 9 折特惠。",
    "features": [
      "全 IEPL 专线",
      "全平台自研客户端",
      "60+ 优质节点",
      "不限同时在线设备",
      "券后 ¥18 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 1FLYYUN（9折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "weitu",
    "name": "唯兔云",
    "tag": "精选品牌 · IEPL / IPLC（按套餐）",
    "category": "extended",
    "score": "9.4",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC / IEPL 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "主体套餐不限制客户端数量",
    "minMonthly": "¥11.92 起",
    "coupon": "rabbit",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://fast.v2yunvipaff.com/#/?code=bGS5G7xn",
    "summary": "唯兔云提供 150GB 至 1TB 常规月流量套餐、年付轻量方案及永久固定总量包。主体套餐采用 IPLC 专线与 VLESS 协议，年付加强版则搭载企业级 IEPL 跨境专线。支持原生 IP 与流媒体 AI 全面解锁。常驻优惠码 rabbit 提供 8 折特惠，普通版、进阶版、专业版及至尊版多周期均可使用，永久流量包除外。",
    "features": [
      "IPLC/IEPL 跨境专线",
      "VLESS 协议",
      "原生 IP 解锁",
      "支持永久固定总量包",
      "券后 ¥11.92 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 rabbit（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "edge",
    "name": "EdgeNova",
    "tag": "精选品牌 · 优质线路",
    "category": "extended",
    "score": "9.3",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPLC 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "多端通用订阅",
    "minMonthly": "¥15 起",
    "coupon": "xk808",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://work.edgenovaaff.cc/#/?code=etUBOp4S",
    "summary": "EdgeNova 采用全 IPLC 专线架构与原生 IP，官方标示单节点速率最高可达 2.5Gbps，支持智能路由与流媒体全面解锁。节点覆盖港台日新美及英法德等 60+ 地区，不限制同时在线设备数量。常规套餐按自然月重置流量，并提供永久固定总量包。结算使用常驻优惠码 xk808 可享 8 折优惠。",
    "features": [
      "全 IPLC 专线",
      "最高 2.5Gbps",
      "原生 IP 解锁",
      "60+ 地区节点",
      "券后 ¥15 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 xk808（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "jiuyun",
    "name": "九云",
    "tag": "精选品牌 · 海外中转",
    "category": "extended",
    "score": "9.3",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "海外优质中转",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不同套餐支持3–5台设备同时在线",
    "minMonthly": "¥4.8 起",
    "coupon": "9yun",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://888.jiuyundl.com/#/register?code=RvrYuabu",
    "summary": "九云提供招财、聚财、旺财等丰富月度套餐（100GB 至 1200GB），同时包含年付特惠、365 天固定流量包和不限时固定总量套餐。采用优质海外中转与智能调度，原生 IP 支持 Netflix 与 ChatGPT 解锁。当前结算页输入优惠码 9yun 可享 8 折优惠，支持支付宝与微信付款，一次性包除外。",
    "features": [
      "海外智能中转",
      "原生 IP 解锁",
      "支持 365天/不限时包",
      "券后 ¥4.8 起",
      "微信/支付宝支付"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 9yun（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "bitznet",
    "name": "BitzNet",
    "tag": "精选品牌 · IEPL · 亚洲优化线路 · 普通国际线路",
    "category": "extended",
    "score": "9.3",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IEPL 专线 / 优化线路",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制本人设备数量",
    "minMonthly": "¥15.8/月起 (三年付折合)",
    "coupon": "无需优惠码",
    "couponDiscount": "官方正价",
    "targetUrl": "https://red.bnaffred.com/#/register?code=8Hqeq4XA",
    "summary": "BitzNet 提供边缘访问、核心访问与深度访问三档网络方案，覆盖广东/上海 IEPL 专线、亚洲优化及普通国际线路等不同层级，月流量提供 80GB、400GB 与 1000GB。节点支持流媒体与 AI 解锁，且不限制本人设备数量。当前结算页使用优惠码 NEW9 可享 9 折优惠，每个账户限用一次。",
    "features": [
      "IEPL 专线架构",
      "分层访问调度",
      "不限制本人设备",
      "券后 ¥15.8/月起 (三年付折合)",
      "首购专享 9 折"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "官方直发平民资费"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "baoyun",
    "name": "宝云",
    "tag": "精选品牌 · 优质线路",
    "category": "extended",
    "score": "9.2",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "BGP优化中转",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不同套餐支持2–5台设备同时在线",
    "minMonthly": "¥3.2 起",
    "coupon": "baoyun",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://888by.baoyundl.com/#/register?code=9thDnaCR",
    "summary": "宝云提供福宝、财宝、金宝等多档月度方案（45GB 至 800GB），同时具备年付特惠、365 天固定流量包及一次性总量包。支持主流流媒体与 ChatGPT 智能交互，不同套餐支持 2 至 5 台设备同时在线。结算页面输入优惠码 baoyun 可享 8 折特惠，轻量试用包与部分年付除外。",
    "features": [
      "BGP 优化线路",
      "支持 2-5 台设备",
      "支持不限时总量包",
      "券后 ¥3.2 起",
      "专属优惠码 8 折"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 baoyun（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "u1s1",
    "name": "U1S1",
    "tag": "精选品牌 · BGP 三网智能优化 + IEPL 专线出口",
    "category": "extended",
    "score": "9.2",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "BGP+IEPL专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限设备数量",
    "minMonthly": "¥16 起",
    "coupon": "U1S1",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://pkdj7.vipaff.cc/#/?code=T1UVuVDP",
    "summary": "U1S1 提供基于 BGP 三网智能优化与 IEPL 专线出口的网络方案，使用全平台 Shadowsocks 协议。套餐覆盖 120GB 至 1500GB 月流量，同时提供轻量用户的“就是好用包”和企业级定制包。全面支持 Netflix 与 ChatGPT 解锁。官方常驻优惠码 U1S1 可享受 8 折优惠，适用于所有常规周期套餐。",
    "features": [
      "IEPL 专线出口",
      "BGP 三网智能优化",
      "Shadowsocks",
      "支持企业定制",
      "券后 ¥16 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 U1S1（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "tizi",
    "name": "梯子云",
    "tag": "精选品牌 · 基础中转+多入口智能调度",
    "category": "extended",
    "score": "9.2",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "多入口智能中转",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限同时在线设备数",
    "minMonthly": "¥20 起",
    "coupon": "tiziyun",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://varnexa.ladderaff.com/#/?code=3vf6NG2u",
    "summary": "梯子云提供基础中转加多入口智能调度网络，全节点均为 1x 倍率。无设备并发限制，全程不限速，采用全平台 Shadowsocks 协议，提供极致稳定的网络连接与低延迟体验，完美解锁 Netflix、YouTube Premium 和 ChatGPT。常规套餐结算输入优惠码 tiziyun 即可享 8 折特惠。",
    "features": [
      "多入口智能调度",
      "全节点 1x 倍率",
      "全程不限速",
      "Shadowsocks",
      "券后 ¥20 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 tiziyun（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "kexin",
    "name": "可信云",
    "tag": "精选品牌 · 优质线路",
    "category": "extended",
    "score": "9.1",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IEPL 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "多端通用订阅",
    "minMonthly": "¥15 起",
    "coupon": "无需优惠码",
    "couponDiscount": "官方正价",
    "targetUrl": "https://work.kosingaff.com/#/?code=PY3isazT",
    "summary": "可信云采用全 IEPL 企业级专线，提供 60GB 至 1200GB 的多档月流量套餐及不限时备用流量包。官方全节点不限速、不限制同时在线设备数量，部署 60+ 全球核心节点保障高效响应，全面支持 Netflix、Disney+ 与 ChatGPT 生产力工具交互，官方直发平民正价。",
    "features": [
      "全 IEPL 专线",
      "60+ 全球核心节点",
      "不限速不限设备",
      "支持不限时流量包",
      "券后 ¥15 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "官方直发平民资费"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "quanqiuyun",
    "name": "全球云",
    "tag": "精选品牌 · BGP多线 + 专线级出口",
    "category": "extended",
    "score": "9.1",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "BGP多线+专线出口",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "常规套餐不限设备数",
    "minMonthly": "¥16 起",
    "coupon": "zq80",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://sswdh.gcvipaff.com/#/?code=iZl9XAe2",
    "summary": "全球云提供 BGP 多线路智能调度加专线级出口，支持 Shadowsocks 协议，全节点统一 1x 计费倍率，套餐标注不限速。流媒体解锁全面覆盖 Netflix、Hulu、HBO、Disney+ 及 DAZN，AI 解锁支持 ChatGPT 与 Claude。月付低至 ¥20 起，常规套餐不限制在线设备数，结算使用优惠码 zq80 可享 8 折。",
    "features": [
      "专线级出口架构",
      "全节点 1x 倍率",
      "全流媒体与 AI 解锁",
      "不限制在线设备",
      "券后 ¥16 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "官方直发平民资费"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "nanocloud",
    "name": "NanoCloud",
    "tag": "精选品牌 · 优质线路",
    "category": "extended",
    "score": "9.1",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IPv4/IPv6 双栈直连",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "多端通用订阅",
    "minMonthly": "¥1 起",
    "coupon": "无需优惠码",
    "couponDiscount": "官方正价",
    "targetUrl": "https://edge.shimo.men/auth/register?code=P7gzTydW",
    "summary": "NanoCloud 是一款主打高性价比与 IPv4/IPv6 双栈访问的网络加速服务，提供全平台客户端与 Telegram Bot 便捷管理。流媒体解锁涵盖 Netflix、Disney+、YouTube，并完美支持 ChatGPT 与 TikTok。提供从 100Mbps 到不限速的阶梯方案，支持 2 至 10 台设备在线，入门套餐低至每月数元。",
    "features": [
      "IPv4/IPv6 双栈",
      "全平台定制客户端",
      "Telegram Bot管理",
      "流媒体与 TikTok 解锁",
      "超高性价比"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "官方直发平民资费"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "shenxing",
    "name": "神行加速",
    "tag": "精选品牌 · IEPL",
    "category": "extended",
    "score": "9.1",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IEPL 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制设备连接数",
    "minMonthly": "¥16.1 起",
    "coupon": "sx0077",
    "couponDiscount": "7折特惠",
    "targetUrl": "https://colasaiko15.shenxingaff.com/#/?code=Puzfv3vX",
    "summary": "神行加速于 2025 年开始运营，采用 IEPL 专线与 VLESS 协议，提供原生家宽 IP、50+ 全球核心节点、三网优化及智能负载均衡。稳定解锁 Netflix、Disney+ 及 ChatGPT、Claude 等高阶 AI 工具。当前新客结算输入专属优惠码 sx0077 即可享受全场 7 折特惠，全部常规购买周期均可使用。",
    "features": [
      "IEPL 专线",
      "VLESS 协议",
      "原生家宽 IP",
      "三网智能优化",
      "券后 ¥16.1 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 sx0077（7折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "phantom",
    "name": "Phantom 幻影",
    "tag": "精选品牌 · 直连线路",
    "category": "extended",
    "score": "9.0",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "前沿协议直连",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "多端通用订阅",
    "minMonthly": "¥1 起",
    "coupon": "无需优惠码",
    "couponDiscount": "官方正价",
    "targetUrl": "https://pin.dianping.men/auth/register?code=Cv2pH8HA",
    "summary": "Phantom 成立于 2025 年，是一家主打高性价比直连线路的新晋服务商。采用 VLESS、TUIC 与 Hysteria2 等前沿协议矩阵，节点涵盖香港、日本、台湾、新加坡、美国等核心地区，并提供专有定制客户端。全面支持主流流媒体与 AI 应用，支持支付宝与微信便捷支付。",
    "features": [
      "VLESS/TUIC/Hy2",
      "前沿多协议矩阵",
      "官方定制客户端",
      "微信/支付宝支持",
      "券后 ¥1 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "官方直发平民资费"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "sujie",
    "name": "速界机场",
    "tag": "精选品牌 · 优质线路",
    "category": "extended",
    "score": "9.0",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "全 IPLC 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "多端通用订阅",
    "minMonthly": "¥20 起",
    "coupon": "sujie888",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://work.speedworldaff.cc/#/?code=q1enwrOd",
    "summary": "速界机场主打全 IPLC 专线网络与原生 IP 解锁，官方标示单节点最高可达 2.5Gbps 速率，且不限制设备连接数量。当前主力套餐包括 120GB 至 500GB 的月流量极速、超速与光速版方案，月付 ¥25 起。结算支持优惠码 sujie888 享 8 折优惠，全面支持 Netflix、Disney+ 与 ChatGPT 解锁。",
    "features": [
      "全 IPLC 专线",
      "最高 2.5Gbps",
      "原生 IP 解锁",
      "不限制设备数",
      "券后 ¥20 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 sujie888（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "jilian",
    "name": "极连云",
    "tag": "精选品牌 · 全 IPLC 专线",
    "category": "extended",
    "score": "9.0",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "全 IPLC 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限制同时在线客户端数量",
    "minMonthly": "¥14.4 起",
    "coupon": "JLY888",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://kdjhao.jlyvipaff.com/#/?code=nrPTQT2i",
    "summary": "极连云采用全 IPLC 国际专线架构，官方提供原生 IP 支持，且不限制同时在线客户端数量。节点覆盖香港、日本、台湾、新加坡及欧美主力节点，稳定解锁 Netflix、YouTube 及 ChatGPT。当前结算输入专属优惠码 JLY888 即可享全部常规套餐 8 折特惠，另有限时阶梯活动。",
    "features": [
      "全 IPLC 专线",
      "原生 IP 支持",
      "不限在线客户端",
      "主流流媒体解锁",
      "券后 ¥14.4 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 JLY888（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "yuzhouyun",
    "name": "宇宙云",
    "tag": "精选品牌 · IEPL/IPLC专线",
    "category": "extended",
    "score": "8.9",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IEPL/IPLC 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限设备数量",
    "minMonthly": "¥20 起",
    "coupon": "YUZHOU553",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://wzjc.yuzoucloud.cc/#/?code=204ZUc9t",
    "summary": "宇宙云采用 IEPL/IPLC 国际专线出口，支持先进 VLESS 协议，全程不限速且不限制设备数量，提供通用订阅与定制客户端。部署 70+ 核心节点覆盖港台日新美及欧亚地区，支持流媒体与 AI 工具全面解锁。行星基础版月付 ¥25 起，新用户专享优惠码 YUZHOU553 可享 8 折特惠。",
    "features": [
      "IEPL/IPLC 专线",
      "VLESS 协议",
      "70+ 核心节点",
      "全程不限速不限设备",
      "券后 ¥20 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 YUZHOU553（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "wavenet",
    "name": "WaveNet 浪网",
    "tag": "精选品牌 · BGP多线智能调度+专线出口",
    "category": "extended",
    "score": "8.9",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "BGP多线+专线出口",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "常规套餐不限同时在线设备数",
    "minMonthly": "¥24 起",
    "coupon": "lw888",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://varnexa.wavenetaff.com/#/?code=pcFhy7Lb",
    "summary": "WaveNet（浪网）采用 BGP 多线智能调度结合专线出口，所有节点均为 1x 倍率。无设备并发限制（除部分轻量包），全程不限速，采用 Shadowsocks 协议。流媒体支持卓越，同时完美兼容 ChatGPT 与 Claude 等高阶 AI 生产力工具。常规套餐结算使用优惠码 lw888 即可享 8 折特惠。",
    "features": [
      "BGP智能多线",
      "全节点 1x 倍率",
      "全程不限速",
      "Shadowsocks",
      "券后 ¥24 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 lw888（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "xingdaomeng",
    "name": "星岛梦",
    "tag": "精选品牌 · IEPL / IPLC（按套餐）",
    "category": "extended",
    "score": "8.9",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IEPL/IPLC 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "常规及永久套餐不限制同时使用客户端数量；定制套餐以当前购买页说明为准",
    "minMonthly": "¥22.5 起",
    "coupon": "nmw888",
    "couponDiscount": "9折特惠",
    "targetUrl": "https://kfccbb.xingdaomeng.com/#/?code=1qBePxW1",
    "summary": "星岛梦提供 60GB 尝鲜包、150GB 至 1TB 常规月流量套餐、永久固定总量包及美国原生家宽定制方案。主体采用企业级 IEPL/IPLC 专线，原生 IP 完美解锁各类流媒体与 ChatGPT。双节及常规活动提供优惠码 nmw888 享 9 折优惠，常规周期套餐均可参与，永久不限时包除外。",
    "features": [
      "IEPL/IPLC 专线",
      "原生家宽 IP",
      "全流媒体解锁",
      "永久固定总量包",
      "券后 ¥22.5 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 nmw888（9折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "sogo",
    "name": "sogo云",
    "tag": "精选品牌 · IEPL",
    "category": "extended",
    "score": "8.8",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "IEPL 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "多设备不限量同时在线",
    "minMonthly": "¥22.5 起",
    "coupon": "sogo10000",
    "couponDiscount": "9折特惠",
    "targetUrl": "https://wzjc.sogoyunaff.cc/#/?code=JvxcPy2A",
    "summary": "sogo云采用先进 VLESS 协议、企业级 IEPL 专线与三网优化架构，提供 60GB 至 1050GB 月流量套餐及多档永久不限时流量包。节点全面解锁 Netflix、Disney+ 及 ChatGPT 交互，低延迟且抗封锁能力强。结算输入常驻优惠码 sogo10000 即可享受 9 折优惠，年付及不限时包按官方规则参与。",
    "features": [
      "企业级 IEPL 专线",
      "VLESS 协议",
      "三网智能优化",
      "支持永久不限时包",
      "券后 ¥22.5 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 sogo10000（9折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "kuaili",
    "name": "快狸",
    "tag": "精选品牌 · IEPL专线",
    "category": "extended",
    "score": "8.8",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "全 IEPL 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "多设备不限量同时在线",
    "minMonthly": "¥12 起",
    "coupon": "uufly888",
    "couponDiscount": "8折特惠",
    "targetUrl": "https://work.kuailicloud.cc/#/?code=9RhZkrkV",
    "summary": "快狸提供全 IEPL 专线网络与原生 IP，单节点峰值最高至 2.5Gbps，支持主流流媒体（Netflix、Disney+、TikTok）及 ChatGPT 全面解锁。网络采用智能路由自动择优，每 30 天自动刷新流量，支持多设备不限量同时在线。当前全部常规套餐支持使用优惠码 uufly888 享 8 折优惠。",
    "features": [
      "全 IEPL 专线",
      "最高 2.5Gbps",
      "原生 IP 解锁",
      "多设备不限量在线",
      "券后 ¥12 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 uufly888（8折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  },
  {
    "slug": "ermao",
    "name": "二猫云",
    "tag": "精选品牌 · IEPL专线",
    "category": "extended",
    "score": "8.8",
    "speed": "待测试",
    "latency": "待测试",
    "packetLoss": "待测试",
    "lineType": "全 IEPL 专线",
    "streaming": "Netflix / YouTube / Disney+ 稳定解锁",
    "aiSupport": "支持 ChatGPT / Claude 生产力工具交互",
    "devices": "不限设备",
    "minMonthly": "¥17 起",
    "coupon": "ermao888",
    "couponDiscount": "85折特惠",
    "targetUrl": "https://waaa.2maoyunaff.cc/#/?code=c842udvC",
    "summary": "二猫云提供全 IEPL 专线与原生 IP，单节点峰值达 2.5Gbps，并提供智能路由解析。节点覆盖香港、台湾、日本、新加坡等，全面解锁 Netflix、Disney+、ChatGPT 及 TikTok，且不限制在线设备数。当前提供 ermao888 常驻 85 折优惠，双节期间长周期可享 zqj80 的 8 折特惠。",
    "features": [
      "全 IEPL 专线",
      "最高 2.5Gbps",
      "原生 IP 解锁",
      "不限制在线设备数",
      "券后 ¥17 起"
    ],
    "pros": [
      "严格源自 jichangbuy 官方数据库，AFF 通道与优惠码核验无误",
      "支持专属特惠券 ermao888（85折）"
    ],
    "cons": [
      "晚高峰各运营商本地网络抖动可能影响实际体感，建议优先月付体验"
    ],
    "updatedAt": "2026-10-20"
  }
];

export function getBrandBySlug(slug: string): BrandInfo | undefined {
  return allBrands.find(b => b.slug === slug);
}
