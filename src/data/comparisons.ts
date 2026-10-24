export interface PromotedBrandCompare {
  name: string;
  slug: string;
  tag: string;
  lineType: string;
  recPrice: string;
  recPriceNote: string;
  coupon: string;
  couponDiscount: string;
  targetUrl: string;
  reviewUrl: string;
  bestFor: string;
  strengths: string[];
}

export const primaryBrandCompares: PromotedBrandCompare[] = [
  {
    name: '微风网络',
    slug: 'weifeng',
    tag: '全场7折特惠',
    lineType: '全 IPLC 物理专线 · VLESS',
    recPrice: '约 ¥17.50 / 月起',
    recPriceNote: '乘风月付原价 ¥25，7折后 ¥17.50（清风年付折合 ¥7.99/月）',
    coupon: 'weifeng90',
    couponDiscount: '全场7折特惠',
    targetUrl: '/go/weifeng/',
    reviewUrl: '/reviews/weifeng/',
    bestFor: '追求全节点不限速、不限制设备同时在线、需要不限时备用包的用户',
    strengths: ['全 IPLC 物理专线', '不限设备同时接入', '标称全节点不限速', '支持 270G/570G 不限时包']
  },
  {
    name: '飞猫云',
    slug: 'feimao',
    tag: '高性价比口碑',
    lineType: '全 IPLC 高冗余物理专线',
    recPrice: '约 ¥25.00 / 月起',
    recPriceNote: '首推月付体验，学生与多设备用户首选',
    coupon: 'flycat888',
    couponDiscount: '8折特惠',
    targetUrl: '/go/feimao/',
    reviewUrl: '/reviews/feimao/',
    bestFor: '追求节点丰富度、全平台一键导入即用、多设备共享套餐的用户',
    strengths: ['节点冗余度极高', '4K/8K 蓝光秒开', '原生多国 IP 解锁', '全平台一键导入即用']
  },
  {
    name: '暮光加速',
    slug: 'muguang',
    tag: '超低延迟旗舰',
    lineType: 'BGP 多线智能调度优化专线',
    recPrice: '约 ¥20.00 / 月起',
    recPriceNote: '首推月付体验，重度影音与电竞赛事优选',
    coupon: 'mm88',
    couponDiscount: '8折特惠',
    targetUrl: '/go/muguang/',
    reviewUrl: '/reviews/muguang/',
    bestFor: '对网络延迟极度敏感、常看 8K 超清流媒体与使用 AI 交互的极客',
    strengths: ['超低延迟专线', '8K 视频秒开无缓冲', 'AI 大模型响应极快', 'Shadowsocks 高强度加密']
  },
  {
    name: '大佬云',
    slug: 'dalao',
    tag: '老牌实力派',
    lineType: '资深高可用多线专线集群',
    recPrice: '约 ¥23.00 / 月起',
    recPriceNote: '首推月付体验，多国冷门原生节点齐备',
    coupon: 'dly888',
    couponDiscount: '7折特惠',
    targetUrl: '/go/dalao/',
    reviewUrl: '/reviews/dalao/',
    bestFor: '注重老牌长期平稳运营、需要多国冷门原生商用 IP 的出海用户',
    strengths: ['长期稳定平稳运营', '多国冷门原生 IP', '商用出口抗封锁', '支持按月与不限时包']
  },
  {
    name: 'firefly (萤火虫)',
    slug: 'firefly',
    tag: '晚高峰出境不挤',
    lineType: 'IEPL 内网私有通道专线',
    recPrice: '约 ¥25.00 / 月起',
    recPriceNote: '首推月付体验，出境段走私有物理通道避开拥堵',
    coupon: 'firefly',
    couponDiscount: '8折特惠',
    targetUrl: '/go/firefly/',
    reviewUrl: '/reviews/firefly/',
    bestFor: '晚高峰需要频繁访问 ChatGPT / Claude 生产力与 4K 流媒体的职场人',
    strengths: ['出境避开骨干拥堵', '针对 ChatGPT 深度优化', '全节点满血释放', '不限制多端设备接入']
  },
  {
    name: '灵猫',
    slug: 'lingmao',
    tag: '稳定轻量首选',
    lineType: '全 IPLC 专线（全节点真实 x1 倍率）',
    recPrice: '约 ¥25.00 / 月起',
    recPriceNote: '首推月付体验，日常浏览与学术轻量首选',
    coupon: 'lingmao',
    couponDiscount: '8折特惠',
    targetUrl: '/go/lingmao/',
    reviewUrl: '/reviews/lingmao/',
    bestFor: '日常学术查重、海淘检索、看 YouTube 的轻量省心用户',
    strengths: ['真实 x1 倍率无虚标', '资费亲民轻量首选', '学术查重与搜索顺畅', '提供固定总量不限时包']
  },
  {
    name: '闪跃',
    slug: 'shanyue',
    tag: '智能故障秒切',
    lineType: '纯 IPLC 智能健康检测专线',
    recPrice: '约 ¥24.00 / 月起',
    recPriceNote: '首推月付体验，告别手动频繁测速切节点',
    coupon: 'shanyue',
    couponDiscount: '8折特惠',
    targetUrl: '/go/shanyue/',
    reviewUrl: '/reviews/shanyue/',
    bestFor: '讨厌手动测速切节点、追求全天候不掉线全自动容灾的用户',
    strengths: ['智能故障秒级自动切换', '原生住宅 IP 出口', '万兆大吞吐调度', '多协议全平台适配']
  },
  {
    name: '跨界云',
    slug: 'kuajie',
    tag: '商务跨境大带宽',
    lineType: '万兆企业级高冗余物理专线',
    recPrice: '约 ¥20.00 / 月起',
    recPriceNote: '首推月付体验，面向跨境电商与大流量团队',
    coupon: 'kuajie',
    couponDiscount: '8折特惠',
    targetUrl: '/go/kuajie/',
    reviewUrl: '/reviews/kuajie/',
    bestFor: '跨境电商运营、海外直播推流、外贸团队多人共享大流量的用户',
    strengths: ['万兆出口极高冗余', '跨境直播推流低卡顿', '纯净商用出口 IP', '团队多人多设备支持']
  },
  {
    name: '无忧链接',
    slug: 'wuyou',
    tag: '新手平价入门',
    lineType: '全 IPLC 专线（全节点 x1 倍率）',
    recPrice: '约 ¥19.00 / 月起',
    recPriceNote: '首推月付体验，¥19 起零负担入门上车',
    coupon: '无需优惠码',
    couponDiscount: '官方平价直发',
    targetUrl: '/go/wuyou/',
    reviewUrl: '/reviews/wuyou/',
    bestFor: '刚接触科学上网、预算有限、想先花十几元月付试水的新手',
    strengths: ['¥19 起极低入门门槛', '线路简单即开即用', '零基础保姆级教程', '全节点真实 x1 倍率']
  }
];

