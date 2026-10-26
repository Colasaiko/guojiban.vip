export interface OtherAirportItem {
  id: string;
  name: string;
  alias?: string;
  websiteHint: string;
  status: 'danger' | 'warning' | 'testing' | 'neutral' | 'recommended';
  statusLabel: string;
  riskScore: '高危跑路' | '高风险' | '中等' | '较低' | '评测中';
  nodeArchitecture: string;
  pricingOverview: string;
  pros: string[];
  cons: string[];
  verdict: string;
  lastAudited: string;
  requestedByUsers?: number;
  tags: string[];
}

export const otherAirportsAuditCriteria = [
  {
    title: '线路与套餐核对',
    desc: '核对官网标注的线路类型（专线 / 中转 / 直连）、套餐价格、流量与倍率规则，分清宣传语和实际说明。'
  },
  {
    title: '第三方监测数据',
    desc: '参考第三方监测站的可用率、延迟与下载速度快照，注明数据日期，只作参考、不代表长期表现。'
  },
  {
    title: '运营资质与跑路风险',
    desc: '查看开站时间、官方公告频道、近期故障与补偿记录，以及是否大力推销长期或永久套餐。'
  },
  {
    title: 'AI 与流媒体可用性',
    desc: '整理官方与第三方评测对 ChatGPT、Claude、Netflix 等服务的支持说明，未实测时会明确标注。'
  }
];

export const otherAirportsList: OtherAirportItem[] = [
  {
    id: 'oa-cloud-stream',
    name: '极光闪电云（样本测评）',
    alias: '某打折年付网红机场',
    websiteHint: '域名常变更 · 常见于贴吧/知乎推广',
    status: 'warning',
    statusLabel: '⚠️ 慎选避坑 · 晚高峰严重挤兑',
    riskScore: '高风险',
    nodeArchitecture: '普通公网直连中转（非物理专线）',
    pricingOverview: '月付 8.8 元起 / 宣称 99 元三年',
    pros: ['价格极低，入场门槛几乎为零', '平时白天看网页尚可直达'],
    cons: [
      '晚高峰 20:30~22:30 骨干网丢包率高达 35%~50%',
      '节点频繁红叹号超时，YouTube 1080P 频繁缓冲转圈',
      '不支持 ChatGPT 连续对话，容易触发 Cloudflare 5秒人机盾',
      '官方 TG 群开启全员禁言，客服工单平均 48 小时无响应'
    ],
    verdict: '典型的靠超低价走量的公网超卖机场，超量塞客导致晚高峰近乎瘫痪。强烈建议切勿购买多年付套餐，仅适合作为无时效要求的廉价玩具。',
    lastAudited: '2026-03 抽测',
    requestedByUsers: 246,
    tags: ['公网超卖', '晚高峰断流', '低价走量', '慎选年付']
  },
  {
    id: 'oa-forever-vip',
    name: '星际极速互联（高危预警）',
    alias: '大搞终身会员新站',
    websiteHint: '新注册 2 个月 · 频繁推大促弹窗',
    status: 'danger',
    statusLabel: '❌ 跑路预警 · 警惕大额永久套路',
    riskScore: '高危跑路',
    nodeArchitecture: '廉价机房直连 VPS 拼接',
    pricingOverview: '168 元永久终身会员 / 59 元包年',
    pros: ['宣传噱头大，套餐流量不限'],
    cons: [
      '开站不足 90 天即推出“永久终身 VIP”，违背机场运营经济学规律',
      'IP 多为黑名单机房段，被 OpenAI、Reddit 严格封禁',
      '存在随时关站跑路、失联的极高资金归零风险',
      '节点经常批量失联，缺少容灾灾备方案'
    ],
    verdict: '高危预警！任何推出“永久套餐”、“终身不限流”的机场都是违背服务器与带宽成本的圈钱逻辑。切勿贪小便宜转账大额套餐。',
    lastAudited: '2026-03 核实',
    requestedByUsers: 382,
    tags: ['永久会员圈钱', '高危跑路', '开站不足3月', '坚决避开']
  },
  {
    id: 'oa-blue-sky',
    name: '蓝天穿梭（中立观望）',
    alias: '老牌技术党小作坊',
    websiteHint: '运营已满 2 年 · 熟人口碑站',
    status: 'neutral',
    statusLabel: '🟡 中立观望 · 适合做轻度备用',
    riskScore: '中等',
    nodeArchitecture: 'BGP 入口多线中转',
    pricingOverview: '月付 18 元起 / 按量 0.3 元/G',
    pros: ['技术站长维护较勤快，群内交流较开放', '提供按量计费套餐，适合低频查资料用户'],
    cons: [
      '非内网 IPLC 物理专线，特殊敏感时期仍会受到公网 QoS 干扰',
      '香港与日本热门节点晚高峰延迟波动较明显（120~180ms）',
      '流媒体解锁能力一般，美区 Netflix 偶发只能看自制剧'
    ],
    verdict: '中规中矩的二线中转机场，没有虚标欺骗，但抗审查与抗拥堵上限受限于普通中转架构。可以买个按量或者一个月作为备选，不建议作主力生产力。',
    lastAudited: '2026-03 抽测',
    requestedByUsers: 119,
    tags: ['按量计费', '二线中转', '备用可选', '轻度浏览']
  },
  {
    id: 'oa-phoenix-speed',
    name: '云帆加速（实测排期中）',
    alias: '近期多位读者留言求测',
    websiteHint: '近期各论坛频繁发帖推广',
    status: 'testing',
    statusLabel: '⏳ 正在压测 · 数据分析整理中',
    riskScore: '评测中',
    nodeArchitecture: '宣称隧道中转 · 待抓包核验',
    pricingOverview: '月付 15 元 (120G)',
    pros: ['官网设计规范，支持微信/支付宝快捷支付', '已购入月付套餐并接入三网测速环境'],
    cons: [
      '测试样本周期尚不足 14 天，暂未经历跨月敏感期考验',
      '晚高峰香港 BGP 节点速率波动数据采集中'
    ],
    verdict: '目前已进入国际版VIP 实验室连续 7 天 24 小时监控大盘，重点核验其晚高峰 4K 缓冲曲线与 IP 纯净度，预计下周发布完整体验评级。',
    lastAudited: '2026-03 测试中',
    requestedByUsers: 175,
    tags: ['网友求测', '正在压测', '待出报告', '保持关注']
  },
  {
    id: 'oa-aurora-fast',
    name: '极光闪跃（备选体验）',
    alias: '主打平价二线专线',
    websiteHint: '稳定运营 18 个月',
    status: 'recommended',
    statusLabel: '🟢 表现尚可 · 可考虑月付尝鲜',
    riskScore: '较低',
    nodeArchitecture: '单端 IEPL 专线中转',
    pricingOverview: '月付 19.9 元 (150G)',
    pros: [
      '确实部署了物理专线入口，晚高峰基本不丢包',
      'ChatGPT 与 Claude 网页版基本秒开，体验较顺畅'
    ],
    cons: [
      '高峰期带宽限速在 100Mbps 左右，8K 超清缓冲略显吃力',
      '节点国家覆盖相对精简，以港台日新为主，冷门国家较少'
    ],
    verdict: '表现中规中矩的平价专线梯子，适合预算在 20 元以内且对 4K/网页有稳定要求的用户。建议坚持月付，切勿直接年付。',
    lastAudited: '2026-03 抽测',
    requestedByUsers: 94,
    tags: ['平价专线', '月付尚可', '低丢包', 'AI顺畅']
  }
];
