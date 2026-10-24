export const site = {
  name: '国际版VIP',
  url: 'https://guojiban.vip',
  description: '整理国内用户关注的国外好用App推荐、海外热门AI工具（ChatGPT/Claude等）使用指南与前沿数字资源。国际版VIP带你打破信息差，一站畅用全球优质软件与网站。',
  author: '国际版VIP编辑部',
  language: 'zh-CN',
  // Bing Webmaster Tools 的 msvalidate.01 验证码，留空则不输出验证 meta
  bingSiteVerification: '',
  // 联系方式：留空时「关于本站」显示待补充提示，结构化数据也不会输出
  contactEmail: '',
  contactTelegram: 'https://t.me/+nqbO0bq71JVkMDdl',
};
export const categories = [
  { slug: 'social', name: '社交与社区', icon: '◎', description: '了解不同形式的交流、讨论与社区工具。' },
  { slug: 'video', name: '影音与娱乐', icon: '▷', description: '认识视频、音乐和流媒体服务的基本形态。' },
  { slug: 'ai', name: 'AI 与效率', icon: '✳', description: '探索智能工具、创作辅助与效率应用。' },
  { slug: 'search', name: '搜索与资讯', icon: '⌕', description: '关注搜索工具、信息检索与资讯阅读。' },
  { slug: 'airports', name: '机场评价', icon: '✈️', description: '市面其他机场综合测评、口碑避坑与使用评价档案。' },
  { slug: 'learn', name: '学习与创作', icon: '↗', description: '发现课程、知识社区与创作者工具。' },
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
    href: '/vpn/',
    children: [
      { name: '梯子推荐', href: '/vpn/', desc: '核心主力梯子与测速推荐', badge: 'TOP' },
      { name: '梯子品牌', href: '/brands/', desc: '全球 35 大主流品牌档案库', badge: '35+' },
      { name: '品牌测评', href: '/reviews/', desc: '第三方客观实测详细报告', badge: '实测' },
      { name: '实测大盘', href: '/data/', desc: '晚高峰速率与延迟监控大盘', badge: 'LIVE' },
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
  { question: '国际版VIP会整理哪些内容？', answer: '整理国内用户常用的海外网站与 App：官方入口、下载方法、打不开的原因，以及挂了梯子仍然用不了时的排查步骤。' },
  { question: '为什么很多海外网站在国内打不开？', answer: '这些服务的服务器位于境外，国内网络无法直接连接；部分服务（如 ChatGPT、Claude、Gemini）还限制了可使用的地区。各文章会说明具体原因。' },
  { question: '挂了梯子还是用不了怎么办？', answer: '常见原因是节点地区不在支持范围、分流规则没覆盖对应域名或 IP 被风控。每篇使用指南都有逐项排查步骤。' },
  { question: '在哪里找到官方入口？', answer: '海外资源页收录了 100 个常用网站与 App 的官方地址，并附上对应的使用教程，避免进入仿冒或套壳网站。' },
  { question: '文章会更新吗？', answer: '平台规则和下载方式经常变化，每篇文章都标注了更新日期，内容变化后会同步修订。' },
];
