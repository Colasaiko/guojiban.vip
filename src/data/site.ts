export const site = {
  name: '国际版VIP',
  url: 'https://guojiban.vip',
  description: '国际版VIP专注于2026稳定机场推荐、梯子测评与网络加速指南。客观实测35+品牌晚高峰性能、线路套餐与避坑档案，并提供ChatGPT等海外AI与国外App的使用教程与排查指南。',
  author: '国际版VIP编辑部',
  language: 'zh-CN',
  // Bing Webmaster Tools 的 msvalidate.01 验证码，留空则不输出验证 meta
  bingSiteVerification: '',
  // 联系方式：留空时「关于本站」显示待补充提示，结构化数据也不会输出
  contactEmail: '',
  contactTelegram: 'https://t.me/+nqbO0bq71JVkMDdl',
};
export interface Category { slug: string; name: string; icon: string; description: string; title?: string; h1?: string; seoDescription?: string; }
export const categories: Category[] = [
  { slug: 'social', name: '社交与社区', icon: '◎', description: '了解不同形式的交流、讨论与社区工具。', title: '海外社交App使用教程：Instagram、X、Telegram指南', h1: '海外社交与社区App下载注册与使用教程', seoDescription: '收录Instagram、X（推特）、Telegram、Discord、Reddit、TikTok等海外社交与社区App的使用教程，包含下载注册方法，以及收不到验证码、打不开或一直加载等常见问题的排查步骤。' },
  { slug: 'video', name: '影音与娱乐', icon: '▷', description: '认识视频、音乐和流媒体服务的基本形态。', title: '海外影音App使用教程：YouTube、Netflix、Spotify', h1: '海外影音与游戏平台使用教程与打不开排查', seoDescription: '整理YouTube、Netflix、Spotify、Steam等海外视频、音乐与游戏平台的使用教程，包含会员订阅、电视观看设置，以及挂了梯子仍然转圈、只能看自制剧、提示地区不可用的解决方法。' },
  { slug: 'ai', name: 'AI 与效率', icon: '✳', description: '探索智能工具、创作辅助与效率应用。', title: '海外AI工具使用教程：ChatGPT、Claude、Gemini', h1: '海外AI工具国内使用教程：下载、注册与排查', seoDescription: '整理ChatGPT、Claude、Gemini、Perplexity、Cursor、Midjourney等海外AI工具的官方入口、下载与注册方法，以及国内打不开、提示地区不支持、挂了梯子仍然报错时的逐项排查步骤。' },
  { slug: 'search', name: '搜索与资讯', icon: '⌕', description: '关注搜索工具、信息检索与资讯阅读。', title: '谷歌服务使用教程：Gmail注册、Google Play安装', h1: '谷歌服务与图片搜索工具使用教程合集', seoDescription: '整理Gmail谷歌邮箱注册、Google Play与谷歌三件套安装、Pinterest找图与以图搜图等教程，帮助国内用户顺利注册Google账号、在安卓手机上安装应用，并找到需要的设计素材。' },
  { slug: 'airports', name: '机场评价', icon: '✈️', description: '市面其他机场综合测评、口碑避坑与使用评价档案。' },
  { slug: 'learn', name: '学习与创作', icon: '↗', description: '发现课程、知识社区与创作者工具。', title: '科学上网入门知识：术语科普、梯子与加速器区别', h1: '科学上网入门知识：术语、工具与开发访问', seoDescription: '从零了解科学上网：魔法上网、梯子、机场、专线等常见术语科普，游戏加速器与VPN的区别，国际版与国内版App的差异，以及GitHub国内打不开、克隆超时的解决方法。' },
];
// 分类链接：机场评价是独立页面 /jichang/，其他分类走 /category/<slug>/
export const categoryHref = (slug: string) => slug === 'airports' ? '/jichang/' : `/category/${slug}/`;
export interface NavItem {
  name: string;
  href: string;
  children?: {
    name: string;
    href: string;
    desc?: string;
    badge?: string;
  }[];
}

export const nav: NavItem[] = [
  { name: '首页', href: '/' },
  { name: '海外资源', href: '/resources/' },
  {
    name: '梯子推荐',
    href: '/tizi/',
    children: [
      { name: '梯子推荐', href: '/tizi/', desc: '核心主力梯子与测速推荐', badge: 'TOP' },
      { name: '梯子品牌', href: '/brands/', desc: '全球 35 大主流品牌档案库', badge: '35+' },
      { name: '品牌测评', href: '/reviews/', desc: '9 大主推品牌深度测评' },
      { name: '测速数据', href: '/data/', desc: '下载速度、延迟与丢包记录' },
      { name: '梯子对比', href: '/compare/#brand-comparison', desc: '9 家主推机场参数横评' },
      { name: '机场测评大全', href: '/jichang/', desc: '热门机场怎么样、跑路风险与避坑' },
    ]
  },
  {
    name: '全部文章',
    href: '/blog/',
    children: [
      { name: '全部文章', href: '/blog/', desc: '按更新时间浏览全部使用指南' },
      // 机场评价已在「梯子推荐」菜单中，这里只列内容分类
      ...categories.filter(c => c.slug !== 'airports').map(c => ({ name: c.name, href: categoryHref(c.slug), desc: c.description })),
    ]
  },
  { name: '专题指南', href: '/topics/' },
  { name: '关于本站', href: '/about/' }
];
export const faqs = [
  { question: '国际版VIP会整理哪些内容？', answer: '主要整理两部分内容：核心板块是 2026 稳定高速的机场与梯子推荐、品牌深度测评、套餐横向对比与防踩坑指南；流量拓展板块是国内用户常用的海外热门 AI（ChatGPT/Claude 等）、主流 App 官方正版入口、下载安装与网络异常排查。' },
  { question: '为什么很多海外网站在国内打不开？', answer: '这些服务的服务器位于境外，国内网络无法直接连接；部分服务（如 ChatGPT、Claude、Gemini）还限制了可使用的地区。各文章会说明具体原因。' },
  { question: '挂了梯子还是用不了怎么办？', answer: '常见原因是节点地区不在支持范围、分流规则没覆盖对应域名或 IP 被风控。每篇使用指南都有逐项排查步骤。' },
  { question: '在哪里找到官方入口？', answer: '海外资源页收录了 100 个常用网站与 App 的官方地址，并附上对应的使用教程，避免进入仿冒或套壳网站。' },
  { question: '文章会更新吗？', answer: '平台规则和下载方式经常变化，每篇文章都标注了更新日期，内容变化后会同步修订。' },
];