export interface OverseasResourceCompare {
  name: string;
  icon: string;
  category: string;
  webHighlight: string;
  appHighlight: string;
  whyNeedVpn: string;
  recommendedChoice: string;
  guideUrl: string;
}

export const coreResourceCompares: OverseasResourceCompare[] = [
  {
    name: 'ChatGPT',
    icon: '🤖',
    category: 'AI 生产力',
    webHighlight: '免安装客户端，长文本代码多行排版体验最佳，独占 Canvas 与 Artifacts 实时分栏画布。',
    appHighlight: '独占高级自然语音模式（Advanced Voice）实时对话，支持手机摄像头拍图识别答疑。',
    whyNeedVpn: 'OpenAI 部署了严苛的 Cloudflare 盾，国内网络直连必报 1020 / Access Denied，必须使用低风控原生专线。',
    recommendedChoice: '办公桌面长文本研究首选 Web 网页端，练英语口语与拍照速查选 App。',
    guideUrl: '/blog/chatgpt-official-guide/'
  },
  {
    name: 'TikTok',
    icon: '🎵',
    category: '海外短视频',
    webHighlight: '电脑大屏免拔卡直接刷视频，创作者中心支持一键批量上传 4K 视频并设定时发布。',
    appHighlight: '完整全球短视频生态、实时海外直播互动与海外带货橱窗；但严格检测国内 SIM 卡。',
    whyNeedVpn: '国内直连被防火墙与字节跳动双重阻断，使用万人挤占的免费节点会导致账号被限流或 0 播放。',
    recommendedChoice: '轻度看视频用网页版免拔卡极省心；跨境出海与深度创作者建议配置纯净原生 IP 专线。',
    guideUrl: '/blog/tiktok-vs-douyin/'
  },
  {
    name: 'YouTube',
    icon: '▶️',
    category: '视频影音',
    webHighlight: '原生支持 4K / 8K 蓝光超清高码率，支持双语字幕插件与键盘快捷键自由快进操控。',
    appHighlight: '支持后台息屏音频播放（需 Premium）、无缝投屏电视 Apple TV，出行离线缓存看剧。',
    whyNeedVpn: '超高清视频极度依赖持续大带宽与低丢包率，晚高峰劣质网络会卡成 360P 甚至一直转圈白屏。',
    recommendedChoice: '大屏学习看长视频首选网页端，通勤听播客与客厅大屏选 App。',
    guideUrl: '/blog/youtube-loading-troubleshooting/'
  },
  {
    name: 'Instagram',
    icon: '📸',
    category: '视觉社交',
    webHighlight: '电脑大图无压缩浏览摄影原图，支持电脑直接上传高分辨率贴文，免去安装海外客户端门槛。',
    appHighlight: '快拍（Stories）拥有丰富的互动贴纸与滤镜，Reels 连续短片沉浸式算法推荐，相机随开随拍。',
    whyNeedVpn: '图片与短视频流高并发请求多，国内直连被封锁，需要专线梯子保障无损大图秒刷不灰块。',
    recommendedChoice: '找设计灵感与桌面发帖用网页版极快，看朋友动态与即时拍摄推荐移动 App。',
    guideUrl: '/blog/instagram-web-login/'
  },
  {
    name: 'Netflix',
    icon: '🍿',
    category: '正版流媒体',
    webHighlight: '浏览器点开即播，账号管理与账单续费方便；Edge 浏览器配合扩展可支持 4K 播放。',
    appHighlight: '认证电视盒子（Apple TV / 电视版）独占 4K HDR 杜比视界与全景声震撼家庭影院体验。',
    whyNeedVpn: 'Netflix 拥有极严版权风控，普通机房 IP 只能看自制剧，只有精选原生流媒体解锁专线才能看全版权片库。',
    recommendedChoice: '客厅大屏看 4K 杜比视听体验最震撼，选购机场时务必确认原生流媒体解锁节点。',
    guideUrl: '/blog/netflix-beginner-guide/'
  },
  {
    name: 'X (原 Twitter)',
    icon: '✖️',
    category: '全球舆论场',
    webHighlight: '支持 X Pro 多栏监控全球大事件与科技论文，长文编辑排版舒适，注册不易卡死人机验证。',
    appHighlight: '第一手突发新闻锁屏即刻推送，Space 语音空间多人群聊开黑交流，随手发推互动。',
    whyNeedVpn: '国内网络被全面屏蔽，注册与刷推需稳定长连接专线，避免节点频繁跳动触发账号锁定。',
    recommendedChoice: '深度阅读与资讯检索首选桌面 Web，关注突发新闻选手机 App。',
    guideUrl: '/blog/x-twitter-guide/'
  }
];
